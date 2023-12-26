/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyAction } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import rootReducer, { RootState } from "./rootReducer";
import localStorageMiddleware from "./localStorageMiddleware";

const storedState = localStorage.getItem("adventCalendar");
const initialState: RootState | undefined = storedState
  ? JSON.parse(storedState)
  : undefined;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
  preloadedState: initialState,
});

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  AnyAction
>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();

export default store;
