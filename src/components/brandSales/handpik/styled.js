import styled from "styled-components";

export const HandBox = styled.div`
    width:100%;
    height: 7rem;
    overflow-y:auto;
    display:flex;
    flex-direction:column;
    .box{
        height:30rem;
    }
    .pic1{
        height: 0.29rem;
        img{
            width:100%;
            height: 0.29rem;
        }
    }
`
export const Times = styled.div`
    width:100%;
    height: 0.35rem;
    background:#353646;
    font-size:0.14rem;
    display:flex;
    .span{
        width:100%;
        text-align:center;
        line-height:0.35rem;
        color:rgba(255,255,255,0.75);
    }
`
export const Seckill = styled.div`
    height:1.6rem ;
    background:#353646;
    display:flex;
    padding:0.12rem 0;
    /* justify-content:space-around; */
    .pic_1{
        width:30%;
       margin-left:2.5%;
       display:flex;
       flex-direction:column;
    }
    .pic2{
        width:30%;
        height:0.95rem;
        width:100%;
        img{
            width:100%;
            height: 100%;
        }
    }
    .bothPrice{
        height:0.49rem ;
        display:flex;
        align-items:center;
        justify-content:center;
        .pri1{
            color:#ff464e;
            font-size:0.12rem;
        }
        .pri2{
            color:#BBBBBB;
            font-size:0.09rem;
        }
    }
`
export const Play = styled.div`
    width:100%;
    height: 0.38rem;
    font-size:0.14rem;
    color:#151515;
    text-align:center;
    line-height:0.38rem;
`
export const Product = styled.div`
    width:100%;
    height: 2.71rem;
    font-size:0.14rem;
    color:#151515;
    display:flex;
    flex-direction:column;
    .banner{
        width:100%;
        height: 1.23rem;
        img{
            width:100%;
            height:100%;
        }
    }
    .goods{
        width:100%;
        height:1.42rem;
        padding:0.08rem 0.08rem 0.05rem;
        display:flex;
        .lists{
            width:30%;
            flex-direction:column;
            display:flex;
            margin-left:0.1rem;
            .pic3{
                width:100%;
                img{
                    width:100%;
                    height:0.94rem;
                }
            }
            .countprice{
                display:flex;
                width:30%;
                .spanone{
                    color:#FF464E;
                    font-size:0.11rem;
                    margin-top:0.03rem;
                }
                .spantwo{
                    color:#BBBBBB;
                    font-size:0.085rem;
                    margin-top:0.05rem;
                    margin-left:0.03rem;

                }
            }
            .bottom{
                width:0.94rem;
                font-size:0.11rem;
                color:#BBBBBB;
                overflow: hidden;
                white-space:nowrap;
                text-overflow:ellipsis;
            }
        }
    }
`