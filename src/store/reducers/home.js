import {handleActions} from "redux-actions";
import {homeAsyncType,
    getgoodsAsyncType,
    getgoodsZcAsyncType,
    detailsGoodsAsyncType,
    jpZcAsyncType,
    getMemberAsyncType,
    userLoginAsyncType,
} from "../../action/home/actionTypes"

const defaultState = {
    getIndexNavSkip:[],
    multi_block:[],
    zg_event:[],
    zg_event1:[],
    slide_ads:[],
    zg_banner:[],
    getGoods:[],
    getGoodsZc:[],
    brandInfo:[],
    floor_bar:[],
    floor_data:[],
    brand_goods:[],
    userLogin:"",
    detailsDoods:[],
    skuData_info:[],
    skuData_sku:[],
    goodImages:[]
}


export default handleActions({
    //对象里面的变量如果是一个括号的话必须用一个【】
    [homeAsyncType]:(state,action)=>{
        let homeState = JSON.parse(JSON.stringify(state));
        homeState.getIndexNavSkip = action.payload.data.GoodsRes.goods;
        homeState.multi_block=action.payload.data.adsRes.block[0].multi_block[0].data;
        homeState.zg_event=action.payload.data.adsRes.block[0].multi_block[1].data[0].child;
        homeState.zg_event1=action.payload.data.adsRes.block[0].multi_block[1].data[1].child;
        homeState.zg_banner=action.payload.data.adsRes.block[0].multi_block[2].data[0].child;
        homeState.slide_ads=action.payload.data.adsRes.slide_ads.config.slide;
        return homeState
    },
    [getgoodsAsyncType]:(state,action)=>{
        let getgoodsState = JSON.parse(JSON.stringify(state));
        getgoodsState.getGoods = action.payload.data.data.goods;
     
        return getgoodsState
    },
    [getgoodsZcAsyncType]:(state,action)=>{
        let getgoodsZcState = JSON.parse(JSON.stringify(state));
        getgoodsZcState.getGoodsZc = action.payload.data.data.goods;
        return getgoodsZcState
    },

    [jpZcAsyncType]:(state,action)=>{
        let jpZcListState = JSON.parse(JSON.stringify(state));
        jpZcListState.brandInfo = action.payload.data.brandInfo;
        jpZcListState.floor_bar = action.payload.data.floor_bar;
        jpZcListState.floor_data = action.payload.data.floor_data[0];
        return jpZcListState
    },

    [userLoginAsyncType]:(state,action)=>{
        let userLoginState = JSON.parse(JSON.stringify(state));
        userLoginState.userLogin = action.payload.data.data;
        return userLoginState
    },

    [detailsGoodsAsyncType]:(state,action)=>{
        let detailsDoodsState = JSON.parse(JSON.stringify(state));
        detailsDoodsState.detailsDoods = action.payload.data.baseInfo;
        detailsDoodsState.goodImages = action.payload.data;
        return detailsDoodsState
    },
    [getMemberAsyncType]:(state,action)=>{
        let getMemberState = JSON.parse(JSON.stringify(state));
        getMemberState.skuData_info = action.payload.data.skudata.info;
        getMemberState.skuData_sku = action.payload.data.skudata.sku;
        return getMemberState
    }
},defaultState)


