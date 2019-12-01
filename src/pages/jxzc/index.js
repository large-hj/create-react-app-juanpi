import React, { Component, Fragment } from 'react'
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../home/mapStore"
import { BoxDiv } from "./jxzcStyled"
import {NavLink } from "react-router-dom";
@connect(mapStateToProps, mapDispatchToProps)

 class Jxzc extends Component {
    constructor() {
        super()
        this.state = {
            // GoodsRes: JSON.parse(localStorage.getItem('getIndexNavSkip')).GoodsRes,
        }
    }
    componentDidMount() {

    }
    render() {
        // let {  } = this.state;
        let { getIndexNavSkip} = this.props;
        return (
            <Fragment>
                <BoxDiv className="Box">
                    {
                      getIndexNavSkip.map((item,index) => (
                            <NavLink className="div" to="/shop" key={index}> 
                                <div className="img">
                                    <img src={item.pic_url} alt="" />
                                </div>

                        <i>￥{item.cprice} <span>￥{item.oprice}</span></i>
                                <p>{item.title}</p>
                            </NavLink>
                        ))
                    }



                </BoxDiv>
            </Fragment>
        )
    }
}
    export default Jxzc;