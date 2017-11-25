import * as actionTypes from '../constants/userinfo'

export function update(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}

// clear the userName
export function clearUserName(data){
  return {
    type:actionTypes.CLEAN_USER,
    data
  }
}
