import {handleActions} from "redux-actions"
import {handPikAsyncType,handPikListAsyncType,shoeListAsyncType,beautyListAsyncType,detailAsyncType,idAsyncType} from "../../actions/brand/actionsTypes"

const defaultState={
    brandarr:[],
    brandList:[],
    shoeList:[],
    beautyList:[],
    detailList:[],
    idList:[],
    selectList:[]
    
}

export default handleActions({
    [handPikAsyncType]:(state,action)=>{
        let handPikState=JSON.parse(JSON.stringify(state));
        handPikState.brandarr=action.payload.data.limitInfo.data[0].goods;
        return handPikState
    },
    [handPikListAsyncType]:(state,action)=>{
        let handPikListState=JSON.parse(JSON.stringify(state));
        // handPikListState.brandList=action.payload.data.data.goods;
        handPikListState.brandList=[...handPikListState.brandList,...action.payload.data.data.goods];
        return handPikListState
    },
    [shoeListAsyncType]:(state,action)=>{
        let shoeListState=JSON.parse(JSON.stringify(state));
        // shoeListState.shoeList=action.payload.data.data.goods;
        //上拉加载的时候，加载出来的内容会放在一个数组中
        shoeListState.shoeList=[...shoeListState.shoeList,...action.payload.data.data.goods];
        return shoeListState
    },
    [beautyListAsyncType]:(state,action)=>{
        let beautyListState=JSON.parse(JSON.stringify(state));
        beautyListState.beautyList=action.payload.data.data.goods;
        return beautyListState;
    },
    [detailAsyncType]:(state,action)=>{
        let detailState=JSON.parse(JSON.stringify(state));
        detailState.detailList=action.payload.data.baseInfo;
        return detailState;
    },
    [idAsyncType]:(state,action)=>{
        let idState=JSON.parse(JSON.stringify(state));
        //是对象的时候不用map，直接点属性就行
        
   
        idState.idList=action.payload.data.skudata.info;
        idState.selectList=action.payload.data.skudata.sku;
        return idState;
    }
},defaultState)
