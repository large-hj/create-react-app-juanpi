import React, { Component, Fragment } from 'react'
import { ShoeBox, Navs, Allgoods, } from "./styled";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
import {NavLink } from "react-router-dom";
import BscrollCom from "../../../common/bscroll";
import {withRouter} from "react-router-dom";
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Shoe extends Component {
  constructor(){
    super();

    this.page=1;
  }
  render() {
    let { shoeList } = this.props;
    // console.log(shoeList, 56)
    return (
      <ShoeBox>
        <Navs>
          <div className="shoe">女鞋</div>
          <div className="shoe"> 男鞋</div>
          <div className="shoe">箱包</div>
        </Navs>
        <BscrollCom ref="scroll">

          <Allgoods>
            {
              shoeList.map((item, index) => (
                <NavLink className="div" key={index} to={"/shoeDetail/"+item.goods_id} >
              

                  <div className="shoes"><img src={item.pic_url} alt="" /></div>
                  <div className="bothprice">
                    <span className="countpri">{item.cprice}</span>
                    <span><del className="beforepri">￥{item.oprice}</del></span>
                  </div>
                  <div className="goodsname">{item.title}</div>
         
                </NavLink>
              ))
            }
          </Allgoods>
        </BscrollCom>
      </ShoeBox>
    )
  }

  componentWillUpdate(){
    this.refs.scroll.handlefinishPullUp();
}
  componentDidMount() {
    this.handleAsyncData();
    //上拉加载
    this.refs.scroll.handlepullingUp(()=>{
      this.handleAsyncData();

    })
  }
  handleAsyncData(){
    this.props.handleshoeListAsync(this.page);
    this.page++;
  }
//   handleTo(){
//     this.props.history.push("/shoe/shoeDetail")
// }
//https://webservice.juanpi.com/api/getMemberAboutInfo?goods_id=149525354&sa_id=24177465&is_pt_goods=0&req_coupons_id=149525354
}
export default Shoe;
