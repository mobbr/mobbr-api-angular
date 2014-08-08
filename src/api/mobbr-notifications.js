angular.module('mobbrApi').factory('MobbrNotifications', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.url + 'notifications/:action', {}, {
        user: {
            method: 'GET',
            params : {
                action: 'user'
            }
        },
        delete: {
            method: 'DELETE',
            params : {
                action: 'user'
            }
        }
    });
});
