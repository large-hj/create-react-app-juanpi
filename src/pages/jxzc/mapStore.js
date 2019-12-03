import {getgoodsZcAsyncAction} from "../../action/home/actionCreate"
export const mapStateToProps = (state)=>({
    getGoodsZc:state.home.getGoodsZc

    // 固定值
  
})


export const mapDispatchToProps = (dispatch)=>({
    handleAsyncHome(){
        dispatch(getgoodsZcAsyncAction())
    }
})