var mobbrApi = angular.module('mobbrApi', [ 'ngResource' ]).factory('mobbrApi', function () {

    var apiUrl = 'https://api.mobbr.com/apiv1/';

    return {
        setApiUrl: function (url) {
            apiUrl = url;
        },
        getApiUrl: function () {
            return apiUrl;
        }
    };
});