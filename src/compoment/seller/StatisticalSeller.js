import React from 'react'

export default function StatisticalSeller() {
  return (
    <main>
  <div className="header-seller">
    <div className="left-seller">
      <h1>Thống Kê</h1>
      <ul className="breadcrumb">
        <li><a href="#">
            Seller
          </a></li>
        /
        <li><a href="#" className="active">Thống Kê</a></li>
      </ul>
    </div>
  </div>
  {/* Insights */}
  <ul className="insights-seller">
    <li>
      <i className="bx bx-map-pin" />
      <span className="info">
        <h3>
          1,074
        </h3>
        <p>Tour</p>
      </span>
    </li>
    <li><i className="bx bx-building-house" />
      <span className="info">
        <h3>
          3,944
        </h3>
        <p>Lịch trình</p>
      </span>
    </li>
    <li><i className="bx bx-user" />
      <span className="info">
        <h3>
          14,721
        </h3>
        <p>Hóa đơn</p>
      </span>
    </li>
    <li><i className="bx bx-dollar-circle" />
      <span className="info">
        <h3>
          6,742
        </h3>
        <p>Doanh thu</p>
      </span>
    </li>
  </ul>
  {/* End of Insights */}
</main>

  )
}
