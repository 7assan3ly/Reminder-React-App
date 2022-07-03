import {ADD_REMINDER, CLEAR_REMINDER, REMOVE_REMINDER} from '../types'

export const addRemnider = (text, date) => {
    const action = {
        type : ADD_REMINDER,
        text,
        date
    }
    console.log('add',action)
    return action
}
export const removeRemnider = (id) => {
    const action = {
        type : REMOVE_REMINDER,
        id
    }
    console.log('remove',action)
    return action
}
export const clearRemnider = () => {
    const action = {
        type : CLEAR_REMINDER
    }
    console.log('clear',action)
    return action
}