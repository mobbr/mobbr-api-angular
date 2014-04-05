angular.module('mobbrApi', [ 'ngResource', 'ngStorage' ]).factory('mobbrConfig', function ($localStorage, $rootScope, apiUrl) {

    var user,
        token,
        mobbrConfig = {
            setUser: function (user) {
                if (user.token) {
                    $rootScope.$mobbrStorage.token = user.token;
                    delete user.token;
                }
                $rootScope.$mobbrStorage.user = user;
            },
            unsetUser: function () {
                delete $rootScope.$mobbrStorage.token;
                delete $rootScope.$mobbrStorage.user;
            },
            url: apiUrl + '/api_v1/',
            messages: []
        };

    function emit() {
        $rootScope.$broadcast('mobbrApi:authchange', $rootScope.$mobbrStorage.user);
    }

    $rootScope.$mobbrStorage = $localStorage;
    $rootScope.$watch('$mobbrStorage.token', emit);

    return mobbrConfig;

}).config(function ($httpProvider) {
    $httpProvider.interceptors.push('mobbrInterceptor');
});