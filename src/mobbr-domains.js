angular.module('mobbrApi').factory('MobbrDomain', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.getApiUrl() + 'domains/:action', {}, {
        info: {
            method: 'GET',
            params : {
                action: 'info'
            }
        }
    });
});
