self.port.on('whatevent', function(movie){
  document.getElementById('title').innerHTML = movie.title;
  document.getElementById('poster').src = movie.images.poster;
});