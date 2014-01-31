self.port.on('whatevent', function(val){
  document.getElementById('title').innerHTML = val;
});