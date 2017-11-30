import * as actionTypes from '../constants/userinfo'
import {Store,getState} from 'redux'

const initialState = {};
export default function userinfo (state = initialState, action) {
    switch (action.type) {
        case actionTypes.USERINFO_UPDATE:
          state.userName = action.data;
          console.log("currretState",state);
          return state;
        case actionTypes.USER_CITY_UPDATE:
          state.cityName = action.data;
          return state;
        case actionTypes.CLEAN_USER:
          state.userName = ''
          return state
        default:
            return state
    }
}
