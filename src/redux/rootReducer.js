import {combineReducers} from 'redux'
import jobReducer from './jobs-reducer/job.reducer'
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['allJobs']
}

const rootReducer = combineReducers({
    jobs : jobReducer
})
export default persistReducer(persistConfig, rootReducer)