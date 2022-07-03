import {ADD_REMINDER, CLEAR_REMINDER, REMOVE_REMINDER} from '../types' 
import { bake_cookie, read_cookie } from 'sfcookies'
const reminders = (state=[], action) => {
    let reminder = null

    state = read_cookie('reminderCookie')    

    if(action.type === ADD_REMINDER) {
        reminder = [...state, {text:action.text, date: action.date, id:Math.random()}];
        bake_cookie('reminderCookie', reminder)
        console.log('reducer',reminder)
        return reminder
    } else if(action.type === REMOVE_REMINDER){
        reminder = state.filter( reminder => reminder.id !== action.id )
        bake_cookie('reminderCookie', reminder)
        console.log('reducer',reminder)
        return reminder
    } else if(action.type === CLEAR_REMINDER){
        reminder = []
        bake_cookie('reminderCookie', reminder)
        console.log('reducer',reminder)
        return reminder
    } else {
        return state
    }

}
export default reminders