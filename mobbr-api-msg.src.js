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

    var msg = {
        messages: [],
        close: function (i) {
            msg.splice(i, 1);
        }
    };

    return msg;

}).config(function ($httpProvider) {
    $httpProvider.interceptors.push('mobbrMsgInterceptor');
});
angular.module('mobbrMsg').factory('mobbrMsgInterceptor', function (mobbrConfig, mobbrMsg) {

    return {
        response: function (response) {
            if (mobbrConfig.isApiUrl(response.config.url) && response.data.message) {
                mobbrMsg.messages.push({ msg: response.data.message.text });
            }
            return response;
        },
        responseError: function (rejection) {
            if (mobbrConfig.isApiUrl(rejection.config.url) && rejection.data.message) {
                mobbrMsg.messages.push({ type: 'danger', message: rejection.data.message.text });
            }
            return rejection;
        }
    };
});
    }
));