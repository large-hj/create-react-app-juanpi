import {detailAsyncAction,idAsyncAction} from "../../actions/brand/actionCreator"

export const mapStateToProps=(state)=>({
    detailList:state.brand.detailList,
    idList:state.brand.idList,
    selectList:state.brand.selectList
})
export const mapDispatchToProps=(dispatch)=>({
    handleDetailAsync(goods_id){
        dispatch(detailAsyncAction(goods_id))
    },
    idDetailAsync(goods_id,sa_id){
        dispatch(idAsyncAction(goods_id,sa_id))
    }
})