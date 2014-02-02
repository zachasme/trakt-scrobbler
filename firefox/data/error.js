self.port.on('error', function(object){
  document.querySelector('.error').innerHTML = JSON.stringify(object);
});