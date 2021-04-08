import { combineReducers } from "redux";

import courseReducer from "./course/courseReducer";
import memberReducer from "./member/memberReducer";
import migrationReducer from "./migration/migrationReducer";
import authorReducer from "./author/authorReducer";
import stageReducer from "./stage/stageReducer";

const rootReducer = combineReducers({
  courses: courseReducer,
  members: memberReducer,
  migrations: migrationReducer,
  authors: authorReducer,
  stages: stageReducer,
});

export default rootReducer;
