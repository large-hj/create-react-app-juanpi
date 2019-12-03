import styled from "styled-components"

export const TopBannerDiv = styled.div`
    width: 100%;
    height: 3.2rem;
    background: #ccc;
    overflow: hidden;
    img{
        width:100%;
        height:3.2rem;
    }
    
`
export const Div = styled.div`
    width: 100%;
    height: 10rem;
    background-color: rgb(244, 244, 248);
    
    
`
export const GoodsInfo = styled.div`
    width: 100%;
    height: 0.9rem;
    background:#fff;
    font-size:0.12rem;
    padding:0.1rem;
    display: flex;
    flex-direction: column;
    .GoodSInfoTop{
        width:100%;
        height:40%;
        display:flex;
        justify-content:space-between;
        .price{
            font-size:0.16rem;
            color:red;
            i{
                font-size:0.12rem;
                color:#ccc;
            }
            em{
                font-size:0.14rem;
                background:red;
                color:#fff;
            }
        }
    }
    .GoodSInfoBottom{
        width:100%;
        height:40%;
        p{
            color: #333333;
            font-size:0.16rem;
        }
    }
`
export const CouponDiv = styled.div`
    width: 100%;
    height: 0.4rem;
    background: #fff;
    border-bottom:1px solid #ccc;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 0.1rem;
    font-size:0.14rem;
    color: #333333;
    i{
        font-size:0.12rem;
        background:red;
        color:#ccc;
    }
`
export const AftersaleDiv = styled.div`
    width: 100%;
    height: 0.4rem;
    background: #fff;
    border-bottom:1px solid #ccc;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 0.1rem;
    font-size:0.14rem;
    color: #333;

    
`
export const HavechosenDiv = styled.div`
    width: 100%;
    height: 0.4rem;
    background: #fff;
    border-bottom:1px solid #ccc;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 0.1rem;
    font-size:0.14rem;
    color: #333;
    margin:0.1rem 0;

    
`
export const FooterDiv = styled.div`
    width: 100%;
    height: 0.4rem;
    background: #fff;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:0.12rem;
    color: #333;
    position:fixed;
    z-index:10;
    bottom:0;
    .shouye{
        width:20%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        border-right:1px solid #ccc;
    }
    .fenlei{
        width:20%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        border-right:1px solid #ccc;
    }
    .ljgm{
        width:30%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .joincar{
        width:30%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        background:red;
    }
    .icon1,.icon2{
                font-size:0.15rem;
                color:#ccc;
   }
 

    
`
export const Model = styled.div`
    font-size:0.14rem;
    min-height:1.7rem;
    overflow-y:auto;
    .my-drawer {
    position: relative;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    }
    .my-drawer .am-drawer-sidebar {
    background-color: #fff;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    }
    .my-drawer .am-drawer-sidebar .am-list {
    width: 300px;
    padding: 0;
    }
    .selecthead{
        width:100%;
        height:0.45rem;
    }
    .am-list-item .am-list-line .am-list-content {
    flex: 1 1;
    color: #000;
    font-size: 0.14rem;
    line-height: 1.5;
    text-align: left;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-top: 7px;
    padding-bottom: 7px;
}
.am-accordion .am-accordion-item .am-accordion-header {
    position: relative;
    color: #000;
    font-size: 0.14rem;
    height: 0.44rem;
    line-height:0.44rem;
    background-color: #fff;
    box-sizing: content-box;
    padding-left: 15px;
    padding-right: 30px;
    border-bottom: 1PX solid #ddd;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
`