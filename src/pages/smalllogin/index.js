import React from "react";
import { Center, NameInput, PassInput, Choose, Footer } from "./styled"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { withRouter } from "react-router-dom"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class SmallLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            NameInputVal: "",
            PassInputVal: ""
        }

    }
    componentDidMount() {

    }
    render() {
        let { NameInputVal, PassInputVal } = this.state;
        return (
            <div>
                <Center>

                    <NameInput type="text" placeholder={"手机号/邮箱/用户名"} value={NameInputVal} onChange={this.handleName.bind(this)} />
                    <PassInput type="password" placeholder={"密码"} value={PassInputVal} onChange={this.handlePassword.bind(this)} />

                    <div className="btn" onClick={this.handleLogin.bind(this)} >登录</div>
                </Center>
                <Choose>
                    <div className="left">
                        <input type="checkbox" />
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
    handleLogin() {
        let { userLogin } = this.props;
        let { NameInputVal, PassInputVal } = this.state;
        this.props.handleAsyncHome(NameInputVal, PassInputVal);
        console.log((userLogin))
        if(userLogin.code===1){
            alert("登录成功")
            this.props.history.push("/mine")
        }else if(userLogin.code===0){
            alert("用户名不存在")
        }else{
            alert("密码错误")
        }
    }
    handleName(e) {
        let valName = e.target.value
        this.setState({
            NameInputVal: valName
        })

    }
    handlePassword(e) {
        let valPassword = e.target.value
        this.setState({
            PassInputVal: valPassword
        })

    }

}
export default SmallLogin;