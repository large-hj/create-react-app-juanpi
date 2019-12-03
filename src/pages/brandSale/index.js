import { Brand, Sale,Type } from "./styled"
import {NavLink} from "react-router-dom"
import React from "react";
// import {handPikAction} from "../../action/juanpiAction";
import {withRouter} from "react-router-dom";
@withRouter
class BrandSale extends React.Component {
    render() {
        return (
            <Brand>
                <Sale>
                    <i className="iconfont icon1" onClick={this.handleTo.bind(this)}>&#xe602;</i>
                    <span className="title">品牌特卖</span>
                </Sale>
                <Type>
                    <NavLink to="/brandSale/handpik" className="sapn1">精选</NavLink>
                    <NavLink to="/brandSale/shoe" className="sapn1">鞋包配饰</NavLink>
                    <NavLink to="/brandSale/beautyMakeup" className="sapn1">美妆</NavLink>
                    <span className="sapn1">运动</span>
                    <span className="sapn1">母婴童装</span>
                    <span className="sapn1">居家数码</span>
                </Type>
            </Brand>
        )
    }
    handleTo(){
        this.props.history.push("/home")
    }
}

export default BrandSale;
