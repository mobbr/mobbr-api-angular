angular.module('mobbrApi').factory('MobbrApi', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.getApiUrl() + 'api/:action', {}, {});
});
