import * as actionTypes from '../constants/store'
import {Store,getState} from 'redux'

const initialState = [];
export default function colletions(state = initialState, action) {
    switch (action.type) {
        case actionTypes.COLLECTION_ADD:
            state.unshift(action.data)
            return state;
        case actionTypes.COLLECTION_REMOVE:
            return state.filter((ele,index)=> action.data != ele)


        default:
            return state
    }
}
