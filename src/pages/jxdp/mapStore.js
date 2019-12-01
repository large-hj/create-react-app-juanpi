import {getgoodsAsyncAction} from "../../action/home/actionCreate"
export const mapStateToProps = (state)=>({
    getGoods:state.home.getGoods

    // 固定值
  
})


export const mapDispatchToProps = (dispatch)=>({
    handleAsyncHome(page,zy_ids,catname,flag,app_name){
        dispatch(getgoodsAsyncAction(page,zy_ids,catname,flag,app_name))
    }
})