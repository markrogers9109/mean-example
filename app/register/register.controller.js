

angular.module('register')
    .controller('RegisterCtrl', function RegisterCtrl(User) {
        console.log('Register loaded');

        this.register = userData => {
            User.create(userData)
                .then(user => {
                    console.log(user);
                })
                .catch(error => {
                    console.error;
                });
        }
        User.getAllUsers()
            .then(users => {
                this.users = users.data;
                console.log(users);
            });
    });
