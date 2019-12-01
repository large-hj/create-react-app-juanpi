import styled from "styled-components";

export const Center = styled.div`
    width:100%;
    height: 2.07rem;
    display:flex;
    flex-direction:column;
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
export const Choose = styled.div`
    width:100%;
    height: 0.37rem;
    display:flex;
    justify-content:space-between;
    color:#999;
    font-size:0.14rem;
    padding:0 0.12rem;
    margin-bottom:0.52rem;
    .left{
      display:flex;
      width:1.1rem;
      height:100%;
      line-height:0.37rem;
      input{
        margin-top:0.11rem;
        width:0.13rem;
        height: 0.13rem;
        background:#ff464e;
        margin-right:0.03rem;
      }
    }
    .right{
      line-height:0.37rem ;
    }
`

export const Footer = styled.div`
height:2rem;

ul{
  width:100%;
  height:0.35rem ;
  display:flex;
  font-size:0.11rem;
  color:#999;
  justify-content:space-around;
  margin-top:0.13rem;
}
li{
  width:100%;
  height:0.35rem ;
  display:flex;
  justify-content:center;
  align-items:center;
}
h3{
  margin-bottom:0.3rem;
  font-size:0.12rem;
  color:#999;
  width:100%;
  height: 0.13rem;
  text-align:center;
}
.icons{
  display:flex;
  height: 0.71rem;
  justify-content:space-around;
  border-bottom:0.004rem solid #ccc;
  padding-bottom:0.23rem;
  .icon1{
    width:0.48rem;
    height:0.48rem ;
    border:0.004rem solid #ccc;
    border-radius:100%;
    display:flex;
    color:#53ccff;
   justify-content:center;
    line-height:0.48rem;
    font-size:0.3rem;
    .icon{
      font-size:0.25rem;
    }
  }
  .icon2{
    color:#ec834c;
  }
  .icon3{
    color:#fe7c7c;
  }
}
`