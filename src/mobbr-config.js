angular.module('mobbrApi', [ 'ngResource', 'ngStorage' ]).factory('mobbrConfig', function ($rootScope, apiUrl) {

    var config = {
        url: apiUrl + '/api_v1/',
        isApiUrl: function (url) {
            return url.indexOf(config.url) === 0;
        }
    };

    return config;
});