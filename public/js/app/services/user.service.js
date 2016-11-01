(function(){
  'use strict';

  angular.module('app')
    .factory('UserService', UserService);

  UserService.$inject = ['$http', 'AuthTokenService', '$window', '$log'];

  function UserService($http, AuthTokenService, $window, $log) {

    var baseUrl = 'http://localhost:3000'
    var user = null;

    var service = {
      login: login,
      logout: logout,
      getUser: getUser
    }

    return service;

    function login(email, password) {
      return $http.post('/api/login', {email, password})
                  .then((response) => {
                    var token = response.data.token;
                    console.log(token);
                    AuthTokenService.setToken(token);
                    user = decode(token);
                    return user;
                  });
    }

    function logout() {
      console.log('clicked')
      user = null;
      AuthTokenService.removeToken();
    }

    function getUser() {
      return user;
      // if (user) return user;
      // var token = AuthTokenService.getToken();
      // if ( token ) {
      //   user = decode(token);
      //   return user;
      // }
    }

    function decode(token) {
      return JSON.parse($window.atob(token.split('.')[1])).user;
    }

    function signUp(newTeacher) {
      console.log(newTeacher)
      $http.post('/api/form-teacher' ,newTeacher)
        .then(function(response){
          console.log(response)
        })
    }

    function signUp(newStudent) {
      console.log(newStudent)
      $http.post('/api/form-student' ,newStudent)
        .then(function(response){
          console.log(response)
        })
    }
  }

})();
