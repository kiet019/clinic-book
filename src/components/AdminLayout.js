import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader'; 
import AdminSidebar from './AdminSidebar'; 
function AdminLayout() {
  return (
    <div>
      <AdminHeader />
      <AdminSidebar />
      <div className="admin-content">
      <Outlet /> {/* Đây là nơi các trang admin sẽ được hiển thị */}
      </div>
    </div>
  );
}

export default AdminLayout;
