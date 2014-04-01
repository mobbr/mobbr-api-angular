angular.module('mobbrApi').factory('MobbrUri', function ($resource, mobbrApi) {

    return $resource(mobbrApi.getApiUrl() + 'uris/:action', {}, {});
});
