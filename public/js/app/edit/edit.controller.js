(function(){
  'use strict';

  angular.module('app').controller('EditController', EditController);

  EditController.$inject = ['MusicianService', '$state', '$log', 'students', 'teachers'];

  function EditController(MusicianService, $state, $log, students, teachers) {
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

  // networking events
  // targted apps, 3 agencies and recruiting forms

})();
