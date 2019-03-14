import { combineReducers } from 'redux'
import postReducer from './demo/postReducer';
import signUpReducer from './signup/signupReducer';


export const rootReducer = combineReducers ({
    demo: postReducer,
    signup: signUpReducer
})