(function(){
  'use strict';

  angular.module('app').controller('SearchController', SearchController);

  SearchController.$inject = ['UserService', '$state', '$log', 'students', 'teachers'];

  function SearchController(UserService, $state, $log, students, teachers) {
    var vm = this;

    vm.students = students;
    vm.teachers = teachers;

  }

})();
