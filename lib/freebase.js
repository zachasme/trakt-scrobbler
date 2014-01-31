const { Request } = require("sdk/request");
const { defer }   = require('sdk/core/promise');

const API_KEY     = ""
const SERVICE_URL = "https://www.googleapis.com/freebase/v1/mqlread"

exports.doshit = function(movieid){
  var deferred = defer();

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
      console.log("\n\n\n");
      console.log(response.json);
      const val = response.json.result[0].key.value;
      console.log(val);
      console.log("\n\n\n");

      deferred.resolve(val);
    },
  });

  request.get();

  return deferred.promise;
};