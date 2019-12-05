import http from "../utils/request"
import axios from "axios";
// getIndexNavSkip
export const getIndexNavSkipApi = (zy_ids,app_name,catname,page)=>http.get({
    url:"/ajax/api/getIndexNavSkip",
    data:{
        page: page,
        zy_ids: zy_ids,
        app_name: app_name,
        catname: catname,
    }
})

// 精选单品接口
// https://webservice.juanpi.com/api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpdp&flag=tab_hpdp

export const gegetGoodsApi = (page,zy_ids,catname,flag,app_name)=>http.get({
    url:"/ajax/api/getGoods",
    data:{
        page:1,
        zy_ids:"p8_c4_l4",
        app_name:"zhe",
        catname:"tab_hpdp",
        flag:"tab_hpdp",
    }
})

// 精选单场https://webservice.juanpi.com/api/getGoods?page=1&zy_ids=p8_c4_l4&app_name=zhe&catname=tab_hpzc&flag=tab_hpzc

export const gegetGoodsZcApi = (page,zy_ids,catname,flag,app_name)=>http.get({
    url:"/ajax/api/getGoods",
    data:{
        page:1,
        zy_ids:"p8_c4_l4",
        app_name:"zhe",
        catname:"tab_hpzc",
        flag:"tab_hpzc",
    }
})

// shop专场接口
// https://webservice.juanpi.com/api/getBrandGoods?page=1&brand_id=1629495_5614944&msort=1&goods_utype=C4&price_range=&cat_threeids=
export const jpZcApi = (page, brand_id)=>http.get({
    url:"/ajax/api/getBrandGoods",
    data:{
        page: page,
        brand_id: brand_id,
        msort: 1,
        goods_utype: "C4",
        price_range: '',
        cat_threeids:'',



    }
})

// 用户登录接口
export const userLoginApi = (name, password)=>http.post({
    url:"/api/users.js/login",
    data:{
        username: name,
        password: password,
    }
})

// 详情页商品渲染接口
// http://webservice.juanpi.com/api/getDetailFirst?goods_id=142326652

export const detailsGoodsApi=(Goods_id)=>http.get({
    url:"/ajax/api/getDetailFirst",
    data:{
        goods_id:Goods_id ,
     
    }
})
// http://webservice.juanpi.com/api/getMemberAboutInfo?goods_id=187428250&sa_id=24164955&is_pt_goods=0&req_coupons_id=187428250
export const getMemberApi=(goods_id,sa_id)=>http.get({
    url:"/ajax/api/getMemberAboutInfo",
    data:{
        goods_id: goods_id,
        sa_id: sa_id,
        is_pt_goods: 0,
        req_coupons_id: goods_id,
     
    }
})

export const HotMovieApi=()=>axios({
    method:"get",
    url:"/api/getGoods",
    params:{
        page:1,
        zy_ids: "p8_c4_l4",
        app_name: "zhe",
        catname: "tab_hpzc",
        flag: "tab_hpzc",
    }
})
