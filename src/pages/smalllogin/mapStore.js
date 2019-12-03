import {userLoginAsyncAction} from "../../action/home/actionCreate"
export const mapStateToProps = (state)=>({
    userLogin:state.home.userLogin,
  
    

    // 固定值
  
})

export const mapDispatchToProps = (dispatch)=>({
    handleAsyncHome(NameInputVal, PassInputVal){
        dispatch(userLoginAsyncAction(NameInputVal, PassInputVal))
    }
})