import {shoeListAsyncAction} from "../../../actions/brand/actionCreator";
export const mapStateToProps=(state)=>({
    shoeList:state.brand.shoeList
})

export const mapDispatchToProps=(dispatch)=>({
    handleshoeListAsync(page){
        dispatch(shoeListAsyncAction(page))
    }
})