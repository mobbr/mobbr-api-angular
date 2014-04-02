angular.module('mobbrApi').factory('MobbrPerson', function ($resource, mobbrApi) {

    return $resource(mobbrApi.getApiUrl() + 'persons/:action', {}, {
        url: {
            method: 'GET',
            params : {
                action: 'url'
            }
        },
        domain: {
            method: 'GET',
            params : {
                action: 'domain'
            }
        },
        payers: {
            method: 'GET',
            params : {
                action: 'payers'
            }
        },
        roles: {
            method: 'GET',
            params : {
                action: 'roles'
            }
        },
        topEarners: {
            method: 'GET',
            params : {
                action: 'top_earners'
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
        domainEarners: {
            method: 'GET',
            params : {
                action: 'domain_earners'
            }
        }
    });
});

