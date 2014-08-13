angular.module('mobbrApi').factory('MobbrPerson', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.url + 'persons/:action', {}, {
        uri: {
            method: 'GET',
            params: {
                action: 'uri'
            }
        },
        invite: {
            method: 'GET',
            params: {
                action: 'invite'
            }
        },
        uri_earners: {
            method: 'GET',
            params: {
                action: 'uri_earners'
            }
        },
        uri_payers: {
            method: 'GET',
            params: {
                action: 'uri_payers'
            }
        },
        domain: {
            method: 'GET',
            params: {
                action: 'domain'
            }
        },
        payers: {
            method: 'GET',
            params: {
                action: 'payers'
            }
        },
        roles: {
            method: 'GET',
            params: {
                action: 'roles'
            }
        },
        topEarners: {
            method: 'GET',
            params: {
                action: 'top_earners'
            }
        },
        paid: {
            method: 'GET',
            params: {
                action: 'paid'
            }
        },
        earned: {
            method: 'GET',
            params: {
                action: 'earned'
            }
        },
        domainEarners: {
            method: 'GET',
            params: {
                action: 'domain_earners'
            }
        },
        persons: {
            method: 'GET'
        },
        personsRecipients: {
            method: 'GET',
            params: {
                action: 'recipients'
            }
        }

    });
});

