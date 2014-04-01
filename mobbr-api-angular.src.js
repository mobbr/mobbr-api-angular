/*! mobbr-api-angular 01-04-2014 */
(function (angular, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['angular'], function(angular) {
            return factory(angular);
        });
    } else {
        return factory(angular);
    }}(angular || null, function (angular) {
        'use strict';

var mobbrApi = angular.module('mobbrApi', [ 'ngResource' ]).factory('mobbrApi', function () {

    var apiUrl = 'https://api.mobbr.com/apiv1/';

    return {
        setApiUrl: function (url) {
            apiUrl = url;
        },
        getApiUrl: function () {
            return apiUrl;
        }
    };
});
angular.module('mobbrApi').factory('MobbrDomain', function ($resource, mobbrApi) {

    return $resource(mobbrApi.getApiUrl() + 'domains/:action', {}, {});
});

angular.module('mobbrApi').factory('MobbrInvoice', function ($resource, mobbrApi) {

    return $resource(mobbrApi.getApiUrl() + 'invoices/:action', {}, {});
});

angular.module('mobbrApi').factory('MobbrPayment', function ($resource, mobbrApi) {

    return $resource(mobbrApi.getApiUrl() + 'payments/:action', {}, {});
});

angular.module('mobbrApi').factory('MobbrPerson', function ($resource, mobbrApi) {

    return $resource(mobbrApi.getApiUrl() + 'persons/:action', {}, {});
});


angular.module('mobbrApi').factory('MobbrScript', function ($resource, mobbrApi) {

    return $resource(mobbrApi.getApiUrl() + 'scripts/:action', {}, {});
});

angular.module('mobbrApi').factory('MobbrUri', function ($resource, mobbrApi) {

    return $resource(mobbrApi.getApiUrl() + 'uris/:action', {}, {});
});

angular.module('mobbrApi').factory('MobbrUser', function ($resource, mobbrApi) {

    return $resource(mobbrApi.getApiUrl() + 'user/:action', {}, {});
});
    }
));