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
