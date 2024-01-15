import { combineReducers } from "@reduxjs/toolkit";
import { editEventReducer } from "./events/eventsReducer";
// import { taskReducer } from "./task/taskReducer";
// import { editReducer } from "./edit/editReducer";

const appReducer = combineReducers({
  event: editEventReducer,
  // task: taskReducer,
  // edit: editReducer,
});

export type RootState = ReturnType<typeof appReducer>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = (state: RootState | undefined, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
