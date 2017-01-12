/**
 * @name app
 * @description  main app object
 * @author Carlos Justiniano
 */
//angular.module('app', ['ngRoute', 'mgcrea.ngStrap'])
var app = angular.module('app', ['ngRoute', 'ui.bootstrap', 'splitchar', 'fluidlabel']);

app.config(['$routeProvider', function($routeProvider) {
      $routeProvider
        .when('/home', {
          templateUrl: '../../directive-demo/views/home_view.html',
          controller: 'HomeController'
        })
        .when('/login-view', {
          templateUrl: '../../directive-demo/views/login_view.html',
          controller: 'LoginController'
        })
        .when('/contact-us', {
          templateUrl: '../../directive-demo/views/contact_us_view.html',
          controller: 'ContactUsController'
        })
        .otherwise({
          redirectTo: '/home'
        });
    }]);
