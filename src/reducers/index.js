import changeNumber from "./reducer";
import {changeCartNumber}  from "./reducer";
import { combineReducers } from "redux";
const rootReducers=combineReducers({
    changeNumber,
    changeCartNumber
})
export default rootReducers;