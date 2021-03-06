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
