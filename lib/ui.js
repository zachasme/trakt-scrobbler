const { data }   = require("sdk/self");
const { Panel }  = require("sdk/panel");
const { Widget } = require("sdk/widget");

var panel = Panel({
  width:215,
  height:160,
  position: {right:10,top:10},
  contentURL: data.url("panel.html"),
  contentScriptFile: data.url("panel.js"),
});

w = Widget({
  id: "mozilla-icon",
  label: "My Mozilla Widget",
  contentURL: "http://www.mozilla.org/favicon.ico",
  panel: panel,
});







exports.notify = function(a){
panel.port.emit("whatevent", a);

  panel.show();
};