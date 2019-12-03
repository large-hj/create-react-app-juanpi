import {
    Home,Jxzc,Jxdp,
    Classify,
    Buycar,
    Mine,
    Login,
    Shop,ShopFirst,ShopSecond,ShopThird,
    Details,
    SmallLogin,
    SmallRegister,
    BrandSale,
    BeautyMakeup,
    Handpik,
    Shoe,
    Mandress,
    Womenadress,
    Register,
    ShoeDetail

} from "pages"


export const TabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        icon:"\ue626",
        text:"首页",
        children:[

            {
                path:"/home/jxzc",
                component:Jxzc,
               
                meta:{
                    flag:true,
                }
            },
            {
                path:"/home/jxdp",
                component:Jxdp,
                meta:{
                    flag:true,
                }
            },
        ]
    },
    {
        path:"/classify",
        component:Classify,
        meta:{
            flag:true
        },
        icon:"\ue66c",
        text:"分类",
        children:[

            {
                path:"/classify/womenadress",
                component:Womenadress,
               
                meta:{
                    flag:true,
                }
            },
            {
                path:"/classify/mandress",
                component:Mandress,
                meta:{
                    flag:true,
                }
            },
        ]
    },
    {
        path:"/buycar",
        component:Buycar,
        meta:{
            flag:true
        },
        icon:"\ue600",
        text:"我的购物车"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            requiredAuth:true
        },
        icon:"\ue60b",
        text:"我的"
    }
];

export const NoTabBarRoute = [
     //品牌特卖
    {
        path:"/brandSale",
        component:BrandSale,
        text:"商品特卖",
        meta:{
            flag:true,
            requiredAuth:true
        },
        children:[
            {
                path:"/brandSale/beautyMakeup",
                component:BeautyMakeup,
                meta:{
                    flag:true,
                    
                },
            },
            {
                path:"/brandSale/handpik",
                component:Handpik,
                meta:{
                    flag:true,
                    
                },
            },
            {
                path:"/brandSale/shoe",
                component:Shoe,
                meta:{
                    flag:true,
                    
                },
            }
        ]
    },
    {
        path:"/login",
        component:Login,
        meta:{},
        children:[
            {
                path:"/login/smalllogin",
                component:SmallLogin,
                meta:{
                    flag:true,
                    
                },
            },
            {
                path:"/login/smallregister",
                component:SmallRegister,
                meta:{
                    flag:true,
                    
                },
            }
        ]
    },
    {
        path:"/shop/:brand",
        component:Shop,
        meta:{
            flag:false,
            requiredAuth:false
        },
        children:[
            

            {
                path:"/shop/:brand/first",
                component:ShopFirst,
               
                meta:{
                    flag:true,
                }
            },
            {
                path:"/shop/:brand/second",
                component:ShopSecond,
                meta:{
                    flag:true,
                }
            },
            {
                path:"/shop/:brand/third",
                component:ShopThird,
                meta:{
                    flag:true,
                }
            },
            
        ]
       

    },
    {
        path:"/details/:goods_id",
        component:Details,
        meta:{
            flag:false,
          
        },

    },

];

export const RouteConfig = TabBarRoute.concat(NoTabBarRoute)