'use strict';

var expect = require('chai').expect;
var greet = require('../../app/js/greet');
var notes = require('../../app/js/notes');

describe('greet module', function() {
	it('should return a greeting', function() {
		expect(greet()).to.eql('Hello world, from javascript');
	});
});

describe('notes module', function() {
	it('should return an explanation for the notes app', function() {
		expect(notes()).to.eql('. The notes app lets you take notes and such, ya dig?');
	});
});