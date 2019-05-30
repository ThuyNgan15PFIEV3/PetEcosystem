import React, { Component } from 'react';
import SidebarAdmin from './SidebarAdmin';
import '../../CSS/admin.css';
import axiosInstance from '../../helper/AxiosInstance';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class AdminComments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axiosInstance.get('/comments').then(res => {
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
    axiosInstance.put('/posts/' + row['_id'], {
      title: row['title'],
      content: row['content'],
    }).then(res => {
      console.log(res);
      console.log('thanh cong');
    }).catch(err => {
      console.log("Da sua khong thanh cong");
    });
  }



  onDeleteRow = (row) => {
    this.state.data = this.state.data.filter((product) => {
      return product._id !== row[0];
    });
    axiosInstance.delete('/posts/' + row[0])
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

      </div >

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
    remoteObj.dropRow = true;
    return remoteObj;
  }

  usernameFormatter(cell, row) {
    if (typeof cell !== 'undefined' && cell !== null)
      return cell.email;
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
        deleteRow search
        pagination

        cellEdit={cellEditProp}
        options={{
          onCellEdit: this.props.onCellEdit,
          onDeleteRow: this.props.onDeleteRow,
        }}>
        <TableHeaderColumn dataField='_id' hiddenOnInsert isKey={true}>Comment ID</TableHeaderColumn>
        <TableHeaderColumn dataField='userId' hiddenOnInsert editable={{ type: "textarea", readOnly: true }} dataFormat={this.usernameFormatter}>Email</TableHeaderColumn>
        <TableHeaderColumn dataField='comment'>Comment</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}