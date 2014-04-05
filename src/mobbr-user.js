angular.module('mobbrApi').factory('MobbrUser', function ($resource, mobbrConfig) {

    function setUser(response) {
        if (response.status === 200 || response.status === 201) {
            mobbrConfig.setUser(response.data.result);
        }
        return response;
    }

    function unsetUser(response) {
        if (response.status === 200 || response.status === 201) {
            mobbrConfig.unsetUser();
        }
        return response;
    }

    return $resource(mobbrConfig.url + 'user/:action', {}, {
        passwordLogin: {
            method: 'PUT',
            params : {
                action: 'password_login'
            },
            interceptor: {
                response: setUser
            }
        },
        linkLogin: {
            method: 'PUT',
            params : {
                action: 'link_login'
            },
            interceptor: {
                response: setUser
            }
        },
        updateUser: {
            method: 'POST',
            params : {
                action: 'update_user'
            },
            interceptor: {
                response: setUser
            }
        },
        logout: {
            method: 'DELETE',
            params : {
                action: 'logout'
            },
            interceptor: {
                response: unsetUser
            }
        },
        ping: {
            method: 'GET',
            params : {
                action: 'ping'
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
        updatePassword: {
            method: 'POST',
            params : {
                action: 'update_password'
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
