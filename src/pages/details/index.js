import React, { Component, Fragment } from 'react'
import { TopBannerDiv, GoodsInfo, CouponDiv, AftersaleDiv, Div, HavechosenDiv, FooterDiv } from "./detailStyled"
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { connect } from "react-redux";
import { Accordion, List } from 'antd-mobile';
import { withRouter } from "react-router-dom"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sa_id: "",
            data: '',
            imgHeight: 176,
            select: '',
            cprice: '',
            goodsUrl: ''
        }

    }
    onChange = (key) => {
        console.log(key);
    }

    componentDidMount() {


        let { goods_id } = this.props.match.params;
        this.props.handleAsyncHome(goods_id);

        let { detailsDoods } = this.props;
        this.props.getMemberAsyncData(goods_id, detailsDoods.sa_id)


    }
    handleSelect(index) {
        let { skuData_sku } = this.props;

        let select = skuData_sku[index].av_zvalue + skuData_sku[index].av_fvalue
        let cprice = skuData_sku[index].cprice
        let goodsUrl = skuData_sku[index].av_zpic

        // console.log(skuData_sku)
        this.setState({
            select: select,
            cprice: cprice,
            goodsUrl: goodsUrl,
        })

    }
    handleJoinCar() {

        let { goods_id } = this.props.match.params;
        let { select, cprice, goodsUrl } = this.state
        let { detailsDoods} = this.props;
        let title=detailsDoods.title
        let mount=1;
        if (goods_id && cprice && goodsUrl && goods_id&&title) {
            var shoping = { select: select, cprice: cprice, goodsUrl: goodsUrl,title:title,mount:mount };
            localStorage.setItem(goods_id, JSON.stringify(shoping));
            this.props.history.push("/buycar")
        } else {
            alert("请选择商品")

        }


    }
    render() {
        let { detailsDoods, skuData_info, skuData_sku } = this.props;
        let { select, cprice } = this.state;
        //   console.log(select,cprice)
        return (
            <Fragment>
                <Div>
                    <TopBannerDiv>
                        <img src={skuData_info.goods_pic_url} alt="" />
                    </TopBannerDiv>

                    <GoodsInfo className="GoodsInfo">
                        <div className="GoodSInfoTop">
                            <span className="price">￥{cprice ? cprice : detailsDoods.cprice}<i>￥{detailsDoods.oprice}</i> <em>包邮</em></span>
                            <span>{skuData_info.join_number}</span>
                        </div>
                        <div className="GoodSInfoBottom">
                            <p>{detailsDoods.title}</p>
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
                            <span onClick={this.handleJoinCar.bind(this)}>加入购物车</span>
                        </div>
                    </FooterDiv>
                    <HavechosenDiv>
                        <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                            <Accordion.Panel header={"已选择：" + select}>
                                <List className="my-list">
                                    {
                                        skuData_sku.map((item, index) => (
                                            <List.Item key={index}
                                                onClick={this.handleSelect.bind(this, index)}
                                            >
                                                {item.av_fvalue}/{item.av_zvalue}</List.Item>
                                        ))
                                    }


                                </List>
                            </Accordion.Panel>
                        </Accordion>
                    </HavechosenDiv>

                </Div>
            </Fragment>
        )
    }
}
export default Details