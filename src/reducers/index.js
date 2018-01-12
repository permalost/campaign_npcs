import { combineReducers } from 'redux';
import NpcListReducer from './reducer_npc_list';

const rootReducer = combineReducers({
  npcs: NpcListReducer
});

export default rootReducer;
