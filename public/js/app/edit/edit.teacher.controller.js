(function(){
  'use strict';

  angular.module('app').controller('EditTeacherController', EditTeacherController);

  EditTeacherController.$inject = ['MusicianService', '$state', '$log', 'students', 'teachers'];

  function EditTeacherController(MusicianService, $state, $log, students, teachers) {
    var vm = this;

    vm.students = students;
    vm.teachers = teachers;
    vm.updateTeacher= updateTeacher;
    vm.updateStudent= updateStudent;



  function updateTeacher() {
    console.log('works')
    MusicianService.updateTeacher();
    $state.go('dashboard');
  }

  function updateStudent() {
    console.log('works')
    MusicianService.updateStudent();
    $state.go('dashboard');
  }

}


})();
