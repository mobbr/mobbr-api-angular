angular.module('mobbrApi', [ 'ngResource', 'ngStorage' ]).factory('mobbrConfig', function ($httpProvider, $localStorage, $rootScope, apiUrl) {

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
                $rootScope.$mobbrStorage.token = undefined;
                $rootScope.$mobbrStorage.user = undefined;
            },
            url: apiUrl + '/api_v1/',
            messages: []
        };

    function emit() {
        $rootScope.$broadcast('mobbrApi:authenticate', $rootScope.$mobbrStorage.user);
    }

    $httpProvider.interceptors.push('mobbrInterceptor');
    $rootScope.$mobbrStorage = $localStorage;
    $rootScope.$watch('$mobbrStorage.token', emit);
    $rootScope.$watch('$mobbrStorage.user', emit, true);

    return mobbrConfig;
});