import Loadable from "react-loadable";
import Loading from "common/loading"


export const Home = Loadable({
    loader:_=>import("./home"),
    loading:Loading
})

//分类
export const Classify = Loadable({
    loader:_=>import("./classify"),
    loading:Loading
})



export const Buycar = Loadable({
    loader:_=>import("./buyCar"),
    loading:Loading
})

export const ShopFirst=Loadable({
    loader:()=>import("./shopFirst"),
    loading:Loading
})
export const ShopSecond=Loadable({
    loader:()=>import("./shopSecond"),
    loading:Loading
})
export const ShopThird=Loadable({
    loader:()=>import("./shopThird"),
    loading:Loading
})

export const Mine = Loadable({
    loader:_=>import("./mine"),
    loading:Loading
})

export const Jxdp=Loadable({
    loader:()=>import("./jxdp"),
    loading:Loading
})
export const Jxzc=Loadable({
    loader:()=>import("./jxzc"),
    loading:Loading
})


export const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})

export const Shop=Loadable({
    loader:()=>import("./shop"),
    loading:Loading
})

export const Details=Loadable({
    loader:()=>import("./details"),
    loading:Loading
})
//登录二级路由
export const SmallLogin=Loadable({
    loader:()=>import("./smalllogin"),
    loading:Loading
})
export const SmallRegister=Loadable({
    loader:()=>import("./smallregister"),
    loading:Loading
})
//品牌特卖
export const BrandSale=Loadable({
    loader:()=>import("./brandSale"),
    loading:Loading
})
//品牌特卖里的二级路由
export const Handpik=Loadable({
    loader:()=>import("../components/brandSales/handpik"),
    loading:Loading
})
export const Shoe=Loadable({
    loader:()=>import("../components/brandSales/shoe"),
    loading:Loading
})
export const BeautyMakeup=Loadable({
    loader:()=>import("../components/brandSales/beautyMakeup"),
    loading:Loading
})
// 分类二级路由

export const Womenadress=Loadable({
    loader:()=>import("../components/sears/womenadress"),
    loading:Loading
})
export const Mandress=Loadable({
    loader:()=>import("../components/sears/mandress"),
    loading:Loading
})