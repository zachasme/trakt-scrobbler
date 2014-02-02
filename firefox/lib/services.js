const { defer }   = require('sdk/core/promise');
const { URL }     = require('sdk/url');
const querystring = require('sdk/querystring');

const freebase = require('./freebase');

exports.getTraktId = function(urlstring){
  let deferred = defer();

  console.log("\n===Checking url", url);

  const url = URL(urlstring);
  switch (url.host) {
    case "movies.netflix.com":
    case "www.netflix.com":
      var params = querystring.parse(url.search.substring(1));
      if (params.hasOwnProperty('movieid')) {
        var movieid = params.movieid;
        console.log(movieid);

        return freebase.doshit(movieid);
      }
  }

  deferred.reject('HAHA');

  return deferred.promise;
}