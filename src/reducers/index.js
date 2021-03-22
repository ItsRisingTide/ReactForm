import { combineReducers } from "redux";
import formReducer from "../components/formSlice";

export default combineReducers({
  form: formReducer,
});
