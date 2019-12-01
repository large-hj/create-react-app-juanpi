import {homeAsyncType,getgoodsAsyncType} from "./actionTypes";
import {createAction} from "redux-actions";
import {getIndexNavSkipApi,gegetGoodsApi} from "api/home"


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