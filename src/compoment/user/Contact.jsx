import React, { Component } from 'react';
import "./Contact.css"
import { about_slide } from '../../assets/listImage';
class contact extends Component {
    render() {
        return (
            <div className="main">
                <div className="main__slide_offers">
                    <div className="home_slide__item">
                        <div className="home_slide__background" style={{ backgroundImage: `url(${about_slide})` }} />
                        <div className="home__content">
                            <div className="home__title animated bounceInDown">
                                Liên hệ
                            </div>
                        </div>
                    </div>
                </div>
                {/*        contact*/}
                <div className="contact_form_container">
                    <div className="box contact_form__box">
                        <div className="contact_form__title">Form liên hệ</div>
                        <form action id="form_contact" className="contact__form" method="post" name="form_contact" onsubmit="return validateForm()">
                            <label>
                                <input id="form_name" className="contact__form_name input_field" name="name" placeholder="Họ và Tên" type="text" defaultValue />
                            </label>
                            <label>
                                <input id="form_email" className="contact__form_email input_field" name="email" placeholder="E-mail" type="text" defaultValue />
                            </label>
                            <label>
                                <input id="form_subject" className="contact__form_subject input_field" name="subject" placeholder="Chủ đề" type="text" />
                            </label>
                            <textarea name="mess" id="form_mess" placeholder="Nội dung" rows={4} className="contact__form_mess input_field" defaultValue={""} />
                            <input type="submit" className="contact__form_button button trans_200" defaultValue="Gởi đi" />
                        </form>
                    </div>
                </div>
                <div className="contact__info">
                    <div className="box contact__info_box">
                        <h2>Địa chỉ</h2>
                        <p>- 64 Dũng sĩ thannh khê, Thanh Khê Tây, Thanh Khê, Đà Nẵng -</p>
                    </div>
                </div>
                <div className="contact__map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8754086486833!2d108.17898852422896!3d16.07195387735992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218fcc9c83da1%3A0xddbe4a7945158896!2zNjQgxJAuIETFqW5nIFPEqSBUaGFuaCBLaMOqLCBUaGFuaCBLaMOqIFTDonksIFRoYW5oIEtow6osIMSQw6AgTuG6tW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1690603953050!5m2!1svi!2s" width="100%" height="auto" frameBorder={0} style={{ border: 0 }} allowFullScreen />
                </div>
            </div>

        );
    }
}

export default contact; 