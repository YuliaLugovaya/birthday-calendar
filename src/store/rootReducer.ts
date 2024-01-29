import { combineReducers } from "@reduxjs/toolkit";
import { editEventReducer } from "./events/eventsReducer";

const appReducer = combineReducers({
  event: editEventReducer,
});

export type RootState = ReturnType<typeof appReducer>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = (state: RootState | undefined, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;
