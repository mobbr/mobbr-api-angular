angular.module('mobbrApi').factory('MobbrOneName', function ($resource) {

    return $resource('https://onename.io/:onenameId.json',{ callback: "JSON_CALLBACK" },
        {
            get: {
                method: 'JSONP'
            }
    });
});
