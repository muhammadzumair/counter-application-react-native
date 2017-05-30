import CoinReducer from './CoinReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    coinData: CoinReducer
})