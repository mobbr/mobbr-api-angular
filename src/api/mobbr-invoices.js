angular.module('mobbrApi').factory('MobbrInvoice', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.url + 'invoices/:action', {}, {
        get: {
            method: 'GET',
            responseType: 'blob',
            params : {
                action: 'requestable'
            }
        }
    });
});
