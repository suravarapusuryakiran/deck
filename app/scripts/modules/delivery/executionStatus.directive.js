'use strict';

let angular = require('angular');

module.exports = angular.module('spinnaker.delivery.executionStatus.directive', [
])
  .directive('executionStatus', function() {
    return {
      restrict: 'E',
      scope: {
        execution: '=',
        filter: '=',
      },
      templateUrl: require('./executionStatus.html'),
      controller: 'executionStatus as ctrl',
    };
  });
