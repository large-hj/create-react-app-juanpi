import http from "../utils/request"
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