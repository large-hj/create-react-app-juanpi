import React from "react";
import {Box,Top,Select} from "./styled"
import {NavLink} from "react-router-dom";
class Login extends React.Component{
   
    render(){
       
        return(
            <div>
               <Box>
               <Top>
                    <i className="iconfont">&#xe602;</i>
                    <h2>登录</h2>
                    <span>注册</span>
                </Top>
                <Select>
                        <ul>
                            <NavLink to="/login/smalllogin" className="li">卷皮账号登录</NavLink>
                            <NavLink to="/login/smallregister" className="li">手机快捷登录</NavLink>
                        </ul>
                </Select>
               </Box>
               
            </div>
        )
    }
   
}
export default Login;