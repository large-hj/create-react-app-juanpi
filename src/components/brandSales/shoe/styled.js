import styled from "styled-components";

export const ShoeBox = styled.div`
    width:100%;
    height: 100%;
    overflow-y:auto;
    display:flex;
    flex-direction:column;
   
`

export const Navs = styled.div`
    width:100%;
    height: 0.36rem;
    display:flex;
    padding-top:0.065rem;
    background:#F4F4F8;
    font-size:0.11rem;
    color:#333333;
    .shoe{
        width:0.38rem;
        height:0.21rem ;
        background:#Ffffff;
        margin-left:0.09rem;
        text-align:center;
        line-height:0.21rem;
    }
`
export const Allgoods = styled.div`
   width:100%;
   height: 100%;
   display:flex;
   flex-shrink:0;
   flex-wrap: wrap;
`

export const Leftgoods = styled.div`
   width:49.9%;
   border-right:0.004rem solid #ccc;
   font-size:0.12rem;
   .shoes{
       width:100%;
       height:1.6rem;
       img{
           width:100%;
           height:100%;
       }
   }
   .bothprice{
      width:100%;
      height:0.232rem;
      display:flex;
      line-height:0.232rem;
      .countpri{
          color:#FF464E;
          font-size:0.14rem;
          margin-left:0.07rem;
      } 
      .beforepri{
          color:#BBBBBB;
          font-size:0.095rem;
          margin-left:0.05rem;
      } 
   }
   .goodsname{
       width:96%;
       font-size:0.11rem;
       color:#333333;
       margin-left:0.07rem;
   }
`
