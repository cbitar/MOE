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
      getStudents: getStudents,
      updateTeacher: updateTeacher,
      updateStudent: updateStudent
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

    // function updateTeacher() {
    //   if (teachers) return $q.when(teachers);
    //   return $http.get('/api/teachers')
    //     .then(function(resp) {
    //       teachers = resp.data;
    //       return teachers;
    //     });
    // }

    // function updateStudent() {
    //     if (students) return $q.when(students);
    //     return $http.get('/api/students')
    //     .then(function(resp) {
    //       students = resp.data;
    //       return students;
    //     });
    // }

    function updateTeacher(teacher) {
      console.log(teacher)
      return $http.put('/api/edit-teacher' ,teacher)
        .then(function(response){
          UserService.setUserViaToken(response.data.token);
          // AuthTokenService.setToken(token);
          // user = decode(token);
        });
    }

    function updateStudent(student) {
      return $http.put('/api/edit-student', student)
        .then(function(response){
          UserService.setUserViaToken(response.data.token);
          // AuthTokenService.setToken(token);
          // user = decode(token);
        });
    }

  }

})();
