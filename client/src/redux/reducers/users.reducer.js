import userActionTypes from '../type/users.type'

const INITIAL_USER=null;

const userReducer=(state=INITIAL_USER,action)=>{
    switch(action.type){
        case userActionTypes.ADD_CURRENT_USER:
            return  action.payload
        case userActionTypes.REMOVE_CURRENT_USER:
            return action.payload     
        default:
             return state;
    }
}

export default userReducer;