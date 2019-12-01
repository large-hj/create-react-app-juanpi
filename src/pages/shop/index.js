import React, { Component, Fragment } from 'react'
// import {NavLink} from "react-router-dom";
import {HeaderDiv,TitleDiv,ContainerNavDiv} from "./shopStyled"

export default class Shop extends Component {
    render() {
        return (
            <Fragment>
                    <HeaderDiv>
                        <span>巴布豆时尚童鞋冬季专场</span>
                    </HeaderDiv>

                    <TitleDiv>
                        <div className="titleTop">
                            <div className="shopLogo">
                                <img src="https://goods8.juancdn.com/seller/180309/f/e/5aa259768150a15a4d4fb0a4_180x90.png" alt=""/>
                            </div>
                            <div className="shopInfo" >
                                <span >巴布豆时尚童鞋冬季专场</span>
                                <span className="count">共93件商品</span>
                            </div>
                            <div className="shouCang" >
                                
                                <span className="iconfont">&#xe603;</span>
                            </div>
                        </div>
                        <div className="timeOut">
                            <p>距离结束时间还剩</p>
                            <p>-3天19时44分5秒</p>
                        </div>
                    </TitleDiv>
                    <ContainerNavDiv>
                        <span to="/shop/first" className="span" onClick={this.handleFirst.bind(this)}>
                            <span>129元2双</span>
                        </span>
                        <span  to="/shop/second" className="span" onClick={this.handleSecond.bind(this)}>
                            <span>89元2双</span>
                        </span>
                        <span  to="/shop/third" className="span" onClick={this.handleThird.bind(this)}>
                            <span>109元2双</span>
                        </span>
                    </ContainerNavDiv>
            </Fragment>
        )
    }
    handleFirst(){
        this.props.history.push("/shop/first")
    }
    handleSecond(){
        this.props.history.push("/shop/second")
    }
    handleThird(){
        this.props.history.push("/shop/third")
    }
}
