angular.module('mobbrApi').factory('MobbrPayment', function ($resource, mobbrApi) {

    return $resource(mobbrApi.getApiUrl() + 'payments/:action', {}, {});
});
