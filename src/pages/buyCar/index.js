import React, { Component } from 'react'
import { PageContainer } from "common/styled";
import { Box, OneProduct, Count, List, Lists, Price } from "./styled";
export default class buyCar extends Component {
    constructor() {
        super();
        this.state = {
            Array: []
        }
    }
    componentDidMount() {
        var len = localStorage.length;  // 获取长度
        var arr = new Array(); // 定义数据集
        for (var i = 0; i < len; i++) {
            // 获取key 索引从0开始
            var getKey = localStorage.key(i);
            // 获取key对应的值
            var getVal = JSON.parse(localStorage.getItem(getKey));
            // 放进数组
            arr[i] = {
                getVal
            }
        }
        this.setState({
            Array: arr
        })

    }
    render() {
        let { Array } = this.state;
        console.log(Array)
        return (
            <PageContainer>
                <Box>
                    <div className="head">
                        <span></span>
                        <h2 className="cart">购物车</h2>
                        <span className="right">编辑</span>
                    </div>
                    <div className="promotion">
                        <i className="iconfont icons">&#xe605;</i>
                        <div className="pic"><img src="http://s2.juancdn.com/bao/170615/2/b/5942339ea43d1f47ef70e59a_72x72.png" alt="" /></div>
                        <span className="shop">跨店促销</span>
                    </div>
                    <div>
                        {
                            Array.map((item, index) => (
                                <OneProduct key={index}>
                                    

                                    <Count>
                                        <div className="count1">满件折</div>
                                        <div className="count2">已享满1件8.8折再凑1件可享7.9折</div>
                                        <div className="count3">去凑单 <i className="iconfont icon2">&#xe61f;</i></div>

                                    </Count>
                                    <Lists>
                                        <List>
                                            <div className="select"><i className="iconfont icon2">&#xe605;</i></div>
                                            <div className="picture"><img src={item.getVal.selectpicture} alt="" /></div>
                                            <div className="content">
                                                <p className="p1">{item.getVal.selecttitle}</p>
                                                <p className="p2">{item.getVal.selectcolor}{item.getVal.selectsize}</p>
                                                <Price>
                                                    <div className="newprice">￥10.9</div>
                                                    <div className="oldprice"><del>￥12.5</del></div>
                                                    <div className="num">X1</div>
                                                </Price>
                                            </div>
                                        </List>
                                    </Lists>
                                </OneProduct>
                            ))
                        }

                    </div>
                </Box>
            </PageContainer>
        )
    }
}
