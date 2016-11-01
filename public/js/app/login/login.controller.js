(function(){
  'use strict';

  angular.module('app').controller('LoginController', LoginController);

  LoginController.$inject = ['UserService', '$state', '$log'];

  function LoginController(UserService, $state, $log) {
    var vm = this;

    vm.login = login;
    vm.errors = null;
    vm.logout = logout;
    vm.getUser = function() {
      return UserService.getUser();
    };

    function logout() {
      UserService.logout();
      $state.go('welcome');
    }

    function login() {
      UserService.login(vm.email, vm.password)
        .then((user) => {
          $state.go('dashboard')
        })
        .catch((response) => {
          vm.password = '';
          vm.email = '';
          vm.errors = response.data;
        });
    }

  }

})();
