angular.module('login', []);

angular.module('login')
  .config($stateProvider => {
      $stateProvider
        .state('login', {
          url: '/login',
          controller: 'LoginCtrl',
          templateUrl: 'login/login.html',
          controllerAs: 'login'
        });
  });
