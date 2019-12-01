import Loadable from "react-loadable";
import Loading from "common/loading"


export const Home = Loadable({
    loader:_=>import("./home"),
    loading:Loading
})


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
    loader:_=>import("./login"),
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
