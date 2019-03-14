import { actionType } from './type'

const initialState = {
    datas: [],
    items: {}
}
 
const signUpReducer = (state = initialState, action) =>{
    switch(action.type){
        case actionType.FETCH_DATA :
            return {...state, datas: action.payload}

        case actionType.POST_DATA :
         console.log('postData')
            return {...state, items : action.payload}
        
        default:
        return state;
    }
}

export default signUpReducer;