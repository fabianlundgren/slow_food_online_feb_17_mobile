angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngResource'])
  .constant('API_URL', 'https://slowfood-online-feb-17.herokuapp.com/api/v1')

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.home', {
     url: '/home',
     views: {
       'tab-home': {
         templateUrl: 'templates/home/home.html',
         controller: 'HomeController'
       }
     }
   })

   .state('tab.restaurant', {
     url: '/restaurant/:id',
     views: {
       'tab-home': {
         templateUrl: 'templates/restaurants/restaurant.html',
         controller: 'RestaurantController'
       }
     }
   })

   .state('tab.menu', {
     url: '/menu/:id',
     views: {
       'tab-home': {
         templateUrl: 'templates/menus/menu.html',
         controller: 'RestaurantController'
       }
     }
   });

  $urlRouterProvider.otherwise('/tab/home');
  });
