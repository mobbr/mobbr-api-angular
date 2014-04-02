angular.module('mobbrApi').factory('MobbrReferrer', function ($resource, mobbrApi) {

    return $resource(mobbrApi.getApiUrl() + 'referrers/:action', {}, {
        domain: {
            method: 'GET',
            params : {
                action: 'domain'
            }
        },
        uri: {
            method: 'GET',
            params : {
                action: 'uri'
            }
        }
    });
});
