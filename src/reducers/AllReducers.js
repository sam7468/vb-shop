import cartReducer from './CartReducer'
import BotdataReducer from './BotdataReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    cartreducer : cartReducer,
    botdatareducer : BotdataReducer
})

export default allReducers