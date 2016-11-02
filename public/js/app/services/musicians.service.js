(function(){
  'use strict';

  angular.module('app')
    .factory('MusicianService', MusicianService);

  MusicianService.$inject = ['$http', '$q'];

  function MusicianService($http, $q) {

    var teachers = null;
    var students = null;

    var service = {
      getTeachers: getTeachers,
      getStudents: getStudents
    }

    return service;

    function getTeachers() {
      if (teachers) return $q.when(teachers);
      return $http.get('/api/teachers')
        .then(function(resp) {
          teachers = resp.data;
          return teachers;
        });
    }

    function getStudents() {
      if (students) return $q.when(students);
      return $http.get('/api/students')
        .then(function(resp) {
          students = resp.data;
          return students;
        });
    }

  }

})();
