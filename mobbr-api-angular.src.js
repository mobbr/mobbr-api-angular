/*! mobbr-api-angular 0.0.1 05-04-2014 */
(function (angular, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['angular'], function(angular) {
            return factory(angular);
        });
    } else {
        return factory(angular);
    }}(angular || null, function (angular) {
        'use strict';

angular.module('mobbrApi', [ 'ngResource', 'ngStorage' ]).factory('mobbrConfig', function ($localStorage, $rootScope, apiUrl) {

    var user,
        token,
        mobbrConfig = {
            setUser: function (user) {
                if (user.token) {
                    $rootScope.$mobbrStorage.token = user.token;
                    delete user.token;
                }
                $rootScope.$mobbrStorage.user = user;
            },
            unsetUser: function () {
                delete $rootScope.$mobbrStorage.token;
                delete $rootScope.$mobbrStorage.user;
            },
            url: apiUrl + '/api_v1/',
            messages: []
        };

    function emit() {
        $rootScope.$broadcast('mobbrApi:authenticate', $rootScope.$mobbrStorage.user);
    }

    $rootScope.$mobbrStorage = $localStorage;
    $rootScope.$watch('$mobbrStorage.token', emit);
    $rootScope.$watch('$mobbrStorage.user', emit, true);

    return mobbrConfig;

}).config(function ($httpProvider) {
    $httpProvider.interceptors.push('mobbrInterceptor');
});
angular.module('mobbrApi').factory('MobbrApi', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.url + 'api/:action', {}, {
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

    return $resource(mobbrConfig.url + 'balances/:action', {}, {
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

    return $resource(mobbrConfig.url + 'domains/:action', {}, {
        info: {
            method: 'GET',
            params : {
                action: 'info'
            }
        }
    });
});

angular.module('mobbrApi').factory('mobbrInterceptor', function ($q, $rootScope, mobbrConfig) {

    function isMobbrApi(url) {
        return url.indexOf(mobbrConfig.url) === 0;
    }

    return {
        request: function (config) {
            if (isMobbrApi(config.url) && $rootScope.$mobbrStorage.token) {
                config.headers.Authorization = 'Basic ' + $window.btoa(':' + $rootScope.$mobbrStorage.token);
            }
            return config;
        },
        response: function (response) {
            if (isMobbrApi(response.config.url) && response.data.message) {
                mobbrConfig.messages.push({ type: 'info', message: response.data.message });
            }
            return response;
        },
        responseError: function (rejection) {
            if (isMobbrApi(rejection.config.url)) {
                if (rejection.status === 401) {
                    mobbrConfig.unsetUser();
                }
                if (rejection.data.message) {
                    mobbrConfig.messages.push({ type: 'error', message: rejection.data.message });
                }
            }
            return rejection;
        }
    };
});

angular.module('mobbrApi').factory('MobbrInvoice', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.url + 'invoices/:action', {}, {
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

    return $resource(mobbrConfig.url + 'persons/:action', {}, {
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

    return $resource(mobbrConfig.url + 'referrers/:action', {}, {
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

    return $resource(mobbrConfig.url + 'script/:action', {}, {
        validate: {
            method: 'GET',
            params : {
                action: 'validate'
            }
        }
    });
});

angular.module('mobbrApi').factory('MobbrUri', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.url + 'uris/:action', {}, {
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

    function setUser(response) {
        if (response.status === 200 || response.status === 201) {
            mobbrConfig.setUser(response.data.result);
        }
        return response;
    }

    function unsetUser(response) {
        if (response.status === 200 || response.status === 201) {
            mobbrConfig.unsetUser();
        }
        return response;
    }

    return $resource(mobbrConfig.url + 'user/:action', {}, {
        passwordLogin: {
            method: 'PUT',
            params : {
                action: 'password_login'
            },
            interceptor: {
                response: setUser
            }
        },
        linkLogin: {
            method: 'PUT',
            params : {
                action: 'link_login'
            },
            interceptor: {
                response: setUser
            }
        },
        updateUser: {
            method: 'POST',
            params : {
                action: 'update_user'
            },
            interceptor: {
                response: setUser
            }
        },
        logout: {
            method: 'DELETE',
            params : {
                action: 'logout'
            },
            interceptor: {
                response: unsetUser
            }
        },
        ping: {
            method: 'GET',
            params : {
                action: 'ping'
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
        updatePassword: {
            method: 'POST',
            params : {
                action: 'update_password'
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

    return $resource(mobbrConfig.url + 'xpayments/:action', {}, {
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