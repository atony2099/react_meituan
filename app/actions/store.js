import * as actionTypes from '../constants/Store'
// add colltions
export function addCollection(data) {
    return {
        type: actionTypes.COLLECTION_ADD,
        data
    }
}

// remoe one clollection
export function removeColletciton(data){
  return {
    type:actionTypes.COLLECTION_REMOVE,
    data
  }
}
