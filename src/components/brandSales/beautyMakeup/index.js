import React, { Component } from 'react'
import { Allgoods, Leftgoods } from "./styled";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore";
@connect(mapStateToProps, mapDispatchToProps)
class BeautyMakeup extends Component {
    render() {
        let { beautyList } = this.props;
        console.log(beautyList)
        return (

            <Allgoods>
                {
                    beautyList.map((item, index) => (
                        <Leftgoods key={index}>
                            <div className="shoes"><img src={item.pic_url} alt="" /></div>
                            <div className="bothprice">
                                <span className="countpri">{item.cprice}</span>
                                <span><del className="beforepri">￥{item.oprice}</del></span>
                            </div>
                            <div className="goodsname">{item.title}</div>
                        </Leftgoods>
                    ))
                }
            </Allgoods>

        )
    }
    componentDidMount() {
        this.props.handleBeautyListAsync()
    }
}
export default BeautyMakeup;
