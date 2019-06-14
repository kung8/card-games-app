import {combineReducers,createStore} from 'redux'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cardsReducer from './reducers/cardsReducer'
import usersReducer from './reducers/usersReducer'
const reducer = combineReducers({cardsReducer,usersReducer})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,reducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)