'use strict';
angular.module('app.controllers',[])

.controller('HomeCtrl', function($scope, $state, $ionicModal, $rootScope) {
    
//     $ionicModal.fromTemplateUrl('templates/modal-ads.html', {
//        scope: $scope,
//        animation: 'slide-in-up',
//      }).then(function(modal) {
//        $scope.modalAds = modal;
//      });
    
    
//    $scope.showModal = function(){
//        $scope.modalAds.show();
//    }
//    
//    $scope.closeModal = function() {
//        $scope.modalAds.hide();
//    }
    
    
//    $scope.$on('$stateChangeSuccess',function(){
//       $scope.showModal();
//    })
})

.controller('modalAdsCtrl', function($scope, $timeout, $rootScope){
    $scope.msg = "Hello world";
    $scope.autoClose = function(){
    $timeout(function(){
        $scope.msg = "Merhaba dunya";
        $rootScope.CloseAds();
    },3000);
    }
    
})

.controller('FlightsCtrl',function($scope, $http){
    $scope.roundtrip = true;
    
//    ionicMaterialMotion.ripple();
//    
//    $timeout(function(){
//       ionicMaterialInk.displayEffect();
//    },0);
})

.controller('HotelsCtrl',function($scope, $http){
//    ionicMaterialMotion.ripple();
//    
//    $timeout(function(){
//       ionicMaterialInk.displayEffect();
//    },0);
})

.controller('CarsCtrl',function($scope, $http){
    $scope.diffdropOff = false;
    
//    ionicMaterialMotion.ripple();
//    
//    $timeout(function(){
//       ionicMaterialInk.displayEffect();
//    },0);
})
;