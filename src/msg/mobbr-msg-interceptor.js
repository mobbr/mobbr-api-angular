angular.module('mobbrMsg').factory('mobbrMsgInterceptor', function ($q, mobbrConfig, mobbrMsg) {

    return {
        response: function (response) {
            if (mobbrConfig.isApiUrl(response.config.url) && response.data.message) {
                mobbrMsg.add({ msg: response.data.message.text });
            }
            return response;
        },
        responseError: function (rejection) {

            if (rejection.config && mobbrConfig.isApiUrl(rejection.config.url) && rejection.data.message) {
                mobbrMsg.add({ type: 'danger', msg: rejection.data.message.text });
            }

            if (!rejection.config) {
                mobbrMsg.add({ type: 'danger', msg: rejection.message });
            }

            return $q.reject(rejection);
        }
    };
});
