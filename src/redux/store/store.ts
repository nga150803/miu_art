import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import productsReducer from '../reducers/products.reducer'
import { BillReducer } from '../reducers/bill'

const rootReducer = combineReducers({
  product: productsReducer, // Sử dụng tên reducer đã đặt cho sản phẩm
  bill: BillReducer
})

export type RootState = ReturnType<typeof rootReducer>

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }).concat()
})

export const persistor = persistStore(store)

export default store
