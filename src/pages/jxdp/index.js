import React, { Component } from 'react'

import { BoxDiv } from "./jxdpStyled"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { NavLink } from "react-router-dom"
import {withRouter} from "react-router-dom"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Jxzc extends Component {
    constructor() {
        super()
        this.page = 1;

    }


 
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
        this.handleAsyncData();
        // 上拉加载更多=  
      


    }
    handleAsyncData() {
        let { zy_ids, catname, flag, app_name } = this.props;
        this.props.handleAsyncHome(this.page, zy_ids, catname, flag, app_name);
        this.page++;
    }
    render() {
        let { getGoods } = this.props
        return (

                <BoxDiv className="Box">
                    {
                        getGoods.map((item, index) => (
                            <NavLink to={"/details/"+item.goods_id} className="div" key={index} >
                                <div className="img">
                                    <img src={item.pic_url} alt="" />
                                </div>

                                <i>￥{item.cprice} <span>￥{item.oprice}</span></i>
                                <p>{item.title}</p>
                            </NavLink>
                        ))
                    }





                </BoxDiv>
     

        )
    }
}
export default Jxzc