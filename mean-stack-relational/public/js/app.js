angular.module('mean', ['ngCookies', 'ngResource', 'ui.router', 'ui.bootstrap', 'ui.route', 'mean.system', 'mean.auth','satellizer'])
.config(function ($authProvider) {


});

angular.module('mean.system', []);
angular.module('mean.auth', []);