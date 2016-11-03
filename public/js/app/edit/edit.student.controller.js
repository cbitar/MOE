(function(){
  'use strict';

  angular.module('app').controller('EditStudentController', EditStudentController);

  EditStudentController.$inject = ['MusicianService', '$state', '$log', 'UserService'];

  function EditStudentController(MusicianService, $state, $log, UserService) {
    var vm = this;

    vm.editingUser = angular.copy(UserService.getUser());

    vm.updateStudent = function () {
      console.log('works')
      MusicianService.updateStudent(vm.students)
      $state.go('dashboard');
    };

}


})();
