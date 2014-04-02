angular.module('mobbrApi').factory('MobbrScript', function ($resource, mobbrApi) {

    return $resource(mobbrApi.getApiUrl() + 'script/:action', {}, {
        validate: {
            method: 'GET',
            params : {
                action: 'validate'
            }
        }
    });
});
