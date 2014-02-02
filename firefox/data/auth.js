const fields = {
	username: document.querySelector('.username'),
	password: document.querySelector('.password'),
};

document.querySelector('.signed_out form').addEventListener('submit', function(event){
	self.port.emit('auth', {username: fields.username.value, password: fields.password.value});
	event.preventDefault();
});


self.port.on('user', update);
self.port.on('error', function(error){
	document.querySelector('.error').innerHTML = JSON.stringify(error);
});

function update(user){
  document.body.className = 'signed_in';
  document.querySelector('.avatar').src = user.avatar;
  document.querySelector('.username').innerHTML = user.username;
}


self.port.on('whatevent', function(movie){
  document.getElementById('title').innerHTML = movie.title;
  document.getElementById('poster').src = movie.images.poster;
});