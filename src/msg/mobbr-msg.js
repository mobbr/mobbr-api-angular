angular.module('mobbrMsg', [ 'mobbrApi' ]).factory('mobbrMsg', function () {

    var msg = {
        messages: [],
        close: function (i) {
            msg.messages.splice(i, 1);
        }
    };

    return msg;

}).config(function ($httpProvider) {
    $httpProvider.interceptors.push('mobbrMsgInterceptor');
});