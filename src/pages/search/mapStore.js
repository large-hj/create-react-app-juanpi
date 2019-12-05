import {searchAsyncAction} from "../../actions/brand/actionCreator"

export const mapStateToProps=(state)=>({

})
export const mapDispatchToProps=(dispatch)=>({
    handleSearchAsync(keyword){
        dispatch(searchAsyncAction(keyword))
    }
})