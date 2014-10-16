angular.module('mobbrApi').factory('MobbrGravatar', function ($resource) {

    return $resource('https://nl.gravatar.com/:gravatarHash.json',{ callback: "JSON_CALLBACK" },
        {
            get: {
                method: 'JSONP'
            }
    });
});
