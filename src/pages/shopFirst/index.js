import React, { Component,Fragment } from 'react'

import {BoxDiv} from "./shopFirstStyled"
export default class ShopFirst extends Component {
    render() {
        return (
            <Fragment>
                <BoxDiv className="Box">
                    <div className="title">
                        <span>——129元2双——</span>
                    </div>
                    <div>
                        <div className="img">
                            <img src="https://goods7.juancdn.com/goods/180627/c/3/5b32789133b089442d1bf823_800x800.jpg" alt=""/>   
                        </div>
                        
                         <i>￥169.9 <span>￥859</span></i>
                         <p>Ami几件宽松毛衣</p>
                    </div>
                </BoxDiv>
            </Fragment>
        )
    }
}
