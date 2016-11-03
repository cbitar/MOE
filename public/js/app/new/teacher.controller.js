(function(){
  'use strict';

  angular.module('app').controller('TeacherController', TeacherController);

  TeacherController.$inject = ['UserService', '$state', '$log'];

  function TeacherController(UserService, $state, $log) {
    var vm = this;
    vm.errors = null;
    vm.signUpTeacher = signUpTeacher;
    vm.newTeacher = {};


    function signUpTeacher() {

console.log(vm.newTeacher);

      UserService.signUpTeacher(vm.newTeacher)
        .then(function(teacher) {
          console.log(teacher)
          if(teacher !== undefined) {
          $state.go('dashboard');
          }
        });
      }
    }

})();




