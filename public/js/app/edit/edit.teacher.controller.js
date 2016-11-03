(function(){
  'use strict';

  angular.module('app').controller('EditTeacherController', EditTeacherController);

  EditTeacherController.$inject = ['MusicianService', '$state', '$log', 'UserService'];

  function EditTeacherController(MusicianService, $state, $log, UserService) {
    var vm = this;

    vm.updateTeacher= updateTeacher;

    vm.editingUser = angular.copy(UserService.getUser());
    vm.editingUser.password = "";

    function updateTeacher() {
      if (!vm.editingUser.password) delete vm.editingUser.password;
      MusicianService.updateTeacher(vm.editingUser)
        .then(function() {
          $state.go('dashboard');
        });
    }

}


})();
