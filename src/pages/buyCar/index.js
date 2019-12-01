import React, { Component } from 'react'
import {PageContainer} from "common/styled";
import {Box,OneProduct,Count,List,Lists,Price} from "./styled"
export default class buyCar extends Component {
    render() {
        return (
            <PageContainer>
               <Box>
                    <div className="head">
                        <span></span>
                        <h2 className="cart">购物车</h2>
                        <span className="right">编辑</span>
                    </div>
                    <div className="promotion">
                        <i className="iconfont icon1">&#xe605;</i>
                        <div className="pic"><img src="http://s2.juancdn.com/bao/170615/2/b/5942339ea43d1f47ef70e59a_72x72.png" alt=""/></div>
                        <span className="shop">跨店促销</span>
                    </div>
                    <OneProduct>
                        <Count>
                            <div className="count1">满件折</div>
                            <div className="count2">已享满1件8.8折再凑1件可享7.9折</div>
                            <div className="count3">去凑单 <i className="iconfont icon2">&#xe61f;</i></div>
                           
                        </Count>
                       <Lists>
                       <List>
                        <div className="select"><i className="iconfont icon2">&#xe605;</i></div>
                            <div className="picture"><img src="https://goods3.juancdn.com/goods/170912/5/9/59b752a38150a136df3689f5_800x800.jpg?iopcmd=thumbnail&type=11&height=310&width=310%7Ciopcmd=convert&Q=88&dst=jpg" alt=""/></div>
                            <div className="content">
                                <p className="p1">衣服棉被收纳袋5个装</p>
                                <p className="p2">灰色单个装 zt-002横款的</p>
                                <Price>
                                    <div className="newprice">￥10.9</div>
                                    <div className="oldprice"><del>￥12.5</del></div>
                                    <div className="num">X1</div>
                                </Price>
                            </div>
                        </List>
                       </Lists>
                    </OneProduct>
               </Box>
            </PageContainer>
        )
    }
}
