import React, { Component } from 'react';
import SidebarAdmin from './SidebarAdmin';
import '../../CSS/admin.css';
import axiosInstance from '../../helper/AxiosInstance';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class AdminProducts extends Component {
  componentDidMount() {
    if (localStorage.getItem('role') !== 'admin') {
      alert('Bạn không có quyền vào trang này');
      this.props.history.push('/');
      window.location.reload();
    }
  }

  render() {
    return (
      <div>
        <SidebarAdmin />
        <div className="main">
          <p>Bạn có thể quản lý tại đây</p>
        </div>
      </div>
    );
  }
}