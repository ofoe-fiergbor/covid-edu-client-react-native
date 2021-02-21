import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./authReducer";
import postReducer from "./postReducer";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from 'redux-thunk'

const reducer = combineReducers({
  auth: authReducer,
  post: postReducer
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

let persistor = persistStore(store);

export { store, persistor };
