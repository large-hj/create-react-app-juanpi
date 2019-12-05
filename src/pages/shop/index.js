import React, { Component, Fragment } from 'react'
import {HeaderDiv,TitleDiv,ContainerNavDiv} from "./shopStyled"
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import {withRouter} from "react-router-dom"
@connect(mapStateToProps, mapDispatchToProps)
@withRouter
class Shop extends Component {
    constructor(props){
        super(props);
        this.page=1;
  
    }
    componentDidMount() {
       let {brand}=this.props.match.params;
       
       this.props.handleAsyncHome(this.page, brand);
        
     
    }
    render() {
        let {brandInfo,floor_bar} =this.props
    console.log(floor_bar)
        return (
            <Fragment>
                    <HeaderDiv>
                        <span>{brandInfo.shop_name}</span>
                    </HeaderDiv>

                    <TitleDiv>
                        <div className="titleTop">
                            <div className="shopLogo">
                           
                                <img src={brandInfo.logo_url} alt=""/>
                            </div>
                            <div className="shopInfo" >
                                <span >{brandInfo.shop_name}</span>
                                    <span className="count">{brandInfo.store_info}</span>
                            </div>
                            <div className="shouCang" >
                                
                                <span className="iconfont">&#xe603;</span>
                            </div>
                        </div>
                        <div className="timeOut">
                            <p>距离结束时间还剩</p>
                            <p>-3天19时44分5秒</p>
                        </div>
                    </TitleDiv>
                    <ContainerNavDiv>
                        {
                            floor_bar.map((item,index)=>(
                            <span  className="span"  key={index} >
                           {item.title}
                        </span>
                            ))
                        }
                    </ContainerNavDiv>
            </Fragment>
        )
    }
   

}
export default  Shop