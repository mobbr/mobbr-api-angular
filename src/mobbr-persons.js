angular.module('mobbrApi').factory('MobbrPerson', function ($resource, mobbrApi) {

    return $resource(mobbrApi.getApiUrl() + 'persons/:action', {}, {});
});

