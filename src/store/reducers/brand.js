import {handleActions} from "redux-actions"
import {handPikAsyncType,handPikListAsyncType,shoeListAsyncType,beautyListAsyncType} from "../../actions/brand/actionsTypes"

const defaultState={
    brandarr:[],
    brandList:[],
    shoeList:[],
    beautyList:[]
}

export default handleActions({
    [handPikAsyncType]:(state,action)=>{
        let handPikState=JSON.parse(JSON.stringify(state));
        handPikState.brandarr=action.payload.data.limitInfo.data[0].goods;
        return handPikState
    },
    [handPikListAsyncType]:(state,action)=>{
        let handPikListState=JSON.parse(JSON.stringify(state));
        handPikListState.brandList=action.payload.data.data.goods;
        return handPikListState
    },
    [shoeListAsyncType]:(state,action)=>{
        let shoeListState=JSON.parse(JSON.stringify(state));
        shoeListState.shoeList=action.payload.data.data.goods;
        return shoeListState
    },
    [beautyListAsyncType]:(state,action)=>{
        let beautyListState=JSON.parse(JSON.stringify(state));
        beautyListState.beautyList=action.payload.data.data.goods;
        return beautyListState;
    }
},defaultState)
