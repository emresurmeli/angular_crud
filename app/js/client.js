'use strict';

require('angular/angular');

var notesApp = angular.module('notesApp', []);

require('./notes/controllers/notes_controller')(notesApp);