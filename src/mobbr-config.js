var mobbrApi = angular.module('mobbrApi', [ 'ngResource' ]).factory('mobbrConfig', function () {

    var apiUrl = 'https://api.mobbr.com/api_v1/';

    return {
        setApiUrl: function (url) {
            apiUrl = url;
        },
        getApiUrl: function () {
            return apiUrl;
        }
    };
});