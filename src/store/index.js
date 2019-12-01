import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import home from "./reducers/home";
import user from "./reducers/user"
import brand from "./reducers/brand";
const reducers = combineReducers({
    home,
    user,
    brand
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))


export default store;