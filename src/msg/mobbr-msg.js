angular.module('mobbrMsg', [ 'mobbrApi' ]).factory('mobbrMsg', function () {

    var msg = {
        messages: [],
        add: function (message, timeout) {

            msg.messages.push(message);

            if (timeout !== false) {
                $timeout(function(){
                    msg.close(msg.messages.indexOf(message));
                }, timeout || 5000);
            }
        },
        close: function (i) {
            msg.messages.splice(i, 1);
        }
    };

    return msg;

}).config(function ($httpProvider) {
    $httpProvider.interceptors.push('mobbrMsgInterceptor');
});