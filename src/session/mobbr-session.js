angular.module('mobbrSession', [ 'mobbrApi' ]).factory('mobbrSession', function ($localStorage, $rootScope, $window, $injector) {

    var MobbrUser;

    $rootScope.$mobbrStorage = $localStorage;
    $rootScope.$watch('$mobbrStorage.token', function (newValue, oldValue) {
        if (newValue) {
            MobbrUser = MobbrUser || $injector.get('MobbrUser');
            MobbrUser.ping();
        }
        $rootScope.$broadcast('mobbrApi:authchange', $rootScope.$mobbrStorage.user);
    });

    return {
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
        isAuthorized: function () {
            return $rootScope.$mobbrStorage.token && true || false;
        },
        getAuthorization: function () {
            return 'Basic ' + $window.btoa(':' + $rootScope.$mobbrStorage.token);
        }
    }

}).config(function ($httpProvider) {
    $httpProvider.interceptors.push('mobbrSessionInterceptor');
});