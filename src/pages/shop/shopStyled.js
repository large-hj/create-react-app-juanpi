import styled from "styled-components"
export const HeaderDiv = styled.div`
    width:100%;
    height: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        color: #333;
        font-size: 0.16rem;
    }
`
export const TitleDiv = styled.div`
    width: 100%;
    height: 1.4rem;
    background:#fafafa;
    padding: 0.1rem 0.1rem;
    .titleTop{
        width: 100%;
        height:0.8rem;
        display:flex ;
        justify-content: space-around;
        align-items: center;
        .shopLogo{
            width: 20%;
            height: 80%;
            padding: 0.15rem 0rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .shopInfo{
            width: 60%;
            height: 80%;
            padding: 0.1rem;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            align-items:flex-start;
            span{
                font-size:0.14rem;
            }
            .count{
                font-size:0.12rem;
                color:#ccc;
            }
        }
        .shouCang{
            width: 20%;
            height: 80%;
            display:flex;
            justify-content: center;
            align-items: center;
            font-size:.4rem;
         
            
            
        }
    }
    .timeOut{
        width: 100%;
        height: 0.6rem;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items:center;
        font-size: 0.14rem;


    }
`


export const ContainerNavDiv = styled.div`
    width:100%;
    height:0.4rem;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding-left:0.1rem;
    overflow:hidden;
  
    .span{
        font-size:0.12rem;
        margin-left:0.1rem;
        width:20%;
        overflow: hidden;
        color:#333;
       
    }
    .active{
        color: #ff464e;
        border-bottom:1px solid #ff464e;
    }
 
`