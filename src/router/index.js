import {
    Home,Jxzc,Jxdp,
    Classify,
    Buycar,
    Mine,
    Login,
    Shop,ShopFirst,ShopSecond,ShopThird,
    Details,

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
        text:"分类"
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
    {
        path:"/login",
        component:Login,
        meta:{}
    },
    {
        path:"/shop",
        component:Shop,
        meta:{
            flag:false,
            requiredAuth:false
        },
        children:[
            

            {
                path:"/shop/first",
                component:ShopFirst,
               
                meta:{
                    flag:true,
                }
            },
            {
                path:"/shop/second",
                component:ShopSecond,
                meta:{
                    flag:true,
                }
            },
            {
                path:"/shop/third",
                component:ShopThird,
                meta:{
                    flag:true,
                }
            },
            
        ]
       

    },
    {
        path:"/details",
        component:Details,
        meta:{
            flag:false,
          
        },

    },

];

export const RouteConfig = TabBarRoute.concat(NoTabBarRoute)