angular.module('mobbrApi').factory('mobbrInterceptor', function ($q, mobbrConfig) {

    function isMobbrApi(url) {
        return url.indexOf(mobbrConfig.url) === 0;
    }

    return {
        request: function (config) {
            if (isMobbrApi(config.url) && mobbrConfig.token) {
                config.withCredentials = true;
                config.headers.Authorization = 'Basic ' + $window.btoa(':' + mobbrConfig.token);
            }
            return config;
        },
        response: function (response) {
            if (isMobbrApi(response.config.url) && response.data.message) {
                mobbrConfig.messages.push({ type: 'info', message: response.data.message });
            }
            return response;
        },
        responseError: function (rejection) {
            if (isMobbrApi(rejection.config.url)) {
                if (rejection.status === 401) {
                    mobbrConfig.unsetUser();
                }
                if (rejection.data.message) {
                    mobbrConfig.messages.push({ type: 'error', message: rejection.data.message });
                }
            }
            return rejection;
        }
    };
});
