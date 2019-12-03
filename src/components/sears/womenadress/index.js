import React, { Component } from 'react'
import {WomenBox,Product}  from "./styled"
export default class Womenadress extends Component {
    constructor(){
        super();
        this.state={
            productList:[
                {
                    pic:"//s2.juancdn.com/bao/191101/4/1/5dbbe44433b089562c147214_200x200.png",
                    title:"女士裙装"
                },
                {
                    pic:"//s2.juancdn.com/bao/191101/6/5/5dbbe72133b089554a1a7630_200x200.png?iopcmd=convert&dst=webp",
                    title:"羽绒棉服"
                },
                {
                    pic:"//s2.juancdn.com/bao/191101/8/3/5dbbe91e33b08955ed35f212_200x200.png?iopcmd=convert&dst=webp",
                    title:"卫衣"
                },
                {
                    pic:"//s2.juancdn.com/bao/191101/6/3/5dbbdfd0b6f8ea60fc7c333e_200x200.png?iopcmd=convert&dst=webp",
                    title:"衬衫雪纺"
                },
                {
                    pic:"//s2.juancdn.com/bao/180510/f/6/5af4305c33b08974b25d97c5_200x200.png?iopcmd=convert&dst=webp",
                    title:"休闲裤"
                },
                {
                    pic:"//s2.juancdn.com/bao/191101/a/c/5dbbe5f233b089554d6251e4_200x200.png?iopcmd=convert&dst=webp",
                    title:"大衣外套"
                },
                {
                    pic:"//s2.juancdn.com/bao/191101/a/0/5dbbec4c33b08955ee6412f1_200x200.png?iopcmd=convert&dst=webp",
                    title:"懒人套装"
                },
                {
                    pic:"//s2.juancdn.com/bao/191101/9/e/5dbbe4e1b6f8ea60f03bc297_200x200.png?iopcmd=convert&dst=webp",
                    title:"针织毛衫"
                },
                {
                    pic:"//s2.juancdn.com/bao/191101/3/e/5dbbe70533b089553b0010a2_200x200.png?iopcmd=convert&dst=webp",
                    title:"皮草"
                },
                {
                    pic:"//s2.juancdn.com/bao/191101/2/a/5dbbea0f33b089564d680f24_200x200.png?iopcmd=convert&dst=webp",
                    title:"西装外套"
                },
               
                {
                    pic:"//s2.juancdn.com/bao/191101/a/e/5dbbe546b6f8ea5f0703fd0c_200x200.png?iopcmd=convert&dst=webp",
                    title:"风衣"
                },
               
                {
                    pic:"//s2.juancdn.com/bao/190220/d/a/5c6cda8233b0891a8c2ff71a_200x200.jpg?iopcmd=convert&dst=webp",
                    title:"中老年女装"
                },
               
                {
                    pic:"//s2.juancdn.com/bao/180517/b/0/5afd2b2133b08909906c57af_200x200.png?iopcmd=convert&dst=webp",
                    title:"牛仔裤"
                },
               
                {
                    pic:"//s2.juancdn.com/bao/181106/4/a/5be163f1b6f8ea61f7712835_200x200.png?iopcmd=convert&dst=webp",
                    title:"职业套装"
                },
               
                {
                    pic:"//s2.juancdn.com/bao/170502/3/2/5908496ca43d1f7f665137b7_200x200.png?iopcmd=convert&dst=webp",
                    title:"T恤"
                }
               
            ]
        }
    }
    render() {
       
        let {productList} =this.state;
        return (
            <WomenBox>
                <Product>
                    {
                        productList.map((item,index)=>(
                            <div className="common" key={index}>
                            <img src={item.pic} alt=""/>
                        <span className="clothes">{item.title}</span>
                        </div>
                        ))
                    }
                </Product>
            </WomenBox>
        )
    }
}
