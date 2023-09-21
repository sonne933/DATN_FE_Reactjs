import React, { Component } from 'react';
import "./css/About.css"
import { about_slide, intro }
    from "../../assets/listImage";
// import "./script.js"

class about extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bars: [
                { id: 'bar_1', iconClass: 'fas fa-user-friends', number: 13456, type: 'Khách hàng', year: '2021', tooltip: 'Tăng 80%' },
                { id: 'bar_2', iconClass: 'fas fa-hiking', number: 6564, type: 'Khách hàng quay lại', year: '2021', tooltip: 'Giảm 50%' },
                { id: 'bar_3', iconClass: 'fas fa-umbrella-beach', number: 906, type: 'Hoạt động', year: '2021', tooltip: 'Giảm 25%' },
                { id: 'bar_4', iconClass: 'fas fa-globe-asia', number: 1320, type: 'Số lượng tour', year: '2021', tooltip: 'Tăng 15%' }
            ]
            
        };
    }

    componentDidMount() {
        this.state.bars.forEach(bar => {
            this.animateBar(document.querySelector(`.${bar.id}`), bar.tooltip.replace(/[^0-9]/g, '') + '%');
        });
    }

    animateBar = (element, width) => {
        let currentWidth = 0;
        const intervalId = setInterval(frame, 10);

        function frame() {
            if (currentWidth >= parseInt(width)) {
                clearInterval(intervalId);
            } else {
                currentWidth++;
                element.style.width = currentWidth + "%";
            }
        }
    }


    handleChangeImage = () => {
        this.setState({
            imageUrl: about_slide
        });
    }
    render() {
        return (
            <div className="main">
                <div className="main__slide_offers">
                    <div className="home_slide__item">
                        <div className="home_slide__background" style={{ backgroundImage: `url(${this.state.imageUrl})` }} />
                        <div className="home__content">
                            <div className="home__title animated bounceInDown">
                                Giới thiệu
                            </div>
                        </div>
                    </div>
                </div>
                
               

                {/*        About us*/}
                <div className="about">
                    <div className="box about__box">
                        <div className="about__image"><img src={intro} alt="" /></div>
                        <div className="about__content">
                            <div className="about__title">Về chúng tôi</div>
                            <p className="about__text">TOUR VIET là trang website bán tour du lịch hàng đầu Việt Nam, với tiêu
                                chí
                                tour không hoàn, không hủy, không thay đổi lịch trình. Gía cả tốt nhất thị trường hơn hết
                                đảm
                                bảo cho du khách có những trải nghiệm thú vị nhất, dịch dụ chuyên nghiệp nhất khi mua tour
                                tại
                                đây. TOUR VIET phục vụ du khách đi tham quan du lịch trên cả 5 châu, du lịch ra nước ngoài
                                tại
                                đây rất được khách hàng tin tưởng và đánh giá cao.</p>
                            <div className="button button_about">
                                <div className="button_bcg" />
                                <a href="#">Đọc thêm <span /><span /><span /></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="statistic">
                    <div className="box statistic__box">
                        <h2>Thống kê theo năm</h2>
                        <p className="statistic__text">Thống kê số lượng khách hàng, khách hàng quay lại, các hoạt động và số
                            lượng
                            tour giữa năm 2021 và 2022 của chúng tôi</p>
                        <div className="statistic__content">
                            <div className="statistic__item">
                                <div className="stats">
                                    <div className="stats__icon"><i className="fas fa-user-friends" /></div>
                                    <div className="stats__content">
                                        <div className="stats__number">13456</div>
                                        <div className="stats__type">Khách hàng</div>
                                    </div>
                                </div>
                                <div className="stats__bar">
                                    <div className="stats__year">2022 <i className="fas fa-level-down-alt" /></div>
                                    <div className="stats__bar1" />
                                    <div className="tooltip bar_1 stats__bar2" title="Tăng 20%" />
                                </div>
                            </div>
                            <div className="statistic__item">
                                <div className="stats">
                                    <div className="stats__icon"><i className="fas fa-hiking" /></div>
                                    <div className="stats__content">
                                        <div className="stats__number">6564</div>
                                        <div className="stats__type">Khách hàng quay lại</div>
                                    </div>
                                </div>
                                <div className="stats__bar">
                                    <div className="stats__year">2022 <i className="fas fa-level-down-alt" /></div>
                                    <div className="stats__bar1" />
                                    <div className="tooltip bar_2 stats__bar2" title="Giảm 10%" />
                                </div>
                            </div>
                            <div className="statistic__item">
                                <div className="stats">
                                    <div className="stats__icon"><i className="fas fa-umbrella-beach" /></div>
                                    <div className="stats__content">
                                        <div className="stats__number">906</div>
                                        <div className="stats__type">Hoạt động</div>
                                    </div>
                                </div>
                                <div className="stats__bar">
                                    <div className="stats__year">2022 <i className="fas fa-level-down-alt" /></div>
                                    <div className="stats__bar1" />
                                    <div className="tooltip bar_3 stats__bar2" title="Giảm 7%" />
                                </div>
                            </div>
                            <div className="statistic__item">
                                <div className="stats">
                                    <div className="stats__icon"><i className="fas fa-globe-asia" /></div>
                                    <div className="stats__content">
                                        <div className="stats__number">1320</div>
                                        <div className="stats__type">Số lượng tour</div>
                                    </div>
                                </div>
                                <div className="stats__bar">
                                    <div className="stats__year">2022 <i className="fas fa-level-down-alt" /></div>
                                    <div className="stats__bar1" />
                                    <div className="tooltip bar_4 stats__bar2" title="Tăng 15%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="statistic">
                    <div className="box statistic__box">
                        <h2>Thống kê theo năm</h2>
                        <p className="statistic__text">Thống kê số lượng khách hàng, khách hàng quay lại, các hoạt động và số
                            lượng tour giữa năm 2021 và 2022 của chúng tôi</p>
                        <div className="statistic__content">
                            {this.state.bars.map(bar => (
                                <div className="statistic__item" key={bar.id}>
                                    <div className="stats">
                                        <div className="stats__icon"><i className={bar.iconClass} /></div>
                                        <div className="stats__content">
                                            <div className="stats__number">{bar.number}</div>
                                            <div className="stats__type">{bar.type}</div>
                                        </div>
                                    </div>
                                    <div className="stats__bar">
                                        <div className="stats__year">{bar.year} <i className="fas fa-level-down-alt" /></div>
                                        <div className="stats__bar1" />
                                        <div className={`tooltip ${bar.id} stats__bar2`} title={bar.tooltip} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default about;