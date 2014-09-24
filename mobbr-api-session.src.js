/*! mobbr-api-angular 0.0.1 24-09-2014 */
(function (angular, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['angular'], function(angular) {
            return factory(angular);
        });
    } else {
        return factory(angular);
    }}(angular || null, function (angular) {
        'use strict';

angular.module('mobbrSession', [ 'mobbrApi' ]).factory('mobbrSession', function ($localStorage, $rootScope, $window, $injector) {

    var MobbrUser;

    $rootScope.$mobbrStorage = $localStorage;
    $rootScope.$watch('$mobbrStorage.token', function (newValue, oldValue) {
        if (newValue) {
            MobbrUser = MobbrUser || $injector.get('MobbrUser');
            MobbrUser.ping();
        }
        $rootScope.$broadcast('mobbrApi:authchange', $rootScope.$mobbrStorage.user);
    });

    return {
        setUser: function (user) {
            if (user.token) {
                $rootScope.$mobbrStorage.token = user.token;
                delete user.token;
            }
            $rootScope.$mobbrStorage.user = user;
        },
        unsetUser: function () {
            delete $rootScope.$mobbrStorage.token;
            delete $rootScope.$mobbrStorage.user;
        },
        isAuthorized: function () {
            return $rootScope.$mobbrStorage.token && true || false;
        },
        getAuthorization: function () {
            return 'Basic ' + $window.btoa(':' + $rootScope.$mobbrStorage.token);
        }
    }

}).config(function ($httpProvider) {
    $httpProvider.interceptors.push('mobbrSessionInterceptor');
});
angular.module('mobbrSession').factory('mobbrSessionInterceptor', function ($q, $injector, mobbrConfig, mobbrSession) {

    return {
        request: function (config) {
            if (mobbrConfig.isApiUrl(config.url) && mobbrSession.isAuthorized()) {
                config.headers.Authorization = mobbrSession.getAuthorization();
            }
            return config;
        },
        responseError: function (rejection) {
            if (rejection.config && mobbrConfig.isApiUrl(rejection.config.url) && rejection.status === 403) {
                mobbrSession.unsetUser();
            }
            return $q.reject(rejection);
        }
    };
});
    }
));