import React, { Component } from 'react';
import SidebarAdmin from './SidebarAdmin';
import '../../CSS/admin.css';
import axiosInstance from '../../helper/AxiosInstance';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axiosInstance.get('/stores').then(res => {
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
    console.log(row['typeOfStore']);
    console.log(row['_id']);
    let body = {
      name: row['name'],
      description: row['description'],
      address: row['address'],
      typeOfStore: row['typeOfStore']
    }
    console.log(body);
    axiosInstance.put('/stores/detail/' + row['_id'], body).then(res => {
      console.log(res);
      console.log('thanh cong');
    }).catch(err => {
      console.log("Da sua khong thanh cong");
    });
  }

  onAddRow = (row) => {
    axiosInstance.post('/stores', {
      name: row['name'],
      description: row['description'],
      address: row['address'],
      typeOfStore: row['typeOfStore']
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
    this.state.data = this.state.data.filter((store) => {
      return store._id !== row[0];
    });
    axiosInstance.delete('/stores/detail/' + row[0])
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
        cellEdit={cellEditProp}
        options={{
          onCellEdit: this.props.onCellEdit,
          onDeleteRow: this.props.onDeleteRow,
          onAddRow: this.props.onAddRow
        }}>
        <TableHeaderColumn dataField='_id' hiddenOnInsert isKey={true}>Stores ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Stores Name</TableHeaderColumn>
        <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
        <TableHeaderColumn dataField='address'>Address</TableHeaderColumn>
        <TableHeaderColumn dataField='typeOfStore' multiple={true}
          editable={{ type: 'select', options: { values: ['normal', 'beauty', 'training', 'care'] } }}>Type Of Stores</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}