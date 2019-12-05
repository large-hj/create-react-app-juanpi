import styled from "styled-components";

export const Box = styled.div`

    width:100%;
    height:100%;
    flex-direction:column;
    display:flex;
    overflow-y:auto;

    background:#f4f4f8;
    
    .footer{
        width:100%;
        height:0.5rem;
        background:#fff;
        position:fixed;
        bottom:0.5rem;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:0.14rem;
        div:nth-child(1){
            width:30%;
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:0.16rem;
            font-weight:bold;
            input {
            width: 0.15rem;
            height: 0.3rem;
            margin-left: 0.1rem;
            }
        }
        div:nth-child(2){
            width:40%;
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:0.14rem;
            font-weight:bold;
            span{
                color:#c33;
                font-size:0.16rem;
            }
        }
        div:nth-child(3){
            width:30%;
            height:100%;
            background:#c33;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:0.14rem;
            font-weight:bold;
            color:#fff;
        }
    }
    .head{
        width:100%;
        height: 0.44rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom:0.002rem solid #ccc;
        .cart{
            font-size:0.18rem;
            color:#333333;
        }
        .right{
            margin-right:0.12rem;
            font-size:0.15rem;
            color:#4a4a4a;
        }
    }
    .promotion{
        padding:0.12rem;
        width:100%;
        height: 0.45rem;
        display:flex;
        border-bottom:0.002rem solid #ccc;
        .icons{
            width:0.164rem;
            height: 0.164rem;
            color:#fff;
            font-size:0.16rem;
            border:0.004rem solid #ccc;
            border-radius:100%;
        }
        .pic{
            width:0.2rem;
            height: 0.2rem;
            margin-left:0.12rem;
            img{
                width:0.2rem;
            height: 0.2rem;
            }
        }
       .shop{
        font-size:0.14rem;
        color:#666;
        margin-left:0.12rem;
       }
    }
    
`
// 商品列表
export const OneProduct = styled.div`
        width:100%;
        min-height: 1.6rem;
        display:flex;
        flex-direction:column;
        font-size:0.14rem;
`
export const Count = styled.div`
        width:100%;
        height: 0.36rem;
        display:flex;
        align-items:center;
        padding:0.12rem;
        border-bottom:0.002rem solid #ccc;
        .count1{
            width:0.37rem;
            height: 0.16rem;
            border:0.002rem solid #FF464E;
            color:#FF464E;
            font-size:0.1rem;
            text-align:center;
            line-height:0.16rem;
            margin-left:0.08rem;
            margin-right:0.06rem;
        }
        .count2{
            height: 0.36rem;
            width:1.3remm;
            color:#333333;
            font-size:0.12rem;
            display:flex;
            align-items:center;
           
        }
        .count3{
            width:0.62rem;
            margin-left:0.14rem;
            font-size:0.12rem;
            color:#FF464E;
            .icon2{
                font-size:0.13rem;
            }
        }
`
export const Lists = styled.div`
    width:100%;
    height:100%;
    overflow-y:auto;
`
export const List = styled.div`
        width:100%;
        min-height: 1.225rem;
        display:flex;
        padding-top:0.12rem;
        padding-bottom:0.12rem;
        border-bottom:0.004rem solid #ccc;
        background:#fff;
        .select{
            height:100%;
            width:0.31rem;
            margin-top:0.4rem;
          input {
            width: 0.15rem;
            height: 0.3rem;
            margin-left: 0.1rem;
           
}
        }
        .picture{
            width:0.9rem;
            height: 100%;
            display:flex;
            align-items:center;
            img{
                width:0.9rem;
                height: 0.9rem; 
            }
        }
        .content{
            width:1.58rem;
            height: 100%;
            display:flex;
            flex-direction:column;
            .p1{
                font-size:0.12rem;
                color:#333333;
                overflow: hidden;
                white-space:nowrap;
                text-overflow:ellipsis;
            }
            .p2{
                font-size:0.14rem;
                color:#BBBBBB;
                width:1.58rem;
              
                white-space:nowrap;
                text-overflow:ellipsis;
            }
        }
`
export const Price = styled.div`
      width:1.58rem;
      height: 0.38rem;
      display:flex;
      margin-top:0.2rem;
      .newprice{
          color:#FF464E;
          font-size:0.12rem;
      }
      
      .num{
        width:100%;
        height:0.3rem;
        display:flex;
        justify-content:space-around;
        align-items:center;
        div{
            width: 33%;
            height:80%;
            display:flex;
            justify-content:center;
            align-items:center;
            background:#E5E5E5;
            border-radius:0.05rem;
        }

      }
`