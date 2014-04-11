angular.module('mobbrSession').factory('mobbrSessionInterceptor', function (mobbrConfig, mobbrSession, MobbrUser) {

    return {
        request: function (config) {
            if (mobbrConfig.isApiUrl(config.url) && mobbrSession.isAuthorized()) {
                config.headers.Authorization = mobbrSession.getAuthorization();
            }
            return config;
        },
        response: function (response) {
            console.log(response, MobbrUser);
        },
        responseError: function (rejection) {
            if (mobbrConfig.isApiUrl(rejection.config.url) && rejection.status === 401) {
                mobbrSession.unsetUser();
            }
            return rejection;
        }
    };
});
