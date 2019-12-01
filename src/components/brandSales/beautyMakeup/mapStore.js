import {beautyListAsyncAction} from "../../../actions/brand/actionCreator"
export const mapStateToProps=(state)=>({
    beautyList:state.brand.beautyList
})
export const mapDispatchToProps=(dispatch)=>({
    handleBeautyListAsync(){
        dispatch(beautyListAsyncAction())
    }
})