import React, { Component } from 'react'
import { PageContainer } from "common/styled";
import { Box, OneProduct, Count, List, Lists, Price } from "./styled";
export default class buyCar extends Component {
    constructor() {
        super();
        this.state = {
            Array:[],
            num:1
        }
    }
    componentDidMount() {
        var len = localStorage.length;  // 获取长度
        var arr = []; // 定义数据集
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
            Array:arr
        })
      
    }
    handleSub(){
       let n=Number(this.num++)
        this.setState({
          num:Number(n)
        })
    }
    render() {
        let {Array,num}=this.state
        console.log(num)
        return (
            <PageContainer>
                <Box>
                    <div className="head">
                        <span></span>
                        <h2 className="cart">购物车</h2>
                        <span className="right">编辑</span>
                    </div>
                   
                    <div>
                        {
                            Array.map((item,index)=>(
                                <OneProduct key={index}>
                                <Count>
                                    <div className="count1">满件折</div>
                                    <div className="count2">已享满1件8.8折再凑1件可享7.9折</div>
                                    <div className="count3">去凑单 <i className="iconfont icon2">&#xe61f;</i></div>
                                   
                                </Count>
                               <Lists>
                               <List>
                                <div className="select"><i className="iconfont icon2">&#xe605;</i></div>
                                    <div className="picture"><img src={item.getVal.goodsUrl} alt=""/></div>
                                    <div className="content">
                                        <p className="p1">{item.getVal.title}</p>
                                        <p className="p2">{item.getVal.select}</p>
                                        <Price>
                                            <div className="newprice">￥{item.getVal.cprice}</div>
                                            <div className="num">
                                                <div onClick={this.handleSub.bind(this)}>-</div>
                                                <div>{item.getVal.mount}</div>
                                                <div>+</div>
                                            </div>
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
