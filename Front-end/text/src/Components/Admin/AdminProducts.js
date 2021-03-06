import React, { Component } from 'react';
import SidebarAdmin from './SidebarAdmin';
import '../../CSS/admin.css';
import axiosInstance from '../../helper/AxiosInstance';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class AdminProducts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axiosInstance.get('/products').then(res => {
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
        rowIdx = i;
        return true;
      }
      return false;
    });
    if (targetRow) {
      targetRow[fieldName] = value;
      data[rowIdx] = targetRow;
    }
    this.setState({
      data: this.state.data
    });
    axiosInstance.put('/products/' + row['_id'], {
      name: row['name'],
      description: row['description'],
      price: row['price'],
      image: row['image']
    }).then(res => {
      console.log('thanh cong');
    }).catch(err => {
      console.log("Da sua khong thanh cong");
    });
  }

  onAddRow = (row) => {
    axiosInstance.post('/products', {
      name: row['name'],
      description: row['description'],
      price: row['price'],
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
    axiosInstance.delete('/products/' + row[0])
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

  categoryNameFormatter(cell, row) {
    if (typeof cell !== 'undefined' && cell !== null)
      return cell.name;
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
        insertRow deleteRow search
        pagination

        cellEdit={cellEditProp}
        options={{
          onCellEdit: this.props.onCellEdit,
          onDeleteRow: this.props.onDeleteRow,
          onAddRow: this.props.onAddRow
        }}>
        <TableHeaderColumn dataField='_id' hiddenOnInsert isKey={true}>Products ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Products Name</TableHeaderColumn>
        <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
        <TableHeaderColumn dataField='image'  >Image</TableHeaderColumn>
        <TableHeaderColumn dataField='category' hiddenOnInsert dataFormat={this.categoryNameFormatter} >Category</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}