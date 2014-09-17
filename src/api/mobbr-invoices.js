angular.module('mobbrApi').factory('MobbrInvoice', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.url + 'invoices', {}, {
        get: {
            method: 'GET',
            responseType: 'blob'
        }
    });
});
