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
