angular.module('mobbrMsg', [ 'mobbrApi' ]).factory('mobbrMsg', function () {

    return {
        messages: []
    };

}).config(function ($httpProvider) {
    $httpProvider.interceptors.push('mobbrMsgInterceptor');
});