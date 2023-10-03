import React from 'react'
import SideBarSeller from '../compoment/seller/SideBarSeller'
import { Outlet } from 'react-router-dom'
import NavSeller from '../compoment/seller/NavSeller'
import "../compoment/seller/Seller.css"

export default function SellerLayout() {
  return (
    <div>
      <SideBarSeller />
      <div className="content-seller">
          <NavSeller />
          <Outlet />
      </div>
    </div>
  )
}
