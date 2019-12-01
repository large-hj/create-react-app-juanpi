import styled from "styled-components"

export const SearchDiv = styled.div`
    width:100%;
    height:0.6rem;
    display:flex;
    background:#fff;
    justify-content:space-between;
    align-items:center;
    padding: 0 0.1rem;
    position: sticky;
    top:0;
    .input{
        width:82%;
        height:0.3rem;
        background:#f2f2f2;;
        border-radius:0.1rem;
        font-size:0.14rem;
        display:flex;
        justify-content:flex-start;
        align-items:center;
        padding-left:0.1rem;
        .juanpi{
            color:red;
            margin-left:0.1rem;
        }
        .search,.iconfont{
            color: rgb(153, 153, 153);
            margin-left:0.1rem;
        }
    }

    .inputRight{
        width:15%;
        height:0.4rem;
        border-radius:0.1rem;
        display:flex;
        justify-content:center;
        align-items:center;
        span{
            font-size:0.3rem;
        }
    }
    
`
export const BannerDiv = styled.div`
    width:100%;
    height:1.76rem;
    .space-carousel {
    background: #DEF1E5;
    overflow: hidden;
    display:flex;
}
`
export const NavDiv = styled.div`
    width:100%;
    height:0.7rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    div{
        width:26%;
        height:100%;
        img{
            width:100%;
            height:100%;
        }
    } 
    
`
export const JuanpiBannerDiv = styled.div`
    width:100%;
    height:1.9rem;
    display:flex;
    .left{
        width:50%;
        height:100%;
        background:blue;
        img{
            width:100%;
            height:100%;
        }
      
    } 
    .right{
        width:50%;
        height:100%;
    
        div{
            width:100%;
            height:50%;
            img{
                width:100%;
                height:100%;
            }
        }
      
    } 
    
`
export const JuanpGipzikDiv = styled.div`
    width:100%;
    height:1.1rem;
    display:flex;
    img{
        width:100%;
        height:100;
    }
    
`
export const JuanpiEqWGtTDiv = styled.div`
    width:100%;
    height:0.4rem;
    display:flex;
    img{
        width:100%;
        height:100;
    }
    
`
export const BoxDiv = styled.div`
    width:100%;
    height:10rem;
    display:flex;
    flex-direction:column;
    
 
`
export const ContainerDiv = styled.div`
    width:100%;
    height:10rem;
    background:red;
 
`

export const ContainerNavDiv = styled.div`
    width:100%;
    height:0.4rem;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding-left:0.1rem;
    .span{
        font-size:0.16rem;
        margin-left:0.2rem;
        color:#333;
       
    }
    .active{
        color: #ff464e;
        border-bottom:1px solid #ff464e;
    }
 
`