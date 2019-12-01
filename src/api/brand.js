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
export const handPikListApi = ()=>http.get({
    url:"/ajax/api/getBrandClearanceGoods",
    data:{
        cid:"ppqc_jingxuan",
        zhouyi_ids:"p8_c4_l4",
        page:1
    }
})
//http://webservice.juanpi.com/api/getBrandClearanceOtherGoods?cate_key=xiezi&page=1&pf=m&brandclear=brandclear_127_419_A
export const shoeListApi = ()=>http.get({
    url:"/ajax/api/getBrandClearanceOtherGoods",
    data:{
        cate_key:"xiezi",
        page:1,
        pf:"m",
        brandclear:"brandclear_127_419_A"
    }
})
//http://webservice.juanpi.com/api/getBrandClearanceOtherGoods?cate_key=meizhuang&page=1&pf=m&brandclear=brandclear_127_419_A
export const beautyListApi=()=>http.get({
    url:"/ajax/api/getBrandClearanceOtherGoods",
    data:{
        cate_key:"meizhuang",
        page:1,
        pf:"m",
        brandclear:"brandclear_127_419_A"
    }
})





