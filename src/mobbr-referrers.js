angular.module('mobbrApi').factory('MobbrReferrer', function ($resource, mobbrApi) {

    return $resource(mobbrApi.getApiUrl() + 'referrers/:action', {}, {});
});
