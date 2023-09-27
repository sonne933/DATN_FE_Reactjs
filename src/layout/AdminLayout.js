import React from 'react'
import Sidebar from '../compoment/admin/Sidebar'
import '../compoment/admin/Admin.css'
import NavAdmin from '../compoment/admin/NavAdmin'

import {  Outlet } from "react-router-dom";




export default function AdminLayout() {
  return (
  
    <div>
      
      <Sidebar />
      <div className="content_admin">
          <NavAdmin/>
          <Outlet />
      </div>
    </div>
  
  )
}
