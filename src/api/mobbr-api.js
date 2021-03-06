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
