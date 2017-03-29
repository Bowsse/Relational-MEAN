
angular.module('mean.auth').service("SignOut", ['$resource', function($resource) {
    return $resource('/signout');
}]);
angular.module('mean.auth').service("LogIn", ['$resource', function($resource) {
    return $resource('/users/session');
}]);
angular.module('mean.auth').service("SignUp", ['$resource', function($resource) {
    return $resource('/users');
}]);