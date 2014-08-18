angular.module('mobbrApi').factory('MobbrPayment', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.url + 'payments/:action', {}, {
        info: {
            method: 'GET',
            params: {
                action: 'info'
            }
        },
        pledged: {
            method: 'GET',
            params: {
                action: 'pledged'
            }
        },
        unpledge: {
            method: 'DELETE',
            params: {
                action: 'pledged'
            }
        },
        preview: {
            method: 'GET',
            params: {
                action: 'preview'
            }
        },
        confirm: {
            method: 'PUT',
            params: {
                action: 'confirm'
            }
        },
        unclaimed: {
            method: 'GET',
            params: {
                action: 'unclaimed'
            }
        },
        unclaimedShares: {
            method: 'GET',
            params: {
                action: 'unclaimed_shares'
            }
        },
        unclaimShares: {
            method: 'DELETE',
            params: {
                action: 'unclaimed_shares'
            }
        },
        claim: {
            method: 'POST',
            params: {
                action: 'claim'
            }
        },
        domain: {
            method: 'GET',
            params: {
                action: 'domain'
            }
        },
        uri: {
            method: 'GET',
            params: {
                action: 'uri'
            }
        }
    });
});
