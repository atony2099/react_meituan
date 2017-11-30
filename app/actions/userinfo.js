import * as actionTypes from '../constants/userinfo'

export function update(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}


export function updateCity(data){
  return {
    type:actionTypes.USER_CITY_UPDATE,
    data
  }
}

// clear the userName
export function clearUserName(){
  return {
    type:actionTypes.CLEAN_USER
  }
}
