import { combineReducers } from "redux";
import userReducer from "./reducers/users.reducer";

const rootReducer=combineReducers({
    currentUser:userReducer
})

export default rootReducer;