/*! mobbr-api-angular 0.0.1 11-04-2014 */
(function (angular, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['angular'], function(angular) {
            return factory(angular);
        });
    } else {
        return factory(angular);
    }}(angular || null, function (angular) {
        'use strict';

angular.module('mobbrMsg', [ 'mobbrApi' ]).factory('mobbrMsg', function () {

    return {
        messages: []
    };

}).config(function ($httpProvider) {
    $httpProvider.interceptors.push('mobbrMsgInterceptor');
});
angular.module('mobbrMsg').factory('mobbrMsgInterceptor', function (mobbrConfig, mobbrMsg) {

    return {
        response: function (response) {
            if (mobbrConfig.isApiUrl(response.config.url) && response.data.message) {
                mobbrMsg.messages.push({ msg: response.data.message });
            }
            return response;
        },
        responseError: function (rejection) {
            console.log(rejection);
            if (mobbrConfig.isApiUrl(rejection.config.url) && rejection.data.message) {
                mobbrMsg.messages.push({ type: 'danger', message: rejection.data.message });
            }
            return rejection;
        }
    };
});
    }
));