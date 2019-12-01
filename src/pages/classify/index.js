import React, { Component } from 'react'
import {PageContainer} from "common/styled";
import {SearchType,LeftNav,RightList,Box} from "./styled";
import {NavLink} from "react-router-dom"
import { Flex } from '_antd-mobile@2.3.1@antd-mobile';
export default class Classify extends Component {
    render() {
        return (
            <PageContainer>
                <SearchType>
                    <i className="iconfont icon1">&#xe613;</i>
                    <span className="searchoproduct">搜索商品</span>
                </SearchType>
                <Box>

                <LeftNav>
                    <NavLink to="/classify/womenadress" className="lis">女装</NavLink>
                    <NavLink to="/classify/mandress" className="lis">男装</NavLink>
                    <li className="lis">母婴</li>
                    <li className="lis">鞋子</li>
                    <li className="lis">箱包</li>
                    <li className="lis">居家百货</li>
                    <li className="lis">家电数码</li>
                    <li className="lis">内衣配饰</li>
                    <li className="lis">美妆</li>
                    <li className="lis">运动户外</li>
                    <li className="lis">美食</li>
                    <li className="lis">车品文娱</li>
                    <li className="lis">通讯旅游</li>
                </LeftNav>
                <RightList>

                </RightList>
                </Box>
            </PageContainer>
        )
    }
}
