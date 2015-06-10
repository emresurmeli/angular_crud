'use strict';

module.exports = function(app) {
	var handleError = function(data) {
		console.log(data);
	};

	app.factory('resource', ['$http', function($http) {
		return function(resourceName) {
			return {
				getAll: function(callback) {
					$http({
						method: 'GET',
						url: '/api/' + resourceName
					})
					.success(callback)
					.error(handleError);
				},

				create: function(resource, callback) {
					$http({
						method: 'POST',
						url: '/api/' + resourceName,
						data: resource
					})
					.success(callback)
					.error(handleError);
				},

				save: function(resource, callback) {
					$http({
						method: 'PUT',
						url: '/api/' + resourceName + '/' + resource._id,
						data: resource
					})
					.success(callback)
					.error(handleError);
				},

				remove: function(resource, callback) {
					$http({
						method: 'DELETE',
						url: '/api/' + resourceName + '/' + resource._id
					})
					.success(callback)
					.error(handleError);
				}
			};
		};
	}]);
};