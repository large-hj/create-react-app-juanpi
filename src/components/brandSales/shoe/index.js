import React, { Component, Fragment } from 'react'
import { ShoeBox, Navs, Allgoods, Leftgoods } from "./styled";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"

@connect(mapStateToProps, mapDispatchToProps)
class Shoe extends Component {
  render() {
    let { shoeList } = this.props;
    console.log(shoeList, 56)
    return (
      <ShoeBox>
        <Navs>
          <div className="shoe">女鞋</div>
          <div className="shoe"> 男鞋</div>
          <div className="shoe">箱包</div>
        </Navs>
        <Allgoods>
          {
            shoeList.map((item, index) => (
              <Leftgoods key={index}>
                <div className="shoes"><img src={item.pic_url} alt="" /></div>
                <div className="bothprice">
                  <span className="countpri">{item.cprice}</span>
                  <span><del className="beforepri">￥{item.oprice}</del></span>
                </div>
            <div className="goodsname">{item.title}</div>
              </Leftgoods>
            ))
          }
          {/* <Leftgoods></Leftgoods> */}
        </Allgoods>
      </ShoeBox>
    )
  }
  componentDidMount() {
    this.props.handleshoeListAsync();
  }
}
export default Shoe;
