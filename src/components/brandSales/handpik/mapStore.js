import {handPikAsyncAction,handPikListAsyncAction} from "../../../actions/brand/actionCreator";
export const mapStateToProps = (state)=>({
    brandarr:state.brand.brandarr,
    brandList:state.brand.brandList
})


export const mapDispatchToProps = (dispatch)=>({
    //handlehandPikAsync在组件中调用
    handlehandPikAsync(){
    //    console.log(111)
    //dispatch发送action
        dispatch(handPikAsyncAction())
    },
    //list
    handlehandPikListAsync(){
        dispatch(handPikListAsyncAction())
    }
})