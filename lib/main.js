const querystring = require('sdk/querystring');
const tabs        = require('sdk/tabs');
const { URL }     = require('sdk/url');

const freebase = require('./freebase');

tabs.on('ready', function (tab) {

  var url = URL(tab.url);
  var params = querystring.parse(url.search.substring(1));
  var movieid = params.movieid;
  console.log(movieid);

  freebase.doshit(movieid);

});