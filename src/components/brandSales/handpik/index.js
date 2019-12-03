import React, { Component, Fragment } from 'react'
import { HandBox, Times, Seckill, Play, Product } from "./styled"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import BscrollCom from "../../../common/bscroll";
@connect(mapStateToProps, mapDispatchToProps)
class Handpik extends Component {
     constructor(){
    super();

    this.page=2;
  }
    render() {
        let { brandarr, brandList } = this.props;
        return (

            <HandBox>
                 <BscrollCom ref="scroll">
                     <div className="box">

                <div className="pic1"><img src="http://goods3.juancdn.com/act/180125/4/c/5a6984fb8150a12cfa77daf2_1080x98.png" alt="" /></div>
                <Times>
                    <span className="span">10:00</span>
                    <span className="span">13:00</span>
                    <span className="span">20:00</span>
                </Times>
               

                <Seckill>
                    {

                        brandarr.map((item, index) => (
                            <div className="pic_1" key={index}>
                                <div className="pic2">
                                    <img src={item.gi_pic} alt="" />
                                </div>
                                <div className="bothPrice">
                                    <span className="pri1">￥{item.gi_tuan_price}</span>
                                    <span className="pri2"><del>{item.gi_price}</del></span>

                                </div>
                            </div>
                        ))
                    }
                </Seckill>
                
                <Play>
                    <i></i>
                    <span>大牌狂欢齐嗨购</span>
                    <i></i>
                </Play>
                <Product>
                    {

                        brandList.map((item) => (
                            <Fragment key={item.goods_id}>
                                <div className="banner" ><img src={item.ss_cover} alt="" /></div>
                                <div className="goods">
                                    {
                                        item.sub_data.map((child) => (
                                            <div className="lists" key={child.goods_id}>
                                                <div className="pic3"><img src={child.pic} alt="" /></div>
                                                <div className="countprice">
                                                    <span className="sapnone">{child.cp}</span>
                                                    <span className="spantwo"><del>{child.op}</del></span>
                                                </div>
                                                <p className="bottom">{child.title}</p>
                                            </div>
                                        ))
                                    }

                                </div>
                            </Fragment>
                        ))
                    }
                </Product>
                     </div>
                </BscrollCom>
            </HandBox>
        )
    }

    //请求数据
    // componentDidMount() {
    //     // handlehandPikAsync是mapstore.js里的dispatch提供的
    //     this.props.handlehandPikAsync();
    //     this.props.handlehandPikListAsync();
    // }
    componentWillUpdate(){
        this.refs.scroll.handlefinishPullUp();
    }
      componentDidMount() {
        this.props.handlehandPikAsync();
        this.handleAsyncData();
        //上拉加载
        this.refs.scroll.handlepullingUp(()=>{
          this.handleAsyncData();
    
        })
      }
      handleAsyncData(){
        this.props.handlehandPikListAsync(this.page);
       if(this.page<7){
           this.page++;
       }else if(this.page===9){
           this.setState({
               page:2
           })
           return this.handleAsyncData();
       }
      }
}
export default Handpik;