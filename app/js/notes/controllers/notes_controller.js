'use strict';

module.exports = function(app) {
  app.controller('notesController', ['$scope', 'resource', function($scope, resource) {
    $scope.notes = [];
    $scope.errors = [];

    var Note = resource('notes');

    $scope.getAll = function() {
      Note.getAll(function(err, data) {
        if(err) return $scope.errors.push({msg: 'erros getting notes'});
        $scope.notes = data;
      });
    };

    $scope.createNewNote = function() {
      var newNote = $scope.newNote;
      $scope.newNote = null;
      $scope.notes.push(newNote);
      Note.create(newNote, function(err,data) {
        if(err) return $scope.errors.push({msg: 'erros getting notes'});
        $scope.notes.splice($scope.notes.indexOf(newNote), 1, data);
      });
    };

    $scope.removeNote = function(note) {
      $scope.notes.splice($scope.notes.indexOf(note), 1);
      Note.remove(note, function(err) {
        if(err) $scope.errors.push({msg: 'erros getting notes'});
      });
    };

    $scope.saveNote = function(note) {
      note.editing = false;
      Note.save(note, function(data) {
        $scope.errors.push({msg: 'erros getting notes'});
       });
    };

    $scope.editCancel = function(note) {
      if(note.editing) {
        note.noteBody = note.noteBodyBackup;
        note.noteBodyBackup = undefined;
        note.editing = false;
      } else {
        note.noteBodyBackup = note.noteBody;
        note.editing = true;
      }
    };

  }]);
};