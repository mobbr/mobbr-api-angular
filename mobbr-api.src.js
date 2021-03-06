/*! mobbr-api-angular 0.0.1 17-10-2014 */
(function (angular, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['angular'], function(angular) {
            return factory(angular);
        });
    } else {
        return factory(angular);
    }}(angular || null, function (angular) {
        'use strict';

angular.module('mobbrApi', [ 'ngResource', 'ngStorage' ]).factory('mobbrConfig', function ($rootScope, apiUrl) {

    var config = {
        url: apiUrl + '/api_v1/',
        isApiUrl: function (url) {
            return url.indexOf(config.url) === 0;
        }
    };

    return config;
});
angular.module('mobbrApi').factory('MobbrApi', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.url + 'api/:action', {}, {
        eventTypes: {
            method: 'GET',
            params: {
                action: 'event_types'
            }
        },
        happening: {
            method: 'GET',
            params: {
                action: 'happening_right_now'
            }
        },
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
        currencies: {
            method: 'GET',
            params : {
                action: 'currencies'
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
                action: 'languages'
            }
        },
        isoCountries: {
            method: 'GET',
            params : {
                action: 'countries'
            }
        },
        translations: {
            method: 'GET',
            params: {
                action: 'translations'
            }
        },
        isoTimezones: {
            method: 'GET',
            params : {
                action: 'timezones'
            }
        },
        kycIncomeRanges: {
            method: 'GET',
            params : {
                action: 'kyc_incomeranges'
            }
        },
        oauthProviders: {
            method : 'GET',
            params : {
                action : 'oauth_providers'
            }
        },
        api_connections : {
            method : 'GET',
            params : {
                action : 'api_connections'
            }
        },
        idProviders : {
            method : 'GET',
            params : {
                action : 'id_providers'
            }
        }
    });
});

angular.module('mobbrApi').factory('MobbrBalance', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.url + 'balances/:action', {}, {
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

angular.module('mobbrApi').factory('MobbrGravatar', function ($resource) {

    return $resource('https://nl.gravatar.com/:gravatarHash.json',{ callback: "JSON_CALLBACK" },
        {
            get: {
                method: 'JSONP'
            }
    });
});

angular.module('mobbrApi').factory('MobbrInvoice', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.url + 'invoices', {}, {
        get: {
            method: 'GET',
            responseType: 'blob',
            interceptor: {
                response: function (response) {
                    return response;
                }
            }
        }
    });
});

angular.module('mobbrApi').factory('MobbrKeywords', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.url + 'keywords/:action', {}, {
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
        },
        person: {
            method: 'GET',
            params : {
                action: 'person'
            }
        }
    });
});

angular.module('mobbrApi').factory('MobbrNotifications', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.url + 'notifications/:action', {}, {});
});

angular.module('mobbrApi').factory('MobbrOneName', function ($resource) {

    return $resource('https://onename.io/:onenameId.json',{  },
        {

    });
});

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
            method: 'POST',
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
            method: 'PUT',
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

angular.module('mobbrApi').factory('MobbrPerson', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.url + 'persons/:action', {}, {
        uri: {
            method: 'GET',
            params: {
                action: 'uri'
            }
        },
        taskCandidates: {
            method: 'GET'
        },
        info :{
            method: 'GET',
            params: {
                action: 'info'
            }
        },
        invite: {
            method: 'POST',
            params: {
                action: 'invite'
            }
        },
        uri_earners: {
            method: 'GET',
            params: {
                action: 'uri_earners'
            }
        },
        uri_payers: {
            method: 'GET',
            params: {
                action: 'uri_payers'
            }
        },
        domain: {
            method: 'GET',
            params: {
                action: 'domain'
            }
        },
        payers: {
            method: 'GET',
            params: {
                action: 'payers'
            }
        },
        roles: {
            method: 'GET',
            params: {
                action: 'roles'
            }
        },
        topEarners: {
            method: 'GET',
            params: {
                action: 'top_earners'
            }
        },
        paid: {
            method: 'GET',
            params: {
                action: 'paid'
            }
        },
        earned: {
            method: 'GET',
            params: {
                action: 'earned'
            }
        },
        domainEarners: {
            method: 'GET',
            params: {
                action: 'domain_earners'
            }
        },
        persons: {
            method: 'GET'
        },
        personsRecipients: {
            method: 'GET',
            params: {
                action: 'recipients'
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
        info: {
            method: 'GET',
            params: {
                action: 'info'
            }
        }
    });
});

angular.module('mobbrApi').factory('MobbrUser', function ($resource, $injector, mobbrConfig) {

    var mobbrSession;

    try {
        mobbrSession = $injector.get('mobbrSession');
    } catch (err) {
        mobbrSession = undefined;
    }

    function setUser(response) {
        if (mobbrSession && (response.status === 200 || response.status === 201)) {
            mobbrSession.setUser(response.data.result);
        }
        return response;
    }

    function unsetUser(response) {
        if (mobbrSession && (response.status === 200 || response.status === 201)) {
            mobbrSession.unsetUser();
        }
        return response;
    }

    return $resource(mobbrConfig.url + 'user/:action', {}, {
        passwordLogin: {
            method: 'PUT',
            params: {
                action: 'password_login'
            },
            interceptor: {
                response: setUser
            }
        },
        linkLogin: {
            method: 'PUT',
            params: {
                action: 'link_login'
            },
            interceptor: {
                response: setUser
            }
        },
        updateUser: {
            method: 'POST',
            params: {
                action: 'update_user'
            },
            interceptor: {
                response: setUser
            }
        },
        logout: {
            method: 'DELETE',
            params: {
                action: 'logout'
            },
            interceptor: {
                response: unsetUser
            }
        },
        ping: {
            method: 'GET',
            params: {
                action: 'ping'
            }
        },
        sendLoginLink: {
            method: 'GET',
            params: {
                action: 'send_login_link'
            }
        },
        register: {
            method: 'PUT',
            params: {
                action: 'register_user_send_login_link'
            }
        },
        updateEmail: {
            method: 'POST',
            params: {
                action: 'update_email'
            }
        },
        confirmEmail: {
            method: 'POST',
            params: {
                action: 'confirm_email'
            },
            interceptor: {
                response: setUser
            }
        },
        updatePassword: {
            method: 'POST',
            params: {
                action: 'update_password'
            }
        },
        uploadIdentityProof: {
            method: 'POST',
            params: {
                action: 'upload_identity_proof'
            },
            interceptor: {
                response: setUser
            }
        },
        profileStatus: {
            method: 'GET',
            params: {
                action: 'profile_status'
            }
        },
        currencies: {
            method: 'GET',
            params: {
                action: 'currencies'
            }
        },
        deleteUser: {
            method: 'DELETE',
            params: {
                action: 'user'
            }
        },
        oAuthUrl: {
            method: 'GET',
            params: {
                action: 'oauth_url'
            }
        },
        confirmOauthId: {
            method: 'PUT',
            params: {
                action: 'oauth_id'
            },
            interceptor: {
                response: setUser
            }
        },
        deleteUserId: {
            method: 'DELETE',
            params: {
                action: 'id'
            },
            interceptor: {
                response: setUser
            }
        },
        addEmailId: {
            method: 'POST',
            params: {
                action: 'email_id'
            }
        },
        addPublicId: {
            method: 'PUT',
            params: {
                action: 'public_id'
            }
        },
        confirmEmailId: {
            method: 'PUT',
            params: {
                action: 'confirm_email_id'
            },
            interceptor: {
                response: setUser
            }
        }

    });
});

angular.module('mobbrApi').factory('MobbrXPayment', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.url + 'xpayments/:action', {}, {
        info: {
            method: 'GET',
            params: {
                action: 'info'
            }
        },
        withdraw: {
            method: 'POST',
            params: {
                action: 'withdraw'
            }
        },
        deposit: {
            method: 'POST',
            params: {
                action: 'deposit'
            }
        },
        supportedCurrencies: {
            method: 'GET',
            params: {
                action: 'list_addresses'
            }
        },
        newAccountAddress: {
            method: 'PUT',
            params: {
                action: 'new_account_address'
            }
        },
        urlAddres: {
            method: 'GET',
            params: {
                action: 'url_addres'
            }
        },
        withdrawFee: {
            method: 'POST',
            params: {
                action: 'withdraw_fee'
            }
        },
        depositFee: {
            method: 'POST',
            params: {
                action: 'deposit_fee'
            }
        }
    });
});
    }
));