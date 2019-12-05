import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { BoxDiv } from "./jxzcStyled"
import {withRouter} from "react-router-dom"
// import {NavLink } from "react-router-dom";
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
 class Jxzc extends Component {
    constructor() {
        super()
        this.state = {
            // GoodsRes: JSON.parse(localStorage.getItem('getIndexNavSkip')).GoodsRes,
        }
    }
    componentDidMount() {
        // let { zy_ids, app_name, catname } = this.props;
        this.props.handleAsyncHome();
    }
    render() {
      
        let { getGoodsZc} = this.props;
      
        return ( //https://m.juanpi.com/brand/1629495?shop_id=5614944"
            <Fragment>
                <BoxDiv className="Box">
               
                    {
                        getGoodsZc.map((item,index) => (
                            <div className="div" key={index} onClick={this.handleTo.bind(this,item)}>
                                <div className="img">
                                    <img src={item.pic_url} alt="" />
                                </div>

                        <i>￥{item.cprice} <span>￥{item.oprice}</span></i>
                                <p>{item.title}</p>
                            </div>
                        ))
                    }


                </BoxDiv>
            </Fragment>
        )
    }
    handleTo(item){
        // s.replace(/[^0-9]/ig,"")
        // 1629495 _ 5614944
        let brand=(item.goods_jump_url).replace(/[^0-9]/ig,"");
        let a=brand.substring(7)
        let b=brand.substring(0,7)
        let brand_id=b+"_"+a
        this.props.history.push("/shop/"+brand_id)
    }
}
    export default Jxzc;