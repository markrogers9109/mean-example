angular.module('app', [
    'templates',
    'ui.router',
    'welcome',
    'login',
    'register',
    'user-service'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/register');
  })
  .run(function () {

  });
