angular.module('mobbrApi').factory('MobbrDomain', function ($resource, mobbrApi) {

    return $resource(mobbrApi.getApiUrl() + 'domains/:action', {}, {
        info: {
            method: 'GET',
            params : {
                action: 'info'
            }
        }
    });
});
