angular.module('mobbrApi').factory('MobbrPayment', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.url + 'payments/:action', {}, {
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
        new: {
            method: 'GET',
            params : {
                action: 'new'
            }
        },
        unpledge: {
            method: 'POST',
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
