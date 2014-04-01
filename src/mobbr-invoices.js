angular.module('mobbrApi').factory('MobbrInvoice', function ($resource, mobbrApi) {

    return $resource(mobbrApi.getApiUrl() + 'invoices/:action', {}, {});
});
