import styled from "styled-components";

export const SearchBox = styled.div`
    font-size:0.14rem;
    display:flex;
    flex-direction:column;
  
    color:#999999;
    .search{
        display:flex;
        height:0.44rem;
        padding:0.1rem 0.18rem 0.1rem 0.22rem;
        border:1px solid #ccc;
        .s_icon1{
            font-size:0.16rem;
            margin-top:0.03rem;
            margin-right:0.03rem;
        }
        .searchContent{
            width:2.4rem;
            height:0.22rem;
            line-height:0.22rem;
            display:flex;
            border:1px solid #ccc;
            .s_icon2{
                font-size:0.16rem;
                margin-left:0.1rem;
                margin-right:0.15rem;
            }
            input{
                width:2rem;
                font-size:0.14rem;
            }
        }
    }
    /* computed */
    .computed{
        width:100%;
        height:0.4rem;
        background:gold;
        padding:0.1rem 0.15rem 0.1rem;
        .ul{
            width:100%;
            height:100%;
            display:flex;
            align-items:center;
            li{
                width:100%;
                height:100%;
                font-size:0.14rem;
                color:#333333;
                .order{
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    margin-left:0.05rem;
                    .p_icon1,.p_icon2{
                    font-size:0.14rem;
                    }
                }
                
            }
            .select{
                display:flex;
                align-items:center;
                .p_icon3{
                    font-size:0.2rem;
                    margin-left:0.06rem;
                }
            }
            .price{
                display:flex;
            }
        }
    }
`

export const BoxDiv = styled.div`
     width: 100%;
    display: flex;
    padding: 0 0.1rem;
    justify-content:space-between;
    flex-wrap:wrap;
    .div{
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
`