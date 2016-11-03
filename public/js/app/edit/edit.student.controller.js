(function(){
  'use strict';

  angular.module('app').controller('EditStudentController', EditStudentController);

  EditStudentController.$inject = ['MusicianService', '$state', '$log', 'students', 'teachers'];

  function EditStudentController(MusicianService, $state, $log, students, teachers) {
    var vm = this;

    vm.students = students;
    vm.teachers = teachers;
    vm.updateTeacher= updateTeacher;
    vm.updateStudent= updateStudent;



  function updateTeacher() {
    console.log('works')
    MusicianService.updateTeacher(vm.teachers)
      // .then((response) => {
      //   vm.teachers = MusicianService.
      // })
    $state.go('dashboard');
  }

  function updateStudent() {
    console.log('works')
    MusicianService.updateStudent(vm.students)
    $state.go('dashboard');
  }

}


})();
