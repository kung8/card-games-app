import {createStore} from 'redux'
import reducer from './reducers/cardReducer'
export const store = createStore(reducer)