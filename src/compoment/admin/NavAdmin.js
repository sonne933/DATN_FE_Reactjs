import React from 'react'
import { admin } from '../../assets/listImage'

export default function NavAdmin() {
    return (
        <nav>
        <i className="bx bx-menu" />
       
        <a href="#" className="profile">
          <img src={admin} />
        </a>
      </nav>
      

    )
}
