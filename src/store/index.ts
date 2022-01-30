import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, REGISTER, PURGE} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

// reducers
import user from './user';
// import remoteConfigs from './remoteConfigs';

const persistConfigs = {
    key: 'root',
    storage: AsyncStorage
}

const rootReducer = combineReducers({
    user,
    // remoteConfigs
})
  
const reducer = persistReducer(persistConfigs, rootReducer);

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
    devTools: process.env.NODE_ENV !== 'production'
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();