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
