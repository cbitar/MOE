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
      if (!vm.editingUser.password) delete vm.editingUser.password;
      MusicianService.updateStudent(vm.editingUser)
      .then(function() {
        $state.go('dashboard');
      });
    };

}


})();
