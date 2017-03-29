angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', 'SignOut', '$state', function ($scope, Global, SignOut, $state) {
    $scope.global = Global;

    $scope.menu = [{
        "title": "Nappi1",
        "state": "nappi1"   // Keksi tälläselle statelle käyttö
    }, {
        "title": "Nappi2",
        "state": "Nappi2"
    }];
    
    $scope.isCollapsed = false;

    $scope.SignOut = function(){
        SignOut.get(function(response){
            if(response.status === 'success'){
                $scope.global = null;
                $state.go('home');
            }
        });
    }


}]);