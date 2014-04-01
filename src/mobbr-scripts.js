angular.module('mobbrApi').factory('MobbrScript', function ($resource, mobbrApi) {

    return $resource(mobbrApi.getApiUrl() + 'scripts/:action', {}, {});
});
