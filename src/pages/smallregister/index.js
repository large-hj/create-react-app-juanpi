import React from "react";
import {Center,NameInput,PassInput,Choose,Footer} from "./styled"
class SmallRegister extends React.Component{
    constructor(){
        super();
        this.state={
            NameInputVal:"",
            PassInputVal:""
        }
    }
    render(){
        let {NameInputVal,PassInputVal}=this.state;
        return(
            <div>
              <Center>
                 
                 <NameInput type="text" placeholder={"请输入手机号码"} value={NameInputVal} onChange={this.handleName.bind(this)}/>
                 <PassInput type="text" placeholder={"请输入验证码"} value={PassInputVal} onChange={this.handleName.bind(this)}/>
                 
                    <div className="btn">登录</div>
                </Center>
                <Choose>
                   <div className="left">
                   <input type="checkbox"/>
                    <label htmlFor="">两周内免登录</label>
                   </div>
                   <div className="right">忘记密码?</div>
                </Choose>
                <Footer>
                    <h3>第三方账号快速登录</h3>
                    <div className="icons">
                        <div className="icon1"><i className="iconfont icon">&#xe6ca;</i></div>
                        <div className="icon1 icon2"><i className="iconfont icon">&#xe660;</i></div>
                        <div className="icon1 icon3"><i className="iconfont icon">&#xe607;</i></div>
                      
                    </div>
                    <ul>
                        <li>
                            <i className="iconfont">&#xe606;</i>
                            <span>全场包邮</span>
                        </li>
                        <li>
                            <i className="iconfont">&#xe613;</i>
                            <span>100%人工质检</span>
                        </li>
                        <li>
                            <i className="iconfont">&#xe66f;</i>
                            <span>七天放心退</span>
                        </li>
                    </ul>
                </Footer>
            </div>
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
}
export default SmallRegister;