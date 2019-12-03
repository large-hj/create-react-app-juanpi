import {handPikAsyncType,handPikListAsyncType,shoeListAsyncType,beautyListAsyncType,detailAsyncType,idAsyncType} from "./actionsTypes";
import {createAction} from "redux-actions";
import {handPikApi,handPikListApi,shoeListApi,beautyListApi,detailApi,idApi} from "../../api/brand";
//handPikAsyncAction在组件handpik中的mapStore中调用
export const handPikAsyncAction=()=>{
    let handPikAction = createAction(handPikAsyncType,(data)=>({data:data}));
    return async (dispatch)=>{
        let data=await handPikApi()
        dispatch(handPikAction(data))
    }
}
export const handPikListAsyncAction=(page)=>{
    let handPikListAction = createAction(handPikListAsyncType,(data)=>({data:data}));
    return async (dispatch)=>{
        let data=await handPikListApi(page)
        dispatch(handPikListAction(data))
    }
}
export const shoeListAsyncAction=(page)=>{
    let shoeListAction = createAction(shoeListAsyncType,(data)=>({data:data}));
    return async (dispatch)=>{
        let data=await shoeListApi(page)
        dispatch(shoeListAction(data))
    }
}
export const beautyListAsyncAction=(page)=>{
    let beautyListAction=createAction(beautyListAsyncType,(data)=>({data:data}));
    return async (dispatch)=>{
        let data=await beautyListApi(page)
        console.log(data,22)
        dispatch(beautyListAction(data))
    }
}
//详情页detailApi
export const detailAsyncAction=(goods_id)=>{
    let detailAction=createAction(detailAsyncType,(data)=>({data:data}));
    return async (dispatch)=>{
        let data=await detailApi(goods_id)
        dispatch(detailAction(data))
    }
}
export const idAsyncAction=(goods_id,sa_id)=>{
    let idAction=createAction(idAsyncType,(data)=>({data:data}));
    return async (dispatch)=>{
        let data=await idApi(goods_id,sa_id)
        dispatch(idAction(data))
    }
}