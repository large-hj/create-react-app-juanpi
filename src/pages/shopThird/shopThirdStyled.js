import styled from "styled-components"

export const BoxDiv = styled.div`
     width: 100%;
    display: flex;
    padding: 0 0.1rem;
    justify-content:space-between;
    flex-wrap:wrap;
    div{
        width:48%;
        margin-bottom: 0.1rem;
        height:2rem;

        .img{
            width: 100%;
            height:80%;
            img{
                width: 100%;
                height: 100%;
            }
        }
        i{
            display: block;
            font-size: 0.12rem;
            color: #ff464e;
            padding-left: 0.1rem;
            span{
                font-size: 0.10rem;
                color: #bbb;
            }
        }
        p{
            font-size: 0.12rem; 
            color: #3b3b3b;
            padding-left: 0.1rem;
        }
    }
    .title{
        width:100%;
        height:0.4rem;
        font-size:0.14rem;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`