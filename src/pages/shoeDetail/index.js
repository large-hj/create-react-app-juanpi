import React, { Component, Fragment } from 'react'
// import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import { TopBannerDiv, GoodsInfo, CouponDiv, AftersaleDiv, Div, HavechosenDiv, FooterDiv, Model } from "./styled";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import { Accordion, List } from 'antd-mobile';
import cookie from 'react-cookies'
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
// import { Carousel, WingBlank } from 'antd-mobile';
class ShoeDetail extends Component {
constructor(){
    super();
    this.state={
        selectcolor:"",
        selectsize:"",
        selectpicture:"",
        selecttitle:""
       
    }
}

    componentDidMount() {
        cookie.save('token','123ghj')
        let { goods_id } = this.props.match.params;
        let { detailList } = this.props;
        this.props.handleDetailAsync(goods_id);
        this.props.idDetailAsync(goods_id, detailList.sa_id);

    }
    handleInnerHtml(item){
        let { detailList } = this.props;
        let color=item.av_fvalue;
        let size=item.av_zvalue;
        let picture=item.av_zpic;
        let title=detailList.title;
        console.log(title)
        this.setState({
            selectcolor:color,
            selectsize:size,
            selectpicture:picture,
            selecttitle:title
        })
       
    }
    handleToMycar(){
        let { goods_id } = this.props.match.params;
        let valueInfo={selectcolor:this.state.selectcolor,selectsize:this.state.selectsize,selectpicture:this.state.selectpicture,selecttitle:this.state.selecttitle}
       localStorage.setItem(goods_id,JSON.stringify(valueInfo)) 
       
        this.props.history.push("/buycar")
    }
    render() {
        let { idList } = this.props;
        let { detailList } = this.props;
        let { selectList } = this.props;
        console.log(selectList)
        let {selectcolor,selectsize}=this.state;
        // console.log(selectcolor,selectsize)
        return (
            <Fragment>
                <Div>

                    <Fragment>
                        <TopBannerDiv>


                            <img src={idList.goods_pic_url} />

                        </TopBannerDiv>
                        <GoodsInfo className="GoodsInfo">
                            <div className="GoodSInfoTop">
                                <span className="price">￥{idList.cprice} <i>￥{idList.oprice} </i> <em>包邮</em></span>
                                <span>{idList.join_number}</span>
                            </div>
                            <div className="GoodSInfoBottom">
                                <p>{detailList.title}</p>
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
                            <span>已选择： {selectcolor} {selectsize}</span>
                            <span className="iconfont">&#xe61f;</span>
                        </HavechosenDiv>
                        <FooterDiv>
                            <div className="shouye">
                                <span className="iconfont icon1">&#xe626;</span>
                                <span>首页</span>
                            </div>
                            <div className="fenlei">
                                <span className="iconfont icon2">&#xe601;</span>
                                <span>购物车</span>
                            </div>
                            <div className="ljgm">
                                <span>立即购买</span>
                            </div>
                            <div className="joincar">
                                <span onClick={this.handleToMycar.bind(this)}>加入购物车</span>
                            </div>
                        </FooterDiv>
                    </Fragment>
                    <Model>
                        <div style={{ marginTop: 10, marginBottom: 10 }}>
                            <Accordion defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
                                <Accordion.Panel header="请选择商品属性" className="selecthead">
                                    {
                                        selectList.map((item,index) => (
                                            <List className="my-list" key={index}>
                                                <List.Item onClick={this.handleInnerHtml.bind(this,item)}>
                                        <span className="color">{item.av_zvalue}</span>
                                        <span className="size">{item.av_fvalue}码</span>
                                                </List.Item>

                                            </List>
                                        ))
                                    }

                                </Accordion.Panel>
                            </Accordion>
                        </div>
                    </Model>
                </Div>

            </Fragment>
        )
    }

}
//https://www.cnblogs.com/kyl-6/p/10375863.html
export default ShoeDetail;