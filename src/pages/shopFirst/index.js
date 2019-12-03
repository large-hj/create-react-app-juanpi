import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import { BoxDiv } from "./shopFirstStyled"
import { mapStateToProps, mapDispatchToProps } from "../shop/mapStore"
import { withRouter } from "react-router-dom"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class ShopFirst extends Component {
    render() {
        let { brandInfo, floor_data } = this.props
    
       let MAP = floor_data
        // console.log(floor_data, 1)
        return (
            <Fragment>
                <BoxDiv className="Box">
                    <div className="title">
        <span>dai</span>
                    </div>
                    {
                        MAP.map((item,index) => (
                            <div key={index}>
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
}
export default ShopFirst