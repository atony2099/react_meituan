import 'whatwg-fetch'
import 'es6-promise'


var myInit = {
  method:'GET',
  headers: {
      'Accept': 'application/json, text/plain, */*'
  }


}

export function get(url) {
  var result = fetch(url, myInit);
  return result;
}
