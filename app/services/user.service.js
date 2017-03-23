angular.module('user-service', []);

angular.module('user-service')
    .service('User', User);

    function User($http) {
        const create = userData => $http.post('/register', userData);

        const login = userData => $http.post('/login', userData);

        const getAllUsers = userData => $http.get('/users', userData);

        return {
            create,
            login,
            getAllUsers,
        }
    }
