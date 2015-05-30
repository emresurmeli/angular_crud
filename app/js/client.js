'use strict';

var greet = require('./greet');
document.write(greet());
var notes = require('./notes');
document.write(notes());
var noteList = document.getElementById('notelist');

var request = require('superagent');

request
	.get('/api/notes')
	.end(function(err, res) {
		if(err) return console.log(err);
		var notes = JSON.parse(res.text);

		notes.forEach(function(note) {
			var noteEl = document.createElement('li');
			noteEl.innerHTML = note.noteBody;
			noteList.appendChild(noteEl);
	});
});