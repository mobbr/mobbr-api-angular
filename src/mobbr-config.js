var mobbrApi = angular.module('mobbrApi', [ 'ngResource' ]).factory('mobbrConfig', function (apiUrl) {

    apiUrl += '/api_v1/';

    return {
        setApiUrl: function (url) {
            apiUrl = url;
        },
        getApiUrl: function () {
            return apiUrl;
        }
    };
});