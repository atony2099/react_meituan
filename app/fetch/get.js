import 'whatwg-fetch'
import 'es6-promise'

function obj2params(obj) {
    var result = '';
    var item;
    for (item in obj) {
        result += '&' + item + '=' + encodeURIComponent(obj[item]);
    }
    if (result) {
      console.log(result,"old");
        result = result.slice(1);
        console.log(result,"new");
    }
    return result;
}


var myInit = {
  method:'GET',
  headers: {
      'Accept': 'application/json, text/plain, */*'
  }
}

export function get(url) {
  console.log("currentURLIS", url);
  var result = fetch(url, myInit);
  return result;
}

export function getWithParms(url,parms) {
  myInit.body = obj2params(parms);
  var result = fetch(url, myInit);
  return result;
}
