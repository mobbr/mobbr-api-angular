angular.module('mobbrApi').factory('MobbrScript', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.getApiUrl() + 'script/:action', {}, {
        validate: {
            method: 'GET',
            params : {
                action: 'validate'
            }
        }
    });
});
