angular.module('mobbrApi').factory('MobbrKeywords', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.url + 'keywords/:action', {}, {
        uri: {
            method: 'GET',
            params : {
                action: 'uri'
            }
        },
        domain: {
            method: 'GET',
            params : {
                action: 'domain'
            }
        },
        person: {
            method: 'GET',
            params : {
                action: 'person'
            }
        }
    });
});
