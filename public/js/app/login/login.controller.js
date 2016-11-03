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
      vm.user = UserService.getUser();
      return vm.user;
    };
    vm.signUpTeacher = signUpTeacher;
    vm.signUpStudent = signUpStudent;

    function signUpTeacher() {
      console.log('npt working')
      UserService.signUpTeacher();
      $state.go('dashboard');
    }

    function signUpStudent() {
      UserService.signUpStudent();
      $state.go('dashboard');
    }

    function logout() {
      UserService.logout();
      $state.go('home');
    }

    function login() {
      UserService.login(vm.email, vm.password)
        .then((user) => {
          $('.modal-backdrop').hide();
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
