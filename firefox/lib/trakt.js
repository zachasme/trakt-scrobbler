const { Request } = require("sdk/request")
const { defer }   = require("sdk/core/promise")

const API_KEY = ""
const API_URL = "http://api.trakt.tv/"

const [GET, POST] = [1, 2]

sha1 = require('./vendor/sha1');


function apirequest(path, method, params, segments){
  const { promise, resolve, reject } = defer();
  let params = params || {};
  let segments = segments || [];
  params.username = username;
  params.password = password;

  let url = API_URL + path + '.json/' + API_KEY;
  if (segments.length > 0) {
    url = url + '/' + segments.join('/')
  }

  var request = Request({
    url: url,
    content: params,
    onComplete: function(response){
      if (response.status == 200 && response.json != null){
        resolve(response.json)
      } else {
        let error = {
          status: response.status,
          message: response.json.error,
        }
        console.log(error);
        reject(error);
      }
    },
  });

  if (method == POST) {
    request.post();
  } else {
    request.get();
  }

  return promise;
};

module.exports = {
  account: {
    test: () => apirequest('account/test', POST)
  },
  movie: {
    checkin: title => apirequest('movie/checkin', POST),
    summary: title => apirequest('movie/summary', GET, {}, [title])
  },
  user: {
    profile: username => apirequest('user/profile', GET, {}, [username])
  },
};

let username = '';
let password = '';

module.exports.setCredentials = function(credentials){
  username = credentials.username;
  password = credentials.password;
}