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

export const open_add_user_form = (payload) => {
    return {
        type: USER.OPENADDUSERFORM,
        payload: payload
    }
}