angular.module('mobbrApi').factory('MobbrUser', function ($resource, $injector, mobbrConfig) {

    var mobbrSession;

    try {
        mobbrSession = $injector.get('mobbrSession');
    } catch (err) {
        mobbrSession = undefined;
    }

    function setUser(response) {
        if (mobbrSession && (response.status === 200 || response.status === 201)) {
            mobbrSession.setUser(response.data.result);
        }
        return response;
    }

    function unsetUser(response) {
        if (mobbrSession && (response.status === 200 || response.status === 201)) {
            mobbrSession.unsetUser();
        }
        return response;
    }

    return $resource(mobbrConfig.url + 'user/:action', {}, {
        passwordLogin: {
            method: 'PUT',
            params: {
                action: 'password_login'
            },
            interceptor: {
                response: setUser
            }
        },
        linkLogin: {
            method: 'PUT',
            params: {
                action: 'link_login'
            },
            interceptor: {
                response: setUser
            }
        },
        updateUser: {
            method: 'POST',
            params: {
                action: 'update_user'
            },
            interceptor: {
                response: setUser
            }
        },
        logout: {
            method: 'DELETE',
            params: {
                action: 'logout'
            },
            interceptor: {
                response: unsetUser
            }
        },
        ping: {
            method: 'GET',
            params: {
                action: 'ping'
            }
        },
        sendLoginLink: {
            method: 'GET',
            params: {
                action: 'send_login_link'
            }
        },
        register: {
            method: 'PUT',
            params: {
                action: 'register_user_send_login_link'
            }
        },
        updateEmail: {
            method: 'POST',
            params: {
                action: 'update_email'
            }
        },
        confirmEmail: {
            method: 'POST',
            params: {
                action: 'confirm_email'
            }
        },
        updatePassword: {
            method: 'POST',
            params: {
                action: 'update_password'
            }
        },
        uploadIdentityProof: {
            method: 'POST',
            params: {
                action: 'upload_identity_proof'
            },
            interceptor: {
                response: setUser
            }
        },
        profileStatus: {
            method: 'GET',
            params: {
                action: 'profile_status'
            }
        },
        currencies: {
            method: 'GET',
            params: {
                action: 'currencies'
            }
        },
        deleteUser: {
            method: 'DELETE',
            params: {
                action: 'user'
            }
        },
        oAuthUrl: {
            method: 'GET',
            params: {
                action: 'oauth_url'
            }
        },
        setOauthId: {
            method: 'GET',
            params: {
                action: 'oauth_id'
            }
        },
        deleteUserId: {
            method: 'DELETE',
            params: {
                action: 'id'
            }
        },
        addEmailId: {
            method: 'POST',
            params: {
                action: 'email_id'
            }
        },
        confirmEmailId: {
            method: 'PUT',
            params: {
                action: 'confirm_email_id'
            }
        },
        addOauthId: {
            method: 'PUT',
            params: {
                action: 'oauth_id'
            }
        }

    });
});
