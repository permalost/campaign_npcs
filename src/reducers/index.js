import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";

import NpcListReducer from "./reducer_npc_list";

const rootReducer = combineReducers({
  npcs: NpcListReducer,
  form: FormReducer
});

export default rootReducer;
