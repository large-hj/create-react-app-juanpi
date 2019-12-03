import {jpZcAsyncAction} from "../../action/home/actionCreate"
export const mapStateToProps = (state)=>({
    brandInfo:state.home.brandInfo,
    floor_bar:state.home.floor_bar,
    floor_data:state.home.floor_data,
    // brand_goods:state.home.goods,
    

    // 固定值
  
})


export const mapDispatchToProps = (dispatch)=>({
    handleAsyncHome(page,brand_id){
        dispatch(jpZcAsyncAction(page, brand_id))
    }
})