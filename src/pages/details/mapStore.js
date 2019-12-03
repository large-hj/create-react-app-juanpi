import {detailAsyncAction} from "../../actions/brand/actionCreator"

export const mapStateToProps=(state)=>({
    detailList:state.brand.detailList
})
export const mapDispatchToProps=(dispatch)=>({
    handleDetailAsync(goods_id){
        dispatch(detailAsyncAction(goods_id))
    }
})