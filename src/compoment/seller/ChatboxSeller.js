import React, { useEffect, useRef, useState } from 'react'
import "./Seller.css"
import { db } from '../../firebaseConfig'
import { collection, query, onSnapshot, addDoc, serverTimestamp, getDocs, orderBy, doc, setDoc } from 'firebase/firestore';

export default function ChatboxSeller() {
  const [idRoom, setIdRoom] = useState(null);
  const [list, setList] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null); // Thêm state cho người dùng được chọn
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

  useEffect(() => {
    const q = query(collection(db, "chat"));
    const unsubscribe = onSnapshot(q, snapshot => {
      const rooms = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setList(rooms);
    });
    return () => unsubscribe();
  }, []);



  const selectRoom = (roomId, userName) => {
    setSelectedRoom(roomId);
    setSelectedUser(userName);
  };


  const initiateChatRoomForSeller = async (roomId, initialMessage) => {
    try {
      await addDoc(collection(db, 'chat', roomId, 'messages'), {
        uid: "seller",
        name: "Seller Name",
        status: "0",
        text: initialMessage,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error sending message in seller's room: ", error);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) { // Thêm điều kiện !event.shiftKey để không gửi khi nhấn Shift + Enter
      sendMessage();
      event.preventDefault(); // Ngăn trình duyệt thực hiện hành động mặc định của phím Enter
    }
  }

  const sendMessage = async () => {
    if (!message.trim()) {
      return;
    }
    try {
      if (!selectedRoom) {
        await initiateChatRoomForSeller('seller', message.trim());
        setSelectedRoom('seller');
      }
      await addDoc(collection(db, 'chat', selectedRoom || 'seller', 'messages'), {
        uid: "seller",
        name: "Seller Name",
        status: "0",
        text: message.trim(),
        timestamp: serverTimestamp(),
      });
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (selectedRoom) {
      const messagesQuery = query(collection(db, 'chat', selectedRoom, 'messages'), orderBy('timestamp'));
      const unsubscribe = onSnapshot(messagesQuery, snapshot => {
        const fetchedMessages = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setMessages(fetchedMessages);
      });
      return () => unsubscribe();
    }
  }, [selectedRoom]);

  const endOfMessagesRef = useRef(null);
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
}, [messages]);

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
          </div>
          <ul>
            <ul>
              {list.map(room => (
                <li key={room.id} onClick={() => selectRoom(room.id, room.userName)}>
                  {room.userName}
                </li>
              ))}
            </ul>


          </ul>
        </div>
        <div className="chat-box-seller">
          <div className="chat-header-seller">
            <h2>Chat với {selectedUser || "Người dùng"}</h2>
          </div>
          <div className="chat-messages-seller">
            {messages.map((message, index) => (
              <p
                key={message.id}
                className={`message-seller ${message.uid === "seller" ? 'sent' : 'received'}`}
                ref={index === messages.length - 1 ? endOfMessagesRef : null}
              >
                <strong>{message.name}:</strong> {message.text}
              </p>
            ))}

          </div>
          <div className="chat-input-seller">
            <input
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Nhập tin nhắn..."
            />
            <button onClick={sendMessage}>Gửi</button>
          </div>
        </div>
      </div>
    </main>
  )
}
