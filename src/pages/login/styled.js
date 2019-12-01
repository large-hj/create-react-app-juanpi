import styled from "styled-components";
export const Box = styled.div`
width:100%;
height: 100%;
overflow-y:auto;
display:flex;
flex-direction:column;

`
export const Top = styled.div`
    display:flex;
    width:100%;
    height:0.44rem;
    justify-content:space-between;
    align-items:center;
    color:#fff;
    background:linear-gradient(150deg,#ff5a61 50%,#fd631c);
    i{
        color:#fff;
        font-size:0.14rem;
        margin-left:0.12rem;
    }
    h2{
        font-size:0.18rem;
    }
    span{
        display:block;
        font-size:0.14rem;
        margin-right:0.12rem;
    }

`
export const Select = styled.div`
    width:100%;
    height:0.44rem;
   ul{
    display:flex;
    width:100%;
    height:0.44rem;
    justify-content:space-between;
    align-items:center;
   }
   .li{
       width:50%;
    height:0.44rem;
    font-size:0.14rem;
    line-height: 0.44rem;
    text-align:center;
    color:#9999;
   }

`


// export const NameInput=styled.input.attrs({
//     value:props=>props.value,
//     type:"text"
// })`

// `
// export const PassInput=styled.input.attrs({
//     value:props=>props.value,
//     type:"text"
// })`

// `