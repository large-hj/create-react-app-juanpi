import http from "utils/request";
//api/getBrandClearanceLimitAndAds?cid=ppqc_jingxuan&zy_ids=c4_l4&app_name=zhe&catname=
export const handPikApi = ()=>http.get({
    url:"/ajax/api/getBrandClearanceLimitAndAds",
    data:{
        cid: "ppqc_jingxuan",
        zy_ids: "c4_l4",
        app_name: "zhe",
    }
})
//http://webservice.juanpi.com/api/getBrandClearanceGoods?cid=ppqc_jingxuan&zhouyi_ids=p8_c4_l4&page=1
export const handPikListApi = (page)=>http.get({
    url:"/ajax/api/getBrandClearanceGoods",
    data:{
        cid:"ppqc_jingxuan",
        zhouyi_ids:"p8_c4_l4",
        page:page
    }
})
//详情http://webservice.juanpi.com/api/getMemberAboutInfo?goods_id=142326652&sa_id=24159743&is_pt_goods=0&req_coupons_id=142326652
//http://webservice.juanpi.com/api/getBrandClearanceOtherGoods?cate_key=xiezi&page=1&pf=m&brandclear=brandclear_127_419_A
export const shoeListApi = (page)=>http.get({
    url:"/ajax/api/getBrandClearanceOtherGoods",
    data:{
        cate_key:"xiezi",
        page:page,
        pf:"m",
        brandclear:"brandclear_127_419_A"
    }
})
//http://webservice.juanpi.com/api/getBrandClearanceOtherGoods?cate_key=meizhuang&page=1&pf=m&brandclear=brandclear_127_419_A
export const beautyListApi=(page)=>http.get({
    url:"/ajax/api/getBrandClearanceOtherGoods",
    data:{
        cate_key:"meizhuang",
        page:1,
        pf:"m",
        brandclear:"brandclear_127_419_A"
    }
})
//http://webservice.juanpi.com/api/getDetailFirst?goods_id=187428250

export const detailApi=(goods_id)=>http.get({
    url:"/ajax/api/getDetailFirst",
    data:{
        goods_id:goods_id
    }
})
//http://webservice.juanpi.com/api/getMemberAboutInfo?goods_id=189121056&sa_id=24136868&is_pt_goods=0&req_coupons_id=189121056

export const idApi=(goods_id,sa_id)=>http.get({
    url:"/ajax/api/getMemberAboutInfo",
    data:{
        goods_id:goods_id,
        sa_id:sa_id,
        is_pt_goods:0,
        req_coupons_id:goods_id
    }
})
