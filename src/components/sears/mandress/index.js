import React, { Component } from 'react'
import {ManBox,Product}  from "./styled"
export default class Womenadress extends Component {
    constructor(){
        super();
        this.state={
            productList:[
                {
                    pic:"//s2.juancdn.com/bao/170815/a/9/5992e3d18150a12e9903fc68_200x200.png?iopcmd=convert&dst=webp",
                    title:"夹克"
                },
                {
                    pic:"//s2.juancdn.com/bao/190528/7/d/5cecdd8b33b08951d6492de9_200x200.png?iopcmd=convert&dst=webp",
                    title:"套装"
                },
                {
                    pic:"//s2.juancdn.com/bao/190528/2/a/5cecd8c9b6f8ea5ae1362821_200x200.png?iopcmd=convert&dst=webp",
                    title:"T恤"
                },
                {
                    pic:"//s2.juancdn.com/bao/190528/d/e/5cecdc3833b08955c532a6a4_200x200.png?iopcmd=convert&dst=webp",
                    title:"男士衬衫"
                },
                {
                    pic:"//s2.juancdn.com/bao/171011/7/c/59ddcb028150a1342d541a29_200x200.png?iopcmd=convert&dst=webp",
                    title:"卫衣"
                },
                {
                    pic:"//s2.juancdn.com/bao/190528/1/5/5cecd984b6f8ea5ca8567b37_200x200.png?iopcmd=convert&dst=webp",
                    title:"POLO衫"
                },
                {
                    pic:"//s2.juancdn.com/bao/170828/2/a/59a3d51a8150a108c4711bc3_200x200.png?iopcmd=convert&dst=webp",
                    title:"牛仔裤"
                },
                {
                    pic:"//s2.juancdn.com/bao/170828/6/a/59a3d4faa9fcf831ca0a6202_200x200.png?iopcmd=convert&dst=webp",
                    title:"休闲裤"
                },
                {
                    pic:"//s2.juancdn.com/bao/170828/4/6/59a3d531a9fcf8337b0f195e_200x200.png?iopcmd=convert&dst=webp",
                    title:"西裤"
                },
          
              
               
            ]
        }
    }
    render() {
       
        let {productList} =this.state;
        return (
            <ManBox>
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
            </ManBox>
        )
    }
}
