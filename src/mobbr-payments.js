angular.module('mobbrApi').factory('MobbrPayment', function ($resource, mobbrApi) {

    return $resource(mobbrApi.getApiUrl() + 'payments/:action', {}, {
        info: {
            method: 'GET',
            params : {
                action: 'info'
            }
        },
        historic: {
            method: 'GET',
            params : {
                action: 'historic'
            }
        },
        pledged: {
            method: 'GET',
            params : {
                action: 'pledged'
            }
        },
        pledges: {
            method: 'GET',
            params : {
                action: 'pledges'
            }
        },
        new: {
            method: 'GET',
            params : {
                action: 'new'
            }
        },
        unpledge: {
            method: 'DELETE',
            params : {
                action: 'unpledge'
            }
        },
        preview: {
            method: 'POST',
            params : {
                action: 'preview'
            }
        },
        confirm: {
            method: 'PUT',
            params : {
                action: 'confirm'
            }
        },
        unclaimed: {
            method: 'GET',
            params : {
                action: 'unclaimed'
            }
        },
        claim: {
            method: 'POST',
            params : {
                action: 'claim'
            }
        },
        domain: {
            method: 'GET',
            params : {
                action: 'domain'
            }
        }
    });
});
