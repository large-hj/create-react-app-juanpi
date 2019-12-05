import React, { Component } from 'react'
import {SearchBox,BoxDiv} from "./styled"
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
@connect(mapStateToProps, mapDispatchToProps)
 class Search extends Component {
    constructor(){
        super()
        this.state={
            search:""
        }
    }
    handleChange(e){
        let keyword=e.target.value;
        this.setState({
            search:keyword
        })
    }
    componentDidMount(){
        this.props.handleSearchAsync();
    }
    handlesubmit(){
        let {search}=this.state;
        // console.log(this.props)
        this.props.handleSearchAsync(search);
    }
    render() {
        let {search}=this.state;
        return (
            <SearchBox>
               <div className="search">
                    <i className="iconfont s_icon1">&#xe602;</i>
                    <div className="searchContent">
                        <i className="iconfont s_icon2">&#xe613;</i>
                        <input type="text" placeholder="搜索" value={search} onChange={this.handleChange.bind(this)}/>
                        <button onClick={this.handlesubmit.bind(this)}>搜索</button>
                    </div>
                    <i></i>
               </div>
               {/* 价格销量 */}
               <div className="computed">
                    <ul className="ul">
                        <li>推荐</li>
                        <li className="price">
                            价格
                            <span className="order">
                            <i className="iconfont p_icon1">&#xe631;</i>
                            <i className="iconfont p_icon2">&#xe625;</i>
                            </span>
                        </li>
                        <li>销量</li>
                        <li>上新</li>
                        <li className="select">筛选<i className="iconfont p_icon3">&#xe609;</i></li>
                    </ul>
               </div>
               {/* 列表 */}
               <div className="Search_list">
               <BoxDiv className="Box">
                        
                            <NavLink to="/details" className="div" >
                                <div className="img">
                                    <img src="" alt="" />
                                </div>

                                <i>￥2 <span>￥3</span></i>
                                <p>7</p>
                            </NavLink>
                            <NavLink to="/details" className="div" >
                                <div className="img">
                                    <img src="" alt="" />
                                </div>

                                <i>￥2 <span>￥3</span></i>
                                <p>7</p>
                            </NavLink>
                </BoxDiv>
               </div>

            </SearchBox>
            
        )
    }
}
export default Search;