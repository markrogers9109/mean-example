angular.module('register', []);

angular.module('register')
  .config($stateProvider => {
      $stateProvider
        .state('register', {
          url: '/register',
          controller: 'RegisterCtrl',
          templateUrl: 'register/register.html',
          controllerAs: 'register'
        });
  });
