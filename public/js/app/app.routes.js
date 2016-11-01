(function(){
  'use strict';

  angular.module('app').config(routes);

  routes.$inject = ['$urlRouterProvider', '$stateProvider'];

  function routes($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state('welcome', {
        url: '/welcome',
        templateUrl: 'js/app/welcome/welcome.html'
      })
      .state('lesson', {
        url: '/lesson',
        templateUrl: 'js/app/lesson/lesson.html'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'js/app/welcome/home.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'js/app/about/about.html'
      })
      .state('form-teacher', {
        url: '/form-teacher',
        templateUrl: 'js/app/new/form.teacher.html'
      })
      .state('form-student', {
        url: '/form-student',
        templateUrl: 'js/app/new/form.student.html'
      })
      .state('search', {
        url: '/search',
        templateUrl: 'js/app/search/search.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'js/app/login/login.html',
        controller: 'LoginController as vm'
      })
      .state('dashboard', {
        url: '/dashboard',
        resolve: {
          UserService: 'UserService',
          user: function(UserService) {
            return UserService.getUser();
          }
        },
        templateUrl: 'js/app/dashboard/dashboard.html',
        controller: 'DashboardController as vm'
      });
    $urlRouterProvider.otherwise('/welcome');
  }
})();
