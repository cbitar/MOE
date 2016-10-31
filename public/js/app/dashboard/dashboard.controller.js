(function(){
  'use strict';

  angular.module('app').controller('DashboardController', DashboardController);

  DashboardController.$inject = ['UserService', '$stateParams', '$state', '$http', '$log', 'user'];

  function DashboardController(UserService, $stateParams, $state, $http, $log, user) {
    var vm = this;

    vm.user = user;
    vm.logout = logout;

    function logout() {
      UserService.logout();
      $state.go('welcome');
    }

  }

})();
