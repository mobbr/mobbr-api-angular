angular.module('mobbrApi').factory('MobbrReferrer', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.url + 'referrers/:action', {}, {
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
