angular.module('mobbrApi').factory('MobbrUser', function ($resource, mobbrConfig) {

    return $resource(mobbrConfig.getApiUrl() + 'user/:action', {}, {
        ping: {
            method: 'GET',
            params : {
                action: 'ping'
            }
        },
        logout: {
            method: 'DELETE',
            params : {
                action: 'logout'
            }
        },
        passwordLogin: {
            method: 'PUT',
            params : {
                action: 'password_login'
            }
        },
        sendLoginLink: {
            method: 'GET',
            params : {
                action: 'send_login_link'
            }
        },
        register: {
            method: 'PUT',
            params : {
                action: 'register_user_send_login_link'
            }
        },
        updateEmail: {
            method: 'POST',
            params : {
                action: 'update_email'
            }
        },
        confirmEmail: {
            method: 'POST',
            params : {
                action: 'confirm_email'
            }
        },
        linkLogin: {
            method: 'PUT',
            params : {
                action: 'link_login'
            }
        },
        updatePassword: {
            method: 'POST',
            params : {
                action: 'update_password'
            }
        },
        updateUser: {
            method: 'POST',
            params : {
                action: 'update_user'
            }
        },
        uploadIdentityProof: {
            method: 'POST',
            params : {
                action: 'upload_identity_proof'
            }
        },
        profileStatus: {
            method: 'GET',
            params : {
                action: 'profile_status'
            }
        },
        currencies: {
            method: 'GET',
            params : {
                action: 'currencies'
            }
        }
    });
});
