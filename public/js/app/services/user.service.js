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
      if (user) return user;
      var token = AuthTokenService.getToken();
      if ( token ) {
        user = decode(token);
        return user;
      }
    }

    function decode(token) {
      return JSON.parse($window.atob(token.split('.')[1])).user;
    }
  }

})();
