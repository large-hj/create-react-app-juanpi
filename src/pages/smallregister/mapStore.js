
import {registerAsyncAction} from "../../actions/brand/actionCreator"
export const mapStateToProps=(state)=>({

})
export const mapDispatchToProps=(dispatch)=>({
    handleRegisterAsync(username,password){
        dispatch(registerAsyncAction(username,password))
    }
})