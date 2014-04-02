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
