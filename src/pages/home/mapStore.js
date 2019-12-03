import {homeAsyncAction} from "../../action/home/actionCreate"
export const mapStateToProps = (state)=>({
    getIndexNavSkip:state.home.getIndexNavSkip,
    multi_block:state.home.multi_block,
    zg_event:state.home.zg_event,
    zg_event1:state.home.zg_event1,
    zg_banner:state.home.zg_banner,
    slide_ads:state.home.slide_ads,

    // 固定值
    zy_ids: state.user.zy_ids,
    app_name: state.user.app_name,
    catname: state.user.catname,

})


export const mapDispatchToProps = (dispatch)=>({
    handleAsyncHome(zy_ids,app_name,catname,page){
        dispatch(homeAsyncAction(zy_ids,app_name,catname,page))
    }
})