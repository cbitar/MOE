(function(){
  'use strict';

  angular.module('app').controller('EditStudentController', EditStudentController);

  EditStudentController.$inject = ['MusicianService', '$state', '$log', 'UserService'];

  function EditStudentController(MusicianService, $state, $log, UserService) {
    var vm = this;

    vm.editingUser = angular.copy(UserService.getUser());
    vm.editingUser.password = "";
    vm.updateStudent = updateStudent;

    function updateStudent () {
      console.log('works click')
      MusicianService.updateStudent(vm.editingUser)
      $state.go('dashboard');
    };

}


})();
