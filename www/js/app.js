// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic','app.controllers'])

.run(function($ionicPlatform, $rootScope, $ionicModal) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
    
    //ionicModal definition
    $ionicModal.fromTemplateUrl('templates/modal-ads.html', {
        scope: $rootScope,
        animation: 'slide-in-up',
      }).then(function(modal) {
        $rootScope.modalAds = modal;
     });
    
    $rootScope.showAds = function(){
        $rootScope.modalAds.show();
    }
    
    $rootScope.CloseAds = function(){
        $rootScope.modalAds.hide();
    }
    
//    $rootScope.$on('$stateChangeStart',function(){
//        $rootScope.showAds();
//    });
 
})

//app Routes and States Configuration
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.views.maxCache(0);
    
    $stateProvider
    .state('tabs', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
    })
    
    .state('tabs.home', {
        url: "/home",
        views: {
            'home-tab': {
                templateUrl: "templates/home.html",
                controller: 'HomeCtrl'
            }
        }
    })
    
    .state('tabs.search', {
        url: "/search",
        abstract: true,
        views: {
            'search-tab': {
                templateUrl: "templates/search.html",
            }
        }
    })
    
    .state('tabs.search.flights', {
        url: "/search-flights",
        views: {
            'search-page': {
                templateUrl: "templates/search-flights.html",
                controller: 'FlightsCtrl'
            }
        }
    })
    
    .state('tabs.search.hotels', {
        url: "/search-hotels",
        views: {
            'search-page': {
                templateUrl: "templates/search-hotels.html",
                controller: 'HotelsCtrl'
            }
        }
    })
    
    .state('tabs.search.cars', {
        url: "/search-cars",
        views: {
            'search-page': {
                templateUrl: "templates/search-cars.html",
                controller: 'CarsCtrl'
            }
        }
    })

    $urlRouterProvider.otherwise("/tab/home");

});//endConfig
