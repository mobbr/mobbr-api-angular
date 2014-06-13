angular.module('mobbrApi').factory('MobbrUri', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.url + 'uris/:action', {}, {
        domain: {
            method: 'GET',
            params : {
                action: 'domain'
            }
        },
        top: {
            method: 'GET',
            params : {
                action: 'top'
            }
        },
        domainTop: {
            method: 'GET',
            params : {
                action: 'domain_top'
            }
        },
        unclaimed: {
            method: 'GET',
            params : {
                action: 'unclaimed'
            }
        },
        paid: {
            method: 'GET',
            params : {
                action: 'paid'
            }
        },
        earned: {
            method: 'GET',
            params : {
                action: 'earned'
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
