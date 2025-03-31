import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "@/store/slices/counterSlice";
import filterReducer from "@/store/slices/filterSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;