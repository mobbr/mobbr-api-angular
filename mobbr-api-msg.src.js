/*! mobbr-api-angular 0.0.1 04-06-2014 */
(function (angular, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['angular'], function(angular) {
            return factory(angular);
        });
    } else {
        return factory(angular);
    }}(angular || null, function (angular) {
        'use strict';

angular.module('mobbrMsg', [ 'mobbrApi' ]).factory('mobbrMsg', function ($timeout) {

    var msg = {
        messages: [],
        add: function (message, timeout) {

            msg.messages.push(message);

            if (timeout !== false) {
                $timeout(function(){
                    msg.close(msg.messages.indexOf(message));
                }, timeout || 5000);
            }
        },
        close: function (i) {
            msg.messages.splice(i, 1);
        }
    };

    return msg;

}).config(function ($httpProvider) {
    $httpProvider.interceptors.push('mobbrMsgInterceptor');
});
angular.module('mobbrMsg').factory('mobbrMsgInterceptor', function ($q, mobbrConfig, mobbrMsg) {

    return {
        response: function (response) {
            if (mobbrConfig.isApiUrl(response.config.url) && response.data.message) {
                mobbrMsg.add({ msg: response.data.message.text });
            }
            return response;
        },
        responseError: function (rejection) {
            if (mobbrConfig.isApiUrl(rejection.url) && rejection.data.message) {
                mobbrMsg.add({ type: 'danger', msg: rejection.data.message.text });
            }
            return $q.reject(rejection);
        }
    };
});
    }
));