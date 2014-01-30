const { Request } = require("sdk/request");

const API_KEY     = ""
const SERVICE_URL = "https://www.googleapis.com/freebase/v1/mqlread"

exports.doshit = function(movieid){

var query = [{
  "lol:key": {
    "namespace": "/authority/netflix/movie",
    "value": "" + movieid
  },
  "key": {
    "namespace": "/authority/imdb/title",
    "value": null
  }
}]
var params = {
  //'key': API_KEY,
  'query': JSON.stringify(query),
}

var request = Request({
  url: SERVICE_URL,
  content: params,
  onComplete: function (response) {
    console.log(response.json);
  },
});
request.get();

};