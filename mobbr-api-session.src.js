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

angular.module('mobbrSession', [ 'mobbrApi' ]).factory('mobbrSession', function ($localStorage, $rootScope, $window) {

    $rootScope.$mobbrStorage = $localStorage;
    $rootScope.$watch('$mobbrStorage.token', function () {
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
angular.module('mobbrSession').factory('mobbrSessionInterceptor', function ($injector, mobbrConfig, mobbrSession) {

    var MobbrUser;

    return {
        request: function (config) {
            if (mobbrConfig.isApiUrl(config.url) && mobbrSession.isAuthorized()) {
                config.headers.Authorization = mobbrSession.getAuthorization();
            }
            return config;
        },
        response: function (response) {
            if (mobbrConfig.isApiUrl(response.config.url) && (response.status === 200 || response.status === 201)) {
                MobbrUser = MobbrUser || $injector.get('MobbrUser');
                console.log(response, MobbrUser);
            }
            return response;
        },
        responseError: function (rejection) {
            if (mobbrConfig.isApiUrl(rejection.config.url) && rejection.status === 401) {
                mobbrSession.unsetUser();
            }
            return rejection;
        }
    };
});
    }
));