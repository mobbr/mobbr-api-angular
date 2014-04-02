angular.module('mobbrApi').factory('MobbrXPayment', function ($resource, mobbrApi) {

    return $resource(mobbrApi.getApiUrl() + 'xpayments/:action', {}, {});
});
