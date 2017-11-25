import * as actionTypes from '../constants/userinfo'
import {Store,getState} from 'redux'

const initialState = {}

export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data
        case actionTypes.CLEAN_USER:
          return action.data
        default:
            return state
    }
}
