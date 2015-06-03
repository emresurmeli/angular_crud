'use strict';

require('angular/angular');

var notesApp = angular.module('notesApp', []);

//services
require('./services/resources_services')(notesApp);

// controllers
require('./notes/controllers/notes_controller')(notesApp);