import React, { Component } from 'react'
import {Box,Sale,NameInput,PassInput} from "./styled";
import {withRouter} from "react-router-dom";
@withRouter
class Register extends Component {
    constructor(){
        super();
        this.state={
            NameInputVal:"",
            PassInputVal:""
        }
    }
    render() {
        let {NameInputVal,PassInputVal}=this.state;
        return (
            <Box>
                <Sale>
                    <i className="iconfont icon1" onClick={this.handleTo.bind(this)}>&#xe602;</i>
                    <span className="title">注册</span>
                </Sale>
                <div className="phone">
                请确保你的手机畅通，用于接收验证码短信
                </div>
                <NameInput type="text" placeholder={"请输入手机号码"} value={NameInputVal} onChange={this.handleName.bind(this)}/>
                 <PassInput type="text" placeholder={"请输入密码"} value={PassInputVal} onChange={this.handleName.bind(this)}/>
                 <div className="btn">登录</div>
            </Box>
        )
    }
    handleName(e){
        let valName=e.target.value
        console.log(valName)
        this.setState({
            NameInputVal:valName
        })

    }
    handlePass(){

    }
    handleTo(){
        this.props.history.push("/login")
    }
   
}
export default Register;
