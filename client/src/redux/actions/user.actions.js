import userActionTypes from '../type/users.type'

export const removeCurrentUser = () => (

    {
        type: userActionTypes.REMOVE_CURRENT_USER,
        payload:null
    }
)
export const addCurrentUser = (user) => (
    {
        type: userActionTypes.ADD_CURRENT_USER,
        payload:user
    }
)