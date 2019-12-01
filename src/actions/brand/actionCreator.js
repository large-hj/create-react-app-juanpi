import {handPikAsyncType,handPikListAsyncType,shoeListAsyncType,beautyListAsyncType} from "./actionsTypes";
import {createAction} from "redux-actions";
import {handPikApi,handPikListApi,shoeListApi,beautyListApi} from "../../api/brand";
//handPikAsyncAction在组件handpik中的mapStore中调用
export const handPikAsyncAction=()=>{
    let handPikAction = createAction(handPikAsyncType,(data)=>({data:data}));
    return async (dispatch)=>{
        let data=await handPikApi()
        dispatch(handPikAction(data))
    }
}
export const handPikListAsyncAction=()=>{
    let handPikListAction = createAction(handPikListAsyncType,(data)=>({data:data}));
    return async (dispatch)=>{
        let data=await handPikListApi()
        dispatch(handPikListAction(data))
    }
}
export const shoeListAsyncAction=()=>{
    let shoeListAction = createAction(shoeListAsyncType,(data)=>({data:data}));
    return async (dispatch)=>{
        let data=await shoeListApi()
        dispatch(shoeListAction(data))
    }
}
export const beautyListAsyncAction=()=>{
    let beautyListAction=createAction(beautyListAsyncType,(data)=>({data:data}));
    return async (dispatch)=>{
        let data=await beautyListApi()
        console.log(data,22)
        dispatch(beautyListAction(data))
    }
}