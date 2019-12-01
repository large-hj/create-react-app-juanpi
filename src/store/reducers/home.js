import {handleActions} from "redux-actions";
import {homeAsyncType,getgoodsAsyncType} from "../../action/home/actionTypes"

const defaultState = {
    getIndexNavSkip:[],
    multi_block:[],
    zg_event:[],
    zg_event1:[],
    zg_banner:[],

    getGoods:[],
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
        return homeState
    },
    [getgoodsAsyncType]:(state,action)=>{
        let getgoodsState = JSON.parse(JSON.stringify(state));
        getgoodsState.getGoods = action.payload.data.data.goods;
     
        return getgoodsState
    }
},defaultState)


