import {USER} from './actionTypes';

export const get_all_user = (payload) => {
    return {
        type: USER.GETALL,
        payload: payload
    }
}

export const delete_user = (payload) => {
    return {
        type: USER.DELETE,
        payload: payload
    }
}

export const add_user = (payload) => {
    return {
        type: USER.ADD,
        payload: payload
    }
}

export const update_user = (payload) =>{
    return {
        type: USER.UPDATE,
        payload: payload
    }
}

export const get_single_user =(payload)=>{
    return {
        type: USER.GETSINGLEUSER,
        payload: payload
    }
}

export const open_add_user_form = (payload) => {
    return {
        type: USER.OPENADDUSERFORM,
        payload: payload
    }
}

export const change_form_operation = (payload) =>{
    return {
        type: USER.FORMOPERATION,
        payload: payload
    }
}