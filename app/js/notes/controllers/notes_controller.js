'use strict';

module.exports = function(app) {
  app.controller('notesController', ['$scope', 'resource', function($scope, resource) {
    $scope.notes = [];

    var Note = resource('notes');

    $scope.getAll = function() {
      Note.getAll(function(data) {
        $scope.notes = data;
      });
    };

    $scope.createNewNote = function(note) {
      Note.create(note, function(data) {
        console.log(data);
        $scope.notes.push(data);
      });
    };

    $scope.removeNote = function(note) {
      Note.remove(note, function(data) {
        $scope.notes.splice($scope.notes.indexOf(note), 1);
      });
    };

    $scope.saveNote = function(note) {
      Note.save(note, function(data) {
        note.editing = false;
       });
    };

    $scope.editCancel = function(note) {
      if(note.editing) {
        note.noteBody = note.temp;
        note.temp = undefined;
        note.editing = false;
      } else {
        note.temp = note.noteBody;
        note.editing = true;
      }
    };

  }]);
};