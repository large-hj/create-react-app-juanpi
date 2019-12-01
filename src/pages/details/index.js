import React, { Component, Fragment } from 'react'
// import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import {TopBannerDiv,GoodsInfo,CouponDiv,AftersaleDiv,Div,HavechosenDiv,FooterDiv} from "./detailStyled"
// import { Carousel, WingBlank } from 'antd-mobile';
export default class Details extends Component {
    constructor() {
        super()
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 376,
        }
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    render() {
        return (
            <Fragment>
<Div>


                <TopBannerDiv>
                    {/* <WingBlank>
                        <Carousel
                            autoplay={false}
                            infinite
                            //   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            // afterChange={index => console.log('slide to', index)}
                        >
                            {this.state.data.map(val => (
                                <a
                                    key={val}
                                    href="http://www.alipay.com"
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                    <img
                                        src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                        alt=""
                                        style={{ width: '100%', height: "3.2rem", verticalAlign: 'top' }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                </a>
                            ))}
                        </Carousel>
                    </WingBlank> */}
                </TopBannerDiv>

                <GoodsInfo className="GoodsInfo">
                    <div className="GoodSInfoTop">
                        <span className="price">￥25.9 <i>￥38</i> <em>包邮</em></span>
                        <span>2194人已购</span>
                    </div>
                    <div className="GoodSInfoBottom">
                        <p>【限购一件】良品铺子猪肉脯100g零食小吃肉干网红休闲食品美食小包装</p>
                    </div>
                </GoodsInfo>
                <CouponDiv>
                      <span><i>领券</i> 满138元减10元  满168元减18元</span>   
                      <span className="iconfont">&#xe61f;</span>               
                </CouponDiv>
                <CouponDiv>
                      <span><i>任选</i>99元14件任选</span>   
                      <span className="iconfont">&#xe61f;</span>               
                </CouponDiv>
                <AftersaleDiv>
                    <span>24小时发货</span>
                    <span>品质保证</span>
                    <span>售后补贴</span>
                    <span className="iconfont">&#xe61f;</span>   
                </AftersaleDiv>
                <HavechosenDiv>
                    <span>已选择： 猪肉脯100gx1袋 原味100gx1袋</span>
                    <span className="iconfont">&#xe61f;</span>   
                </HavechosenDiv>
                <FooterDiv>
                    <div className="shouye">
                        <span className="iconfont">&#xe626;</span>
                        <span>首页</span>
                    </div>
                    <div className="fenlei">
                        <span className="iconfont">&#xe601;</span>
                        <span>购物车</span>
                    </div>
                    <div className="ljgm">
                        <span>立即购买</span>
                    </div>
                    <div className="joincar">
                        <span>加入购物车</span>
                    </div>
                </FooterDiv>
            </Div>
            </Fragment>
        )
    }
}
