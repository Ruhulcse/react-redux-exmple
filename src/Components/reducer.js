import initialState from '../state';
import {USER} from './actionTypes';
import produce from 'immer';

console.log(initialState);

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case USER.ADD: {
            const nextState = produce(state,draft=>{
                draft.users.push(action.payload);
            })
            return nextState;
        }
        case USER.GETALL: {
            const nextState = produce(state, draft => {
                draft.users = action.payload;
                draft.usersLoading = false;
            })
            return nextState;
        }
        case USER.DELETE: {
            const nextState = produce(state, draft => {
                for(let i=0; i<draft.users.length; i++){
                    if(draft.users[i].id == action.payload){
                        draft.users.splice(i, 1);
                    }
                }
            })

            return nextState;
        }
        case USER.OPENADDUSERFORM: {
            const nextState = produce(state, draft => {
                draft.toogleAddUserFormStatus = action.payload;
            })

            return nextState;
        }
        default : 
            return state;
    }
}

export default userReducer;

