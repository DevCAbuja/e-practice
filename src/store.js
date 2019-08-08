import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/index.reducer';

const persistConfig = {
  key: 'e-practice-facebook-dev-c',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState = {}) {
  const store = createStore(
    persistedReducer,
    initialState,
    applyMiddleware(thunk),
  );
  const persistor = persistStore(store);
  return { store, persistor };
}
