angular.module('mobbrApi').factory('MobbrInvoice', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.getApiUrl() + 'invoices/:action', {}, {
        requestable: {
            method: 'GET',
            params : {
                action: 'requestable'
            }
        },
        request: {
            method: 'PUT',
            params : {
                action: 'request'
            }
        },
        unrequest: {
            method: 'PUT',
            params : {
                action: 'unrequest'
            }
        },
        requested: {
            method: 'GET',
            params : {
                action: 'requested'
            }
        },
        confirmable: {
            method: 'GET',
            params : {
                action: 'confirmable'
            }
        },
        confirm: {
            method: 'PUT',
            params : {
                action: 'confirm'
            }
        },
        returned: {
            method: 'GET',
            params : {
                action: 'returned'
            }
        },
        confirmed: {
            method: 'GET',
            params : {
                action: 'confirmed'
            }
        }
    });
});
