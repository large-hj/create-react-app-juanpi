import {detailsGoodsAsyncAction,getMemberAsyncAction} from "../../action/home/actionCreate"
export const mapStateToProps = (state)=>({
    detailsDoods:state.home.detailsDoods,
    skuData_info:state.home.skuData_info,
    skuData_sku:state.home.skuData_sku,
    goodIma:state.home.goodImages,

    // 固定值
  
})


export const mapDispatchToProps = (dispatch)=>({
    handleAsyncHome(goods_id){
        dispatch(detailsGoodsAsyncAction(goods_id))
    },
    getMemberAsyncData(goods_id,sa_id){
        dispatch(getMemberAsyncAction(goods_id,sa_id))
    }
})