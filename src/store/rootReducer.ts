import { combineReducers } from "@reduxjs/toolkit";
// import { ballReducer } from "./ball/ballReducer";
// import { taskReducer } from "./task/taskReducer";
// import { editReducer } from "./edit/editReducer";

const appReducer = combineReducers({
  // ball: ballReducer,
  // task: taskReducer,
  // edit: editReducer,
});

export type RootState = ReturnType<typeof appReducer>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = (state: RootState | undefined, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
