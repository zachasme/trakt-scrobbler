// remove this
require("sdk/preferences/service").set("javascript.options.strict", false);



const tabs      = require('sdk/tabs');


const services = require('./services');
const trakt    = require('./trakt');
const ui       = require('./ui');





// sign in procedure
ui.on('auth', function(credentials){
  console.log('UI signing in', credentials);

  trakt.setCredentials(credentials);
  var testprom = trakt.account.test()
    .then(function(){
    	

    	return trakt.user.profile(credentials.username)
    })
    testprom.then(ui.notify, ui.error);
    testprom.then(function(user){

    	ui.update(user);
    });

});


// procedure when detecting scrobblable content
tabs.on('ready', function (tab) {

  services.getTraktId(tab.url)
   // .then(trakt.scrobble)
    .then(trakt.movie.summary)
    .then(ui.notify, ui.error);

});

//model.setUser(user);