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
      MusicianService.updateTeacher(vm.editingUser);
      $state.go('dashboard');
    }

}


})();
