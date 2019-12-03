import React, { Component, Fragment } from 'react'
// import {PageContainer} from "common/styled"
import {
    SearchDiv, BannerDiv, NavDiv, JuanpiBannerDiv, JuanpGipzikDiv,
    JuanpiEqWGtTDiv, ContainerNavDiv,FragmentDiv
} from "./homeStyled";
import { Carousel, WingBlank } from 'antd-mobile';

import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./mapStore"
import { withRouter,NavLink } from "react-router-dom";
@withRouter
@connect(mapStateToProps, mapDispatchToProps)

class Home extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            data:'',
            imgHeight: 176,
            
        }
        this.page = 1;
    }

    componentDidMount() {
          let { zy_ids, app_name, catname } = this.props;
        this.props.handleAsyncHome(zy_ids, app_name, catname, this.page);
        // console.log(this.props.slide_ads)
      
      
    }
    render() {
        let { multi_block, zg_event, zg_banner, zg_event1,slide_ads } = this.props;

        return (
            <Fragment>
            <FragmentDiv>

          
                <SearchDiv>
                    <div className="input">
                        <span className="iconfont">&#xe613;</span>
                        <span className="juanpi">卷皮</span>
                        <span className="search">搜索</span>
                    </div>
                    <div className="inputRight">
                        <span className="iconfont">&#xe630;</span>
                    </div>
                </SearchDiv>
                <BannerDiv>
                    <WingBlank>
                        <Carousel className="space-carousel"
                            frameOverflow="visible"
                            cellSpacing={0}
                            slideWidth={1.0}
                            autoplay
                            infinite
                            //   beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => this.setState({ slideIndex: index })}
                        >
                            {
                            slide_ads.map((val, index) => (
                                <a
                                    key={val}
                                    href={val.jump_url}
                                    style={{
                                        display: 'block',
                                        position: 'relative',
                                        top: this.state.slideIndex === index ? -10 : 0,
                                        height: this.state.imgHeight,
                                        boxShadow: '1px 1px 1px rgba(0, 0, 0, 0)',
                                        selectedIndex: 0,
                                        dots: true,
                                    }}
                                >
                                    <img
                                        src={val.pic}
                                        alt=""
                                        style={{ width: '100%', height: '1.75rem', verticalAlign: 'top' }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                </a>
                            ))}
                        </Carousel>
                    </WingBlank>

                </BannerDiv>

                <NavDiv>

                    {
                        multi_block.map((item, index) => (
                            <div key={item.child[0].pic}  onClick={this.handleTo.bind(this,index)} >
                                <img src={item.child[0].pic} alt="" />
                            </div>
                        ))

                    }
                </NavDiv>
                <JuanpiBannerDiv>
                    {
                        zg_event.map((item, index) => (
                            <div className="left" key={item.pic}>
                                <img src={item.pic} alt="" />
                            </div>
                        ))
                    }

                    <div className="right">
                        {

                            zg_event1.map((item) => (

                                <div key={item.pic}>
                                    <img src={item.pic} alt="" />
                                </div>


                            ))
                        }

                    </div>
                </JuanpiBannerDiv>
                <JuanpGipzikDiv>
                    {
                        zg_banner.map((item) => (
                            <img src={item.pic} alt=""  key={item.pic}/>
                        ))
                    }

                </JuanpGipzikDiv>

                <JuanpiEqWGtTDiv>
                    <img src="https://goods7.juancdn.com/jas/180518/c/6/5afe2f0db6f8ea096f2bfb35_1080x138.png" alt="" />
                </JuanpiEqWGtTDiv>

                <ContainerNavDiv>
                    <NavLink to="/home/jxzc" className="span" >
                        <span>精选专场</span>
                    </NavLink>
                    <NavLink to="/home/jxdp" className="span" >
                        <span>精选单品</span>
                    </NavLink>

                </ContainerNavDiv>
                </FragmentDiv>
            </Fragment>
        )
    }
    handleTo(index){
      if(index===0){

      }else if(index===1){

      }else if(index===2){
        this.props.history.push("/brandSale")
      }else{

      }
        
       
    }
   
}

export default Home