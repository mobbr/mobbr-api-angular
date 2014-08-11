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
                action: 'supported_currencies'
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
        }
    });
});
