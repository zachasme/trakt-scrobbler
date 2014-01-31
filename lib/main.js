
const tabs        = require('sdk/tabs');



const services = require('./services');
const ui       = require('./ui');


tabs.on('ready', function (tab) {

  services.getTraktId(tab.url)
   // .then(trakt.scrobble)
    .then(ui.notify)
    .then(null, function(err){
    	ui.notify('err'+err);
    });

});