import React, { Component, Fragment } from 'react'

import { BoxDiv } from "./jxdpStyled"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import {NavLink} from "react-router-dom"
@connect(mapStateToProps, mapDispatchToProps)
class Jxzc extends Component {
    constructor() {
        super()
        this.page = 1;

    }

    componentDidMount() {
        let { zy_ids, catname, flag, app_name } = this.props;
        this.props.handleAsyncHome(this.page, zy_ids, catname, flag, app_name);
    }
    render() {
        let { getGoods } = this.props
        console.log(getGoods)
        return (
            <Fragment>
                <BoxDiv className="Box">
                    {
                        getGoods.map((item,index) => (
                            <NavLink to="/shop"  className="div" key={index} >
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
export default Jxzc