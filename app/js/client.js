'use strict';

require('angular/angular');

var notesApp = angular.module('notesApp', []); // jshint ignore:line

//services
require('./services/resources_services')(notesApp);

//controllers
require('./notes/controllers/notes_controller')(notesApp);