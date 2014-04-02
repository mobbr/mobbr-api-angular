/*! mobbr-api-angular 0.0.1 02-04-2014 */
(function (angular, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['angular'], function(angular) {
            return factory(angular);
        });
    } else {
        return factory(angular);
    }}(angular || null, function (angular) {
        'use strict';

var mobbrApi = angular.module('mobbrApi', [ 'ngResource' ]).factory('mobbrConfig', function (apiUrl) {

    apiUrl += '/api_v1/';

    return {
        setApiUrl: function (url) {
            apiUrl = url;
        },
        getApiUrl: function () {
            return apiUrl;
        }
    };
});
angular.module('mobbrApi').factory('MobbrApi', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.getApiUrl() + 'api/:action', {}, {
        languages: {
            method: 'GET',
            params : {
                action: 'languages'
            }
        },
        exception: {
            method: 'GET',
            params : {
                action: 'exception'
            }
        },
        methods: {
            method: 'GET',
            params : {
                action: 'methods'
            }
        },
        forexCurrencies: {
            method: 'GET',
            params : {
                action: 'forex_currencies'
            }
        },
        forexRates: {
            method: 'GET',
            params : {
                action: 'forex_rates'
            }
        },
        isoLanguages: {
            method: 'GET',
            params : {
                action: 'iso_languages'
            }
        },
        isoCountries: {
            method: 'GET',
            params : {
                action: 'iso_countries'
            }
        },
        isoTimezones: {
            method: 'GET',
            params : {
                action: 'iso_timezones'
            }
        }
    });
});

angular.module('mobbrApi').factory('MobbrBalance', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.getApiUrl() + 'balances/:action', {}, {
        user: {
            method: 'GET',
            params : {
                action: 'user'
            }
        },
        uri: {
            method: 'GET',
            params : {
                action: 'uri'
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

angular.module('mobbrApi').factory('MobbrDomain', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.getApiUrl() + 'domains/:action', {}, {
        info: {
            method: 'GET',
            params : {
                action: 'info'
            }
        }
    });
});

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

angular.module('mobbrApi').factory('MobbrPayment', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.getApiUrl() + 'payments/:action', {}, {
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

angular.module('mobbrApi').factory('MobbrPerson', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.getApiUrl() + 'persons/:action', {}, {
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


angular.module('mobbrApi').factory('MobbrReferrer', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.getApiUrl() + 'referrers/:action', {}, {
        domain: {
            method: 'GET',
            params : {
                action: 'domain'
            }
        },
        uri: {
            method: 'GET',
            params : {
                action: 'uri'
            }
        }
    });
});

angular.module('mobbrApi').factory('MobbrScript', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.getApiUrl() + 'script/:action', {}, {
        validate: {
            method: 'GET',
            params : {
                action: 'validate'
            }
        }
    });
});

angular.module('mobbrApi').factory('MobbrUri', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.getApiUrl() + 'uris/:action', {}, {
        payments: {
            method: 'GET',
            params : {
                action: 'payments'
            }
        },
        domain: {
            method: 'GET',
            params : {
                action: 'domain'
            }
        },
        top: {
            method: 'GET',
            params : {
                action: 'top'
            }
        },
        domainTop: {
            method: 'GET',
            params : {
                action: 'domain_top'
            }
        },
        unclaimed: {
            method: 'GET',
            params : {
                action: 'unclaimed'
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
        person: {
            method: 'GET',
            params : {
                action: 'person'
            }
        }
    });
});

angular.module('mobbrApi').factory('MobbrUser', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.getApiUrl() + 'user/:action', {}, {
        ping: {
            method: 'GET',
            params : {
                action: 'ping'
            }
        },
        logout: {
            method: 'DELETE',
            params : {
                action: 'logout'
            }
        },
        passwordLogin: {
            method: 'PUT',
            params : {
                action: 'password_login'
            }
        },
        sendLoginLink: {
            method: 'GET',
            params : {
                action: 'send_login_link'
            }
        },
        register: {
            method: 'PUT',
            params : {
                action: 'register_user_send_login_link'
            }
        },
        updateEmail: {
            method: 'POST',
            params : {
                action: 'update_email'
            }
        },
        confirmEmail: {
            method: 'POST',
            params : {
                action: 'confirm_email'
            }
        },
        linkLogin: {
            method: 'PUT',
            params : {
                action: 'link_login'
            }
        },
        updatePassword: {
            method: 'POST',
            params : {
                action: 'update_password'
            }
        },
        updateUser: {
            method: 'POST',
            params : {
                action: 'update_user'
            }
        },
        uploadIdentityProof: {
            method: 'POST',
            params : {
                action: 'upload_identity_proof'
            }
        },
        profileStatus: {
            method: 'GET',
            params : {
                action: 'profile_status'
            }
        },
        currencies: {
            method: 'GET',
            params : {
                action: 'currencies'
            }
        }
    });
});

angular.module('mobbrApi').factory('MobbrXPayment', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.getApiUrl() + 'xpayments/:action', {}, {
        info: {
            method: 'GET',
            params : {
                action: 'info'
            }
        },
        withdraw: {
            method: 'POST',
            params : {
                action: 'withdraw'
            }
        },
        prepareDeposit: {
            method: 'GET',
            params : {
                action: 'prepare_deposit'
            }
        },
        confirmDeposit: {
            method: 'PUT',
            params : {
                action: 'confirm_deposit'
            }
        },
        supportedCurrencies: {
            method: 'GET',
            params : {
                action: 'supported_currencies'
            }
        },
        newAccountAddress: {
            method: 'PUT',
            params : {
                action: 'new_account_address'
            }
        }
    });
});
    }
));