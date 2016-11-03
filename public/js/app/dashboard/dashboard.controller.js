(function(){
  'use strict';

  angular.module('app').controller('DashboardController', DashboardController);

  DashboardController.$inject = ['UserService', '$stateParams', '$state', '$http', '$log', 'user'];

  function DashboardController(UserService, $stateParams, $state, $http, $log, user) {
    var vm = this;

    vm.user = user;
    vm.logout = logout;

    vm.isTeacher = UserService.isTeacher;

    function logout() {
      UserService.logout();
      $state.go('welcome');
    }



  // click events
  document.body.addEventListener('click', copy, true);

  // event handler
  function copy(e) {

    // find target element
    var
      t = e.target,
      c = t.dataset.copytarget,
      inp = (c ? document.querySelector(c) : null);

    // is element selectable?
    if (inp && inp.select) {

      // select text
      inp.select();

      try {
        // copy text
        document.execCommand('copy');
        inp.blur();
      }
      catch (err) {
        alert('please press Ctrl/Cmd+C to copy');
      }

    }

  }



  }

})();
