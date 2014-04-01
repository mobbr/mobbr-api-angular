angular.module('mobbrApi').factory('MobbrUser', function ($resource, mobbrApi) {

    return $resource(mobbrApi.getApiUrl() + 'user/:action', {}, {});
});
