'use strict';

import { INSTANCE_READ_SERVICE } from 'core/instance/instance.read.service';

const angular = require('angular');

module.exports = angular
  .module('spinnaker.core.instance.details.console.controller', [INSTANCE_READ_SERVICE])
  .controller('ConsoleOutputCtrl', function($scope, $uibModalInstance, instanceReader, instance) {
    const instanceId = instance.instanceId || instance.id;
    $scope.vm = {
      loading: true,
      instanceId: instanceId,
    };

    instanceReader.getConsoleOutput(instance.account, instance.region, instanceId, instance.provider).then(
      function(response) {
        $scope.vm.consoleOutput = response.output;
        $scope.vm.loading = false;
      },
      function(exception) {
        $scope.vm.exception = exception;
        $scope.vm.loading = false;
      },
    );

    $scope.close = $uibModalInstance.dismiss;

    $scope.jumpToEnd = () => {
      const console = document.getElementById('console-output');
      console.scrollTop = console.scrollHeight;
    };
  });
