import React, { useEffect, useRef, useState } from 'react';
import { footer_blog_1, logo } from '../../assets/listImage';
import { connect, useSelector } from 'react-redux';
import { db } from '../../firebaseConfig'
import { collection, query, onSnapshot, orderBy, serverTimestamp, addDoc, where, doc, setDoc } from 'firebase/firestore';
import { setRoomId } from '../../redux/actions';


function Footer({ isLoggedIn }) {
    const isUserLoggedIn = useSelector(state => state.isLoggedIn) || sessionStorage.getItem('isLoggedIn') === 'true';
    const [isChatVisible, setIsChatVisible] = useState(false);
    const [messages, setMessages] = useState([]);
    const [mess, setMess] = useState('');
    const [currentRoomId, setCurrentRoomId] = useState(null);

    const user = JSON.parse(sessionStorage.getItem('user'));
    const initiateChatRoom = async (userId, userName) => {
        try {
            const chatDocRef = doc(collection(db, 'chat'), userId);
            await setDoc(chatDocRef, {
                user: userId,
                userName: userName
            });
            console.log("Chat room initiated successfully.");
        } catch (error) {
            console.error("Error initiating chat room: ", error);
        }
    };

    useEffect(() => {
        const userRoomQuery = query(collection(db, 'chat'), where('user', '==', user));
        const unsubscribe = onSnapshot(userRoomQuery, snapshot => {
            if (!snapshot.empty) {
                const doc = snapshot.docs[0];
                setCurrentRoomId(doc.id);
            }
        });
        return () => unsubscribe();
    }, [user]);

    const toggleChat = () => {
        setIsChatVisible(prev => !prev);
    };

    const handleSend = async roomId => {
        if (!mess.trim()) {
            alert('Vui lòng nhập tin nhắn!');
            return;
        }
        try {
            if (!roomId) {
                await initiateChatRoom(user.id, user.nameAccount); // Gọi hàm khởi tạo phòng chat tại đây
                setCurrentRoomId(user.id);
            }
            await addDoc(collection(db, 'chat', roomId || user.id, 'messages'), {
                uid: user.id,
                name: user.nameAccount,
                status: "0",
                text: mess.trim(),
                timestamp: serverTimestamp(),
            });
            setMess('');
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (currentRoomId) {
            const messagesQuery = query(collection(db, 'chat', currentRoomId, 'messages'), orderBy('timestamp'));
            const unsubscribe = onSnapshot(messagesQuery, snapshot => {
                const fetchedMessages = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setMessages(fetchedMessages);
            });
            return () => unsubscribe();
        }
    }, [currentRoomId]);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            handleSend(isUserLoggedIn.roomchat);
            event.preventDefault();
        }
    }
    const endOfMessagesRef = useRef(null);
    useEffect(() => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
    return (
        <React.Fragment>
            {/* Khi isChatVisible là true, hiển thị cửa sổ chat */}

            <footer className="footer">
                {isUserLoggedIn ? (
                    <button id="back_top" title="Go to top" onClick={toggleChat}><i className='bx bx-message-rounded-dots'></i></button>
                ) : null}
                {isChatVisible &&
                    <div className="chat-container-user">
                        <div className="chat-box-user">
                            <div className="chat-header-user">
                                <h2>Chat với nhân viên tư vấn</h2>
                            </div>
                            <div className="chat-messages-user clearfix">
                                {messages.map((message, index) => (
                                    <p
                                        key={message.id}
                                        className={`message-user ${message.uid === user.id ? 'sent' : 'received'}`}
                                        ref={index === messages.length - 1 ? endOfMessagesRef : null}
                                    >
                                        <strong>{message.name}:</strong> {message.text}
                                    </p>
                                ))}
                            </div>
                            <div className="chat-input-user">
                                <input
                                    value={mess}
                                    onChange={e => setMess(e.target.value)}
                                    placeholder="Nhập tin nhắn..."
                                    onKeyPress={handleKeyPress}
                                />
                                <button onClick={() => handleSend(isUserLoggedIn.roomchat)}>Gửi</button>
                            </div>
                        </div>
                    </div>
                }
                <div className="box footer__box">
                    <div className="footer__about">
                        <div className="footer__logo">
                            <div className="logo">
                                <a href="#"><img src={logo} alt="" />TOUR VIET</a>
                            </div>
                        </div>
                        <p className="footer_about__text">
                            TOUR VIET tự hào là một đơn vị tiêu biểu trong lĩnh vực tour du lịch đón nhận giải thưởng uy tín
                            nhất dành cho cộng đồng doanh nghiệp Việt Nam.
                        </p>
                        <ul className="footer_social_list">
                            <li className="footer_social_item"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                            <li className="footer_social_item"><a href="#"><i className="fa-brands fa-google" /></a></li>
                            <li className="footer_social_item"><a href="#"><i className="fab fa-youtube" /></a></li>
                        </ul>
                    </div>
                    <div className="footer__blog">
                        <div className="footer_title">bản tin</div>
                        <div className="footer_blog__item">
                            <div className="footer_blog__image"><img src={footer_blog_1} alt="" /></div>
                            <div className="footer_blog__content">
                                <div className="footer_blog__title"><a href="#">Địa điểm du lịch Hè 2023</a></div>
                                <div className="footer_blog__date">30/07/2023</div>
                            </div>
                        </div>
                        <div className="footer_blog__item">
                            <div className="footer_blog__image"><img src={footer_blog_1} alt="" /></div>
                            <div className="footer_blog__content">
                                <div className="footer_blog__title"><a href="#">Địa điểm du lịch Hè 2023</a></div>
                                <div className="footer_blog__date">30/07/2023</div>
                            </div>
                        </div>
                        <div className="footer_blog__item">
                            <div className="footer_blog__image"><img src={footer_blog_1} alt="" /></div>
                            <div className="footer_blog__content">
                                <div className="footer_blog__title"><a href="#">Địa điểm du lịch Hè 2023</a></div>
                                <div className="footer_blog__date">30/07/2023</div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__tags">
                        <div className="footer_title">Tags</div>
                        <ul className="tags_list">
                            <li className="tags_item"><a href="#">Miền Bắc</a></li>
                            <li className="tags_item"><a href="#">Miền Trung</a></li>
                            <li className="tags_item"><a href="#">Miền Nam</a></li>
                            <li className="tags_item"><a href="#">Đà Nẵng</a></li>
                            <li className="tags_item"><a href="#">Quảng Nam</a></li>
                            <li className="tags_item"><a href="#">Huế</a></li>
                        </ul>
                    </div>
                    <div className="footer__contact">
                        <div className="footer_title">Liên hệ</div>
                        <ul className="contact_list">
                            <li className="contact_item">
                                <div className="contact_icon"><i className="fas fa-map-marker-alt" /></div>
                                <div className="contact_text">64 Dũng sĩ thannh khê, Thanh Khê Tây, Thanh Khê, Đà Nẵng</div>
                            </li>
                            <li className="contact_item">
                                <div className="contact_icon"><i className="fas fa-phone-square" /></div>
                                <div className="contact_text">+84 79 292 9292</div>
                            </li>
                            <li className="contact_item">
                                <div className="contact_icon"><i className="fas fa-envelope" /></div>
                                <div className="contact_text">tourviet01@gmail.com</div>
                            </li>
                            <li className="contact_item">
                                <div className="contact_icon"><i className="fas fa-globe-asia" /></div>
                                <div className="contact_text">www.tourviet.com</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}
const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn // Đảm bảo rằng state.isLoggedIn trỏ đến đúng trường trong state Redux của bạn
});



export default connect(mapStateToProps)(Footer);