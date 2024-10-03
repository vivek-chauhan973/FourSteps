import AdminLayout from '@/Component/admin/AdminLayout';
import React from 'react';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p>Welcome to the admin panel. Here you can manage users, content, and settings.</p>
    </AdminLayout>
  );
};

export default AdminDashboard;
