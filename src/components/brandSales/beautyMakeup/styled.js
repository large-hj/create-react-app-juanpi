import styled from "styled-components";

export const Allgoods = styled.div`
   width:100%;
   height: 100%;
   display:flex;
   overflow-y:auto;
   flex-wrap:wrap;
`
export const Leftgoods = styled.div`
   width:49.9%;
   height: 2.1rem;
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
       width:100%;
       font-size:0.11rem;
       color:#333333;
       margin-left:0.07rem;
   }
`