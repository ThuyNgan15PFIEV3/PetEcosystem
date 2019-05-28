import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SidebarAdmin from './SidebarAdmin';
import '../../CSS/admin.css';
import axiosInstance from '../../helper/AxiosInstance';
import { BootstrapTable, TableHeaderColumn, InsertModalHeader } from 'react-bootstrap-table';

export default class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axiosInstance.get('user/getAllUsers').then(res => {
      console.log(res.data.data);
      this.setState({
        data: res.data.data
      });
    });
  }

  onCellEdit = async (row, fieldName, value) => {
    const { data } = this.state;
    let rowIdx;
    const targetRow = data.find((user, i) => {
      if (user._id === row._id) {
        rowIdx = i;
        return true;
      }
      return false;
    });
    if (targetRow) {
      targetRow[fieldName] = value;
      data[rowIdx] = targetRow;
      this.setState({ data });
    }
    var body = {
      email: row["email"],
      address: row["address"],
      username: row["username"],
      _id: row["_id"]
    };
    await axiosInstance.put('/user/update/' + row["_id"], body)
      .then(res => {
        console.log(res);
        console.log("Da sua thanh cong");
      })
      .catch(err => {
        console.log("Da sua khong thanh cong");
      });
  }

  // onAddRow = async (row) => {
  //   console.log(row);
  //   var body = {
  //     username: row['username'],
  //     email: row['email']
  //   };
  //   console.log(body);
  //   await axiosInstance.post('/api/user/add', body)
  //     .then(res => {
  //       console.log("Da sua thanh cong");
  //     })
  //     .catch(err => {
  //       console.log("Da sua khong thanh cong");
  //     });
  // }

  onDeleteRow = async (row) => {
    let { data } = this.state
    data = data.filter((product) => {
      return product._id !== row[0];
    });
    await axiosInstance.delete('/api/users/delete/' + row[0])
      .then(res => {
        console.log("Da sua thanh cong");
      })
      .catch(err => {
        console.log("Da sua khong thanh cong");
      });


  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <SidebarAdmin />
        <div className="main">
          <RemoteAlternative
            onCellEdit={this.onCellEdit}
            // onAddRow={this.onAddRow}
            onDeleteRow={this.onDeleteRow}
            data={this.state.data} />
        </div>

      </div>

    );
  }
}

class RemoteAlternative extends React.Component {

  remote(remoteObj) {
    // remoteObj.insertRow = true;
    remoteObj.cellEdit = true;
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
      <div>
        <BootstrapTable
          data={this.props.data}
          selectRow={selectRow}
          remote={this.remote}
          // insertRow
          deleteRow
          search
          cellEdit={cellEditProp}
          options={{
            // onAddRow: this.props.onAddRow,
            onCellEdit: this.props.onCellEdit,
            onDeleteRow: this.props.onDeleteRow,
          }}>
          <TableHeaderColumn dataField='_id' isKey >ID</TableHeaderColumn>
          <TableHeaderColumn dataField='username'>UserName</TableHeaderColumn>
          <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
          <TableHeaderColumn dataField='address'>Address</TableHeaderColumn>
        </BootstrapTable>

      </div>
    );
  }
}
