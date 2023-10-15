import React from 'react'
import "./Seller.css"


export default function ChatboxSeller() {


  return (
  <main>
    <div className="header-seller">
        <div className="left-seller">
          <h1>Quản lý Tour Du Lịch</h1>
          <ul className="breadcrumb">
            <li><a href="#">
              Seller
            </a></li>
            /
            <li><a href="#" className="active">Chatbox</a></li>
          </ul>
        </div>
      </div>
      <div className="chat-container-seller">
        <div className="user-list-seller">
          <div className="user-list-header-seller">
            <h2>Người dùng</h2>
            <input type="text" className="search-input-sellerchat" placeholder="Tìm kiếm..." />
          </div>
          <ul>
            <li>Người dùng A</li>
            <li>Người dùng B</li>
            <li>Người dùng C</li>
            {/* Thêm người dùng vào đây */}
          </ul>
        </div>
        <div className="chat-box-seller">
          <div className="chat-header-seller">
            <h2>Chat với Người dùng A</h2>
          </div>
          <div className="chat-messages-seller">
            <p className="message-seller received">Xin chào!</p>
            <p className="message-seller sent">Chào bạn, bạn có khỏe không?</p>
            <p className="message-seller received">Mình khỏe, cảm ơn bạn!</p>
            {/* Các tin nhắn khác */}
          </div>
          <div className="chat-input-seller">
            <input type="text" placeholder="Nhập tin nhắn..." />
            <button>Gửi</button>
          </div>
        </div>
      </div>
  </main>
     

    
  )
}
