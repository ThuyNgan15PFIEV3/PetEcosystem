import React, { Component } from 'react';
import SidebarAdmin from './SidebarAdmin';
import '../../CSS/admin.css';
import axiosInstance from '../../helper/AxiosInstance';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class AdminCategory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axiosInstance.get('/orders').then(res => {
      console.log(res.data.data);
      this.setState({
        data: res.data.data
      });
    });
  }

  onCellEdit = (row, fieldName, value) => {
    const { data } = this.state;
    let rowIdx;
    const targetRow = data.find((store, i) => {
      if (store._id === row._id) {
        console.log(i);
        rowIdx = i;
        return true;
      }
      return false;
    });
    console.log(rowIdx);
    if (targetRow) {
      targetRow[fieldName] = value;
      data[rowIdx] = targetRow;
    }
    this.setState({
      data: this.state.data
    });
    axiosInstance.put('/orders/' + row['_id'], {
      state: row['state']
    }).then(res => {
      console.log(res);
      console.log('thanh cong');
    }).catch(err => {
      console.log("Da sua khong thanh cong");
    });
  }

  onAddRow = (row) => {
    axiosInstance.post('/categories', {
      name: row['name'],
      description: row['description'],
    }).then(res => {
      console.log(res);
      this.state.data.push(res.data.data)
      this.setState({
        data: this.state.data
      });
    }).catch(err => {
      console.log("Da sua khong thanh cong");
    });

  }

  onDeleteRow = (row) => {
    this.state.data = this.state.data.filter((product) => {
      return product._id !== row[0];
    });
    axiosInstance.delete('/orders/' + row[0])
      .then(res => {
        console.log("Da sua thanh cong");
      })
      .catch(err => {
        console.log("Da sua khong thanh cong");
      });
    this.setState({
      data: this.state.data
    });
  }

  render() {
    return (
      <div>
        <SidebarAdmin />
        <div className="main">
          <RemoteAlternative
            onCellEdit={this.onCellEdit}
            onAddRow={this.onAddRow}
            onDeleteRow={this.onDeleteRow}
            {...this.state} />
        </div>

      </div>

    );
  }
}

class RemoteAlternative extends React.Component {
  constructor(props) {
    super(props);
  }

  remote(remoteObj) {
    // Only cell editing, insert and delete row will be handled by remote store
    remoteObj.cellEdit = true;
    remoteObj.insertRow = true;
    remoteObj.dropRow = true;
    return remoteObj;
  }
  usernameFormatter(cell, row) {
    if (typeof cell !== 'undefined' && cell !== null)
      return cell.username;
    else return
  }

  productnameFormatter(cell, row) {
    if (typeof cell !== 'undefined' && cell !== null)
      return cell.name
    else return
  }
  render() {
    const cellEditProp = {
      mode: 'click'
    };
    const selectRow = {
      mode: 'checkbox',
      cliclToSelct: true
    };
    return (
      <BootstrapTable data={this.props.data}
        selectRow={selectRow}
        remote={this.remote}
        search
        deleteRow
        pagination

        cellEdit={cellEditProp}
        options={{
          onCellEdit: this.props.onCellEdit,
          onDeleteRow: this.props.onDeleteRow,
          onAddRow: this.props.onAddRow
        }}>
        <TableHeaderColumn dataField='_id' hiddenOnInsert isKey={true}>Order ID</TableHeaderColumn>
        <TableHeaderColumn dataField='userId' hiddenOnInsert editable={{ type: "textarea", readOnly: true }} dataFormat={this.usernameFormatter}>User Name</TableHeaderColumn>
        <TableHeaderColumn dataField='productId' hiddenOnInsert editable={{ type: "textarea", readOnly: true }} dataFormat={this.productnameFormatter}>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='state' editable={{ type: 'select', options: { values: ['complete', 'destroy', 'process', 'wait'] } }}>State</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}