import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { reducerFns } from "./counterSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { defaultLocale } from "yup";

const persistConfig = {
  key: "root-persist",
  storage,
};
const reducer = combineReducers({ reducerFns: reducerFns });
const PersistReducer = persistReducer(persistConfig, reducer);

const Store = configureStore({
  reducer: PersistReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const persistor = persistStore(Store);
export default Store;
export { persistor };
