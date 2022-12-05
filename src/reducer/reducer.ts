import { combineReducers } from "redux";
import { sportReducer } from "../features/sports/sportsSlice";
import { workReducer } from "../features/works/workSlice";

const rootReducer = combineReducers({
    works: workReducer,
    sports: sportReducer
});

export default rootReducer;
