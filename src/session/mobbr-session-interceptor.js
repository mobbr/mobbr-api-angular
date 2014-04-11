angular.module('mobbrSession').factory('mobbrSessionInterceptor', function ($injector, mobbrConfig, mobbrSession) {

    return {
        request: function (config) {
            if (mobbrConfig.isApiUrl(config.url) && mobbrSession.isAuthorized()) {
                config.headers.Authorization = mobbrSession.getAuthorization();
            }
            return config;
        },
        responseError: function (rejection) {
            if (mobbrConfig.isApiUrl(rejection.config.url) && rejection.status === 401) {
                mobbrSession.unsetUser();
            }
            return rejection;
        }
    };
});
