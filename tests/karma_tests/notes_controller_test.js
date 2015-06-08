'use strict';

require('../../app/js/client');
require('angular-mocks');

describe('notes controller', function() {
	var $ContConst;
	var $httpBackend;
	var $scope;

	beforeEach(angular.mock.module('notesApp'));

	beforeEach(angular.mock.inject(function($rootScope, $controller) {
		$scope = $rootScope.$new();
		$ContConst = $controller;
	}));

	it('should create a new controller', function() {
		var notesController = $ContConst('notesController', {$scope: $scope});
		expect(typeof notesController).toBe('object');
		expect(Array.isArray($scope.notes)).toBe(true);
		expect(typeof $scope.getAll).toBe('function');
	});

	describe('REST functionality', function() {
		beforeEach(angular.mock.inject(function(_$httpBackend_) {
			$httpBackend = _$httpBackend_;
			this.notesController = $ContConst('notesController', {$scope: $scope});
		}));

		afterEach(function() {
			$httpBackend.verifyNoOutstandingExpectation();
			$httpBackend.verifyNoOutstandingRequest();
		});

		it('should make a get request on index', function() {
			$httpBackend.expectGET('/api/notes').respond(200, [{_id: '1', noteBody: 'test note'}]);
			$scope.getAll();
			$httpBackend.flush();
			expect($scope.notes[0].noteBody).toBe('test note');
			expect($scope.notes[0]._id).toBe('1');
		});
	});
});