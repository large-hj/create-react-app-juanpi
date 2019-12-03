import styled from "styled-components";

export const Box = styled.div`
display:flex;
flex-direction:column;
    .phone{
        height:0.15rem;
        margin:0.28rem 0 0.1rem;
        text-align:center;
        font-size:0.12rem;
        color:#9999;
    }
    .btn{
        height:0.48rem;
        width:93%;
        background:#DBDBDB;
        color:#fff;
        font-size:0.18rem;
        line-height:0.48rem;
        text-align:center;
        margin-left:0.12rem;
        margin-top:0.25rem;
    }
`
export const Sale=styled.div`
    width:100%;
    height: 0.38rem;
    display:flex;
    line-height:0.38rem;
    border-bottom:0.004rem solid #ccc;
    .icon1{
        margin-left:0.14rem;
        font-size:0.14rem;
        color:#333333;
    }
    .title{
        width:2.7rem;
        text-align:center;
        display:block;
        font-size:0.15rem;
        color:#333333;
    }
`
export const NameInput = styled.input`
   width:100%;
height:0.48rem;
padding:0.12rem;
color:#9999;
font-size:0.14rem;
border-bottom:0.004rem solid #9999;
`
export const PassInput = styled.input`
  width:100%;
height:0.48rem;
padding:0.12rem;
color:#9999;
font-size:0.14rem;
border-bottom:0.004rem solid #9999;
`