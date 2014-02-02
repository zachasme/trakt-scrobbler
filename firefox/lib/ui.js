const { data }   = require("sdk/self");
const { Panel }  = require("sdk/panel");
const { Widget } = require("sdk/widget");

var panel = Panel({
  width:300,
  height:160,
  position: {right:10,top:10},
  contentURL: data.url("auth.html"),
  contentScriptFile: data.url("auth.js"),
});

w = Widget({
  id: "mozilla-icon",
  label: "My Mozilla Widget",
  contentURL: "http://www.mozilla.org/favicon.ico",
  panel: panel,
});







exports.notify = function(movie){
  panel.port.emit("whatevent", movie);
  console.log(movie);
  if (!panel.isShowing)
    panel.show();
};

exports.error = function(object){
  panel.port.emit('error', object);
  if (!panel.isShowing)
    panel.show();
}




exports.update=function(user){
  panel.port.emit('user', user);
}


var { emit, on, once, off } = require("sdk/event/core");

panel.port.on('auth', function(cred){
  emit(exports, 'auth', cred);
});

exports.on = on.bind(null, exports);