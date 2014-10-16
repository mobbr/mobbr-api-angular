angular.module('mobbrApi').factory('MobbrNotifications', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.url + 'notifications/:action', {}, {});
});
