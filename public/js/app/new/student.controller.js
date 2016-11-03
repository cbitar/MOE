(function(){
  'use strict';

  angular.module('app').controller('StudentController', StudentController);

  StudentController.$inject = ['UserService', '$state', '$log'];

  function StudentController(UserService, $state, $log) {
    var vm = this;
    vm.errors = null;
    vm.signUpStudent = signUpStudent;

    function signUpStudent() {
      UserService.signUpStudent(vm.newStudent)
        .then(function(student) {
          console.log(student)
          if(student !== undefined) {
          $state.go('dashboard');
          }
        });
    }
  }


})();

