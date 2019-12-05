import React, { Component } from 'react'
import { PageContainer } from "common/styled";
import { Box, OneProduct, Count, List, Lists, Price } from "./styled";
import { withRouter } from "react-router-dom"
@withRouter

class buyCar extends Component {
    constructor() {
        super();
        this.state = {
            Array: [],
            number: 0,
            checked: false,
        }
    }
    componentDidMount() {
        this.handleGetLocalStorage()


    }
    handleGetLocalStorage() {
        var len = localStorage.length;  // 获取长度
        var arr = []; // 定义数据集
        for (var i = 0; i < len; i++) {
            // 获取key 索引从0开始
            var getKey = localStorage.key(i);
            // 获取key对应的值
            var getVal = JSON.parse(localStorage.getItem(getKey));
            // 放进数组
            arr[i] = {
                getKey,
                getVal
            }
        }
        this.setState({
            Array: arr
        })
    }
    handleSub(item) {
        let num = (JSON.parse(localStorage.getItem(item.getKey))).mount - 1;
        if (num === 0) {
            alert("穷 ~~~哈哈")
        } else {
            var shoping = { checked: false, select: item.getVal.select, cprice: item.getVal.cprice, goodsUrl: item.getVal.goodsUrl, title: item.getVal.title, mount: num };
            localStorage.setItem(item.getKey, JSON.stringify(shoping));
            this.handleGetLocalStorage()
        }

    }
    handleAdd(item) {
        let num = (JSON.parse(localStorage.getItem(item.getKey))).mount + 1;
        if (num > 5) {
            alert("赶紧去付款吧！！！")
        } else {
            var shoping = { checked: false, select: item.getVal.select, cprice: item.getVal.cprice, goodsUrl: item.getVal.goodsUrl, title: item.getVal.title, mount: num };
            localStorage.setItem(item.getKey, JSON.stringify(shoping));
            this.handleGetLocalStorage()
        }


    }
    handleChange(checked) {
        let { Array } = this.state;
        if (checked === false) {

            this.state.Array.forEach(i => {
                i.getVal.checked = true;
            })
            this.setState({
                checked: true,

            })



        } else {
            this.state.Array.forEach(i => {
                i.getVal.checked = false;
            })
            this.setState({
                checked: false,
            })
        }

    }
    checkThis(item, index) {
        let { Array,number } = this.state;
      
        if(item.getVal.checked===false){
            this.state.Array[index].getVal.checked=true;
            let n=((item.getVal.mount*item.getVal.cprice)+number);
           this.setState({
               number:n
           })
        }else{
            this.state.Array[index].getVal.checked=false;
            let n=(number-(item.getVal.mount*item.getVal.cprice));
            this.setState({
                number:n                                                            
            })
        }
        let result = this.state.Array.some(j => {
            if (!j.getVal.checked) {
                return true;
            }
        })
        if (result) {
         
            this.state.checked = false;
        }


        let len = this.state.Array.length
        let ev=false;
        for (let a = 0; a < len; a++) { // 遍历，如果列表里除了第一个之外，其他的都勾选的话，就把全选按钮也勾选掉
            if (this.state.Array[a].checked===false) {
              
                ev = true;
               
            }
         
              
        } 
        if(ev==true){
            this.setState({
                checked: true,
            })
        }
    
        this.setState({ // 每点击一次更新状态
            Array: this.state.Array
           
        })


    }
    render() {
        let _self = this;
        let { Array, checked,number } = this.state

        // console.log(Array)
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
                            Array.map((item, index) => (
                                <OneProduct key={index}>
                                    <Count>
                                        <div className="count1">满件折</div>
                                        <div className="count2">已享满1件8.8折再凑1件可享7.9折</div>
                                        <div className="count3">去凑单 <i className="iconfont icon2">&#xe61f;</i></div>

                                    </Count>
                                    <Lists>
                                        <List>
                                            <div className="select"><input type="checkbox" onChange={_self.checkThis.bind(_self, item, index)} checked={item.getVal.checked} /></div>
                                            <div className="picture"><img src={item.getVal.goodsUrl} alt="" /></div>
                                            <div className="content">
                                                <p className="p1">{item.getVal.title}</p>
                                                <p className="p2">{item.getVal.select}</p>
                                                <Price>
                                                    <div className="newprice">￥{item.getVal.cprice}</div>
                                                    <div className="num">
                                                        <div onClick={this.handleSub.bind(this, item)}>-</div>
                                                        <div>{item.getVal.mount}</div>
                                                        <div onClick={this.handleAdd.bind(this, item)}>+</div>
                                                    </div>
                                                </Price>
                                            </div>
                                        </List>
                                    </Lists>
                                </OneProduct>
                            ))
                        }
                    </div>
                    <div className="footer">
                        <div>
                            <span><input type="checkbox" checked={checked} onChange={this.handleChange.bind(this, checked)} ></input></span>
                            <span>全选</span>
                        </div>
                        <div>
                            合计<span>{number}</span><span>元</span>
                        </div>
                        <div>
                            去结算<span>(1)</span>
                        </div>
                    </div>
                </Box>
            </PageContainer>
        )
    }
}
export default buyCar