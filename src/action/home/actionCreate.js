import {homeAsyncType,getgoodsAsyncType,getgoodsZcAsyncType,jpZcAsyncType,detailsGoodsAsyncType,getMemberAsyncType,userLoginAsyncType} from "./actionTypes";
import {createAction} from "redux-actions";
import {getIndexNavSkipApi,gegetGoodsApi,gegetGoodsZcApi,jpZcApi,userLoginApi,detailsGoodsApi,getMemberApi} from "api/home"


export const homeAsyncAction = (zy_ids,app_name,catname,page)=>{
    let homeAction = createAction(homeAsyncType,(data)=>({data:data}));
    
    return async (dispatch)=>{
        let data = await getIndexNavSkipApi(zy_ids,app_name,catname,page);
        // localStorage.setItem("getIndexNavSkip",JSON.stringify(data));
        dispatch(homeAction(data))
    }
}
export const getgoodsAsyncAction = (page,zy_ids,catname,flag,app_name)=>{
    let getgooddsAction = createAction(getgoodsAsyncType,(data)=>({data:data}));
    
    return async (dispatch)=>{
        let data = await gegetGoodsApi(page,zy_ids,catname,flag,app_name);
     
        dispatch(getgooddsAction(data))
    }
}
export const getgoodsZcAsyncAction = ()=>{
    let getgooddsZcAction = createAction(getgoodsZcAsyncType,(data)=>({data:data}));
    
    return async (dispatch)=>{
        let data = await gegetGoodsZcApi();
        dispatch(getgooddsZcAction(data))
    }
}
// shopaction
export const jpZcAsyncAction = (page, brand_id)=>{
    let jpZcAction = createAction(jpZcAsyncType,(data)=>({data:data}));
    
    return async (dispatch)=>{
        let data = await jpZcApi(page, brand_id);
    
        dispatch(jpZcAction(data))
    }
}
// 用户登录创建action
export const userLoginAsyncAction = (NameInputVal, PassInputVal)=>{
    let userLoginAction = createAction(userLoginAsyncType,(data)=>({data:data}));
    
    return async (dispatch)=>{
        let data = await userLoginApi(NameInputVal, PassInputVal);
        dispatch(userLoginAction(data))
    }
}
// 详情页商品渲染action
export const detailsGoodsAsyncAction = (goods_id)=>{
    let detailsGoodsAction = createAction(detailsGoodsAsyncType,(data)=>({data:data}));
    
    return async (dispatch)=>{
        let data = await detailsGoodsApi(goods_id);
        dispatch(detailsGoodsAction(data))
    }
}

export const getMemberAsyncAction = (goods_id,sa_id)=>{
    let getMemberAction = createAction(getMemberAsyncType,(data)=>({data:data}));
    
    return async (dispatch)=>{
        let data = await getMemberApi(goods_id,sa_id);
        dispatch(getMemberAction(data))
    }
}

