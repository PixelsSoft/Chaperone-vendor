import {persistStore, persistReducer} from 'redux-persist';
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import UserTypeReducer from './Slices/UserType';
import UtiltitiesReducer from './Slices/Utiltities';
import authReducer from './Slices/Auth';
import Loader from '../redux/Slices/Loader';
import profile from '../redux/Slices/Profile';
import content from '../redux/Slices/Content';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const appReducer = combineReducers({
  UserType: UserTypeReducer,
  utiltities: UtiltitiesReducer,
  auth: authReducer,
  Loader: Loader,
  profile: profile,
  content: content,
});

const rootReducer = (state, action) => {
  // console.log('action: ', action);
  if (action.type === 'auth/removeAccessToken') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

export const persistor = persistStore(store);
