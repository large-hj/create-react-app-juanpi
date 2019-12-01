import React, { Component } from 'react'
import {Footer} from "./styled"
import {TabBarRoute} from "router"
import {withRouter} from "react-router-dom";
@withRouter
class TabBar extends Component {
    render() {
        let {path} = this.props;
        return (
            <Footer>
                    <ul>
                       {
                           TabBarRoute.map((item)=>(
                               <li key={item.path} onClick={this.handleTo.bind(this,item.path)} className={path===item.path?'active':""}>
                                    <i className="iconfont">{item.icon}</i>
                                    <span>{item.text}</span>
                               </li>
                           ))
                       }
                    </ul>
            </Footer>
        )
    }
    handleTo(path){
        this.props.history.push(path);
    }
}

export default TabBar;

