

angular.module('login')
    .controller('LoginCtrl', function LoginCtrl(User) {
        console.log('Login loaded');

        this.login = userData => {
            User.login(userData)
                .then(result => {
                    console.log(result);
                })
                .catch(error => {
                    console.error;
                });
        }
    });
