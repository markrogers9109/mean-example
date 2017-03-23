'use strict';

;(function () {
  "use strict";

  angular.module('app', ['templates', 'ui.router', 'welcome', 'login', 'register', 'user-service']).config(["$urlRouterProvider", "$stateProvider", function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/register');
  }]).run(function () {});
})();
'use strict';

;(function () {
  "use strict";

  angular.module('register', []);

  angular.module('register').config(["$stateProvider", function ($stateProvider) {
    $stateProvider.state('register', {
      url: '/register',
      controller: 'RegisterCtrl',
      templateUrl: 'register/register.html',
      controllerAs: 'register'
    });
  }]);
})();
'use strict';

;(function () {
  "use strict";

  angular.module('login', []);

  angular.module('login').config(["$stateProvider", function ($stateProvider) {
    $stateProvider.state('login', {
      url: '/login',
      controller: 'LoginCtrl',
      templateUrl: 'login/login.html',
      controllerAs: 'login'
    });
  }]);
})();
'use strict';

;(function () {
  "use strict";

  angular.module('welcome', []);

  angular.module('welcome').controller('WelcomeCtrl', WelcomeCtrl).config(["$stateProvider", function ($stateProvider) {
    $stateProvider.state('welcome', {
      url: '/welcome',
      controller: 'WelcomeCtrl',
      templateUrl: 'welcome/welcome.html',
      controllerAs: 'welcome'
    });
  }]);

  function WelcomeCtrl() {
    this.message = 'Bitwise Says Hello.';
  }
})();
'use strict';

;(function () {
    "use strict";

    angular.module('register').controller('RegisterCtrl', ["User", function RegisterCtrl(User) {
        var _this = this;

        console.log('Register loaded');

        this.register = function (userData) {
            User.create(userData).then(function (user) {
                console.log(user);
            }).catch(function (error) {
                console.error;
            });
        };
        User.getAllUsers().then(function (users) {
            _this.users = users.data;
            console.log(users);
        });
    }]);
})();
'use strict';

;(function () {
    "use strict";

    User.$inject = ["$http"];
    angular.module('user-service', []);

    angular.module('user-service').service('User', User);

    function User($http) {
        var create = function create(userData) {
            return $http.post('/register', userData);
        };

        var login = function login(userData) {
            return $http.post('/login', userData);
        };

        var getAllUsers = function getAllUsers(userData) {
            return $http.get('/users', userData);
        };

        return {
            create: create,
            login: login,
            getAllUsers: getAllUsers
        };
    }
})();
'use strict';

;(function () {
    "use strict";

    angular.module('login').controller('LoginCtrl', ["User", function LoginCtrl(User) {
        console.log('Login loaded');

        this.login = function (userData) {
            User.login(userData).then(function (result) {
                console.log(result);
            }).catch(function (error) {
                console.error;
            });
        };
    }]);
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImFwcC5tb2R1bGUuanMiLCJyZWdpc3Rlci9tb2R1bGUuanMiLCJsb2dpbi9tb2R1bGUuanMiLCJ3ZWxjb21lL21vZHVsZS5qcyIsInJlZ2lzdGVyL3JlZ2lzdGVyLmNvbnRyb2xsZXIuanMiLCJzZXJ2aWNlcy91c2VyLnNlcnZpY2UuanMiLCJsb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25maWciLCIkdXJsUm91dGVyUHJvdmlkZXIiLCIkc3RhdGVQcm92aWRlciIsIm90aGVyd2lzZSIsInJ1biIsInN0YXRlIiwidXJsIiwiY29udHJvbGxlciIsInRlbXBsYXRlVXJsIiwiY29udHJvbGxlckFzIiwiV2VsY29tZUN0cmwiLCJtZXNzYWdlIiwiUmVnaXN0ZXJDdHJsIiwiVXNlciIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlciIsImNyZWF0ZSIsInVzZXJEYXRhIiwidGhlbiIsInVzZXIiLCJjYXRjaCIsImVycm9yIiwiZ2V0QWxsVXNlcnMiLCJ1c2VycyIsImRhdGEiLCJzZXJ2aWNlIiwiJGh0dHAiLCJwb3N0IiwibG9naW4iLCJnZXQiLCJMb2dpbkN0cmwiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBLENBQUUsQ0FBQSxZQUFXO0VBQ2I7O0VBRUFBLFFBQVFDLE9BQU8sT0FBTyxDQUNsQixhQUNBLGFBQ0EsV0FDQSxTQUNBLFlBQ0EsaUJBRURDLGdEQUFPLFVBQVVDLG9CQUFvQkMsZ0JBQWdCO0lBQ3BERCxtQkFBbUJFLFVBQVU7TUFFOUJDLElBQUksWUFBWTs7QURMbkI7O0FFVEEsQ0FBRSxDQUFBLFlBQVc7RUFDYjs7RUFFQU4sUUFBUUMsT0FBTyxZQUFZOztFQUUzQkQsUUFBUUMsT0FBTyxZQUNaQywwQkFBTyxVQUFBLGdCQUFrQjtJQUN0QkUsZUFDR0csTUFBTSxZQUFZO01BQ2pCQyxLQUFLO01BQ0xDLFlBQVk7TUFDWkMsYUFBYTtNQUNiQyxjQUFjOzs7O0FGYXhCOztBR3pCQSxDQUFFLENBQUEsWUFBVztFQUNiOztFQUVBWCxRQUFRQyxPQUFPLFNBQVM7O0VBRXhCRCxRQUFRQyxPQUFPLFNBQ1pDLDBCQUFPLFVBQUEsZ0JBQWtCO0lBQ3RCRSxlQUNHRyxNQUFNLFNBQVM7TUFDZEMsS0FBSztNQUNMQyxZQUFZO01BQ1pDLGFBQWE7TUFDYkMsY0FBYzs7OztBSDZCeEI7O0FJekNBLENBQUUsQ0FBQSxZQUFXO0VBQ2I7O0VBRUFYLFFBQVFDLE9BQU8sV0FBVzs7RUFFMUJELFFBQVFDLE9BQU8sV0FDWlEsV0FBVyxlQUFlRyxhQUMxQlYsMEJBQU8sVUFBQSxnQkFBa0I7SUFDdEJFLGVBQ0dHLE1BQU0sV0FBVztNQUNoQkMsS0FBSztNQUNMQyxZQUFZO01BQ1pDLGFBQWE7TUFDYkMsY0FBYzs7OztFQUl4QixTQUFTQyxjQUFjO0lBQ3JCLEtBQUtDLFVBQVU7OztBSjJDakI7O0FLN0RBLENBQUUsQ0FBQSxZQUFXO0lBQ2I7O0lBRUFiLFFBQVFDLE9BQU8sWUFDVlEsV0FBVyx5QkFBZ0IsU0FBU0ssYUFBYUMsTUFBTTtRQUFBLElBQUEsUUFBQTs7UUFDcERDLFFBQVFDLElBQUk7O1FBRVosS0FBS0MsV0FBVyxVQUFBLFVBQVk7WUFDeEJILEtBQUtJLE9BQU9DLFVBQ1BDLEtBQUssVUFBQSxNQUFRO2dCQUNWTCxRQUFRQyxJQUFJSztlQUVmQyxNQUFNLFVBQUEsT0FBUztnQkFDWlAsUUFBUVE7OztRQUdwQlQsS0FBS1UsY0FDQUosS0FBSyxVQUFBLE9BQVM7WUFDWCxNQUFLSyxRQUFRQSxNQUFNQztZQUNuQlgsUUFBUUMsSUFBSVM7Ozs7QUxpRTVCOztBTXBGQSxDQUFFLENBQUEsWUFBVztJQUNiOzs7SUFFQTFCLFFBQVFDLE9BQU8sZ0JBQWdCOztJQUUvQkQsUUFBUUMsT0FBTyxnQkFDVjJCLFFBQVEsUUFBUWI7O0lBRWpCLFNBQVNBLEtBQUtjLE9BQU87UUFDakIsSUFBTVYsU0FBUyxTQUFUQSxPQUFTLFVBQUE7WUFBQSxPQUFZVSxNQUFNQyxLQUFLLGFBQWFWOzs7UUFFbkQsSUFBTVcsUUFBUSxTQUFSQSxNQUFRLFVBQUE7WUFBQSxPQUFZRixNQUFNQyxLQUFLLFVBQVVWOzs7UUFFL0MsSUFBTUssY0FBYyxTQUFkQSxZQUFjLFVBQUE7WUFBQSxPQUFZSSxNQUFNRyxJQUFJLFVBQVVaOzs7UUFFcEQsT0FBTztZQUNIRCxRQUFBQTtZQUNBWSxPQUFBQTtZQUNBTixhQUFBQTs7OztBTitGWjs7QU9qSEEsQ0FBRSxDQUFBLFlBQVc7SUFDYjs7SUFFQXpCLFFBQVFDLE9BQU8sU0FDVlEsV0FBVyxzQkFBYSxTQUFTd0IsVUFBVWxCLE1BQU07UUFDOUNDLFFBQVFDLElBQUk7O1FBRVosS0FBS2MsUUFBUSxVQUFBLFVBQVk7WUFDckJoQixLQUFLZ0IsTUFBTVgsVUFDTkMsS0FBSyxVQUFBLFFBQVU7Z0JBQ1pMLFFBQVFDLElBQUlpQjtlQUVmWCxNQUFNLFVBQUEsT0FBUztnQkFDWlAsUUFBUVE7Ozs7S0FiM0IiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG47KGZ1bmN0aW9uICgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2FwcCcsIFsndGVtcGxhdGVzJywgJ3VpLnJvdXRlcicsICd3ZWxjb21lJywgJ2xvZ2luJywgJ3JlZ2lzdGVyJywgJ3VzZXItc2VydmljZSddKS5jb25maWcoZnVuY3Rpb24gKCR1cmxSb3V0ZXJQcm92aWRlciwgJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvcmVnaXN0ZXInKTtcbiAgfSkucnVuKGZ1bmN0aW9uICgpIHt9KTtcbn0pKCk7XG4ndXNlIHN0cmljdCc7XG5cbjsoZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBhbmd1bGFyLm1vZHVsZSgncmVnaXN0ZXInLCBbXSk7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ3JlZ2lzdGVyJykuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdyZWdpc3RlcicsIHtcbiAgICAgIHVybDogJy9yZWdpc3RlcicsXG4gICAgICBjb250cm9sbGVyOiAnUmVnaXN0ZXJDdHJsJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAncmVnaXN0ZXIvcmVnaXN0ZXIuaHRtbCcsXG4gICAgICBjb250cm9sbGVyQXM6ICdyZWdpc3RlcidcbiAgICB9KTtcbiAgfSk7XG59KSgpO1xuJ3VzZSBzdHJpY3QnO1xuXG47KGZ1bmN0aW9uICgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ2xvZ2luJywgW10pO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCdsb2dpbicpLmNvbmZpZyhmdW5jdGlvbiAoJHN0YXRlUHJvdmlkZXIpIHtcbiAgICAkc3RhdGVQcm92aWRlci5zdGF0ZSgnbG9naW4nLCB7XG4gICAgICB1cmw6ICcvbG9naW4nLFxuICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ3RybCcsXG4gICAgICB0ZW1wbGF0ZVVybDogJ2xvZ2luL2xvZ2luLmh0bWwnLFxuICAgICAgY29udHJvbGxlckFzOiAnbG9naW4nXG4gICAgfSk7XG4gIH0pO1xufSkoKTtcbid1c2Ugc3RyaWN0JztcblxuOyhmdW5jdGlvbiAoKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCd3ZWxjb21lJywgW10pO1xuXG4gIGFuZ3VsYXIubW9kdWxlKCd3ZWxjb21lJykuY29udHJvbGxlcignV2VsY29tZUN0cmwnLCBXZWxjb21lQ3RybCkuY29uZmlnKGZ1bmN0aW9uICgkc3RhdGVQcm92aWRlcikge1xuICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCd3ZWxjb21lJywge1xuICAgICAgdXJsOiAnL3dlbGNvbWUnLFxuICAgICAgY29udHJvbGxlcjogJ1dlbGNvbWVDdHJsJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnd2VsY29tZS93ZWxjb21lLmh0bWwnLFxuICAgICAgY29udHJvbGxlckFzOiAnd2VsY29tZSdcbiAgICB9KTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gV2VsY29tZUN0cmwoKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gJ0JpdHdpc2UgU2F5cyBIZWxsby4nO1xuICB9XG59KSgpO1xuJ3VzZSBzdHJpY3QnO1xuXG47KGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdyZWdpc3RlcicpLmNvbnRyb2xsZXIoJ1JlZ2lzdGVyQ3RybCcsIGZ1bmN0aW9uIFJlZ2lzdGVyQ3RybChVc2VyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ1JlZ2lzdGVyIGxvYWRlZCcpO1xuXG4gICAgICAgIHRoaXMucmVnaXN0ZXIgPSBmdW5jdGlvbiAodXNlckRhdGEpIHtcbiAgICAgICAgICAgIFVzZXIuY3JlYXRlKHVzZXJEYXRhKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlcik7XG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIFVzZXIuZ2V0QWxsVXNlcnMoKS50aGVuKGZ1bmN0aW9uICh1c2Vycykge1xuICAgICAgICAgICAgX3RoaXMudXNlcnMgPSB1c2Vycy5kYXRhO1xuICAgICAgICAgICAgY29uc29sZS5sb2codXNlcnMpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pKCk7XG4ndXNlIHN0cmljdCc7XG5cbjsoZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgYW5ndWxhci5tb2R1bGUoJ3VzZXItc2VydmljZScsIFtdKTtcblxuICAgIGFuZ3VsYXIubW9kdWxlKCd1c2VyLXNlcnZpY2UnKS5zZXJ2aWNlKCdVc2VyJywgVXNlcik7XG5cbiAgICBmdW5jdGlvbiBVc2VyKCRodHRwKSB7XG4gICAgICAgIHZhciBjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUodXNlckRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvcmVnaXN0ZXInLCB1c2VyRGF0YSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGxvZ2luID0gZnVuY3Rpb24gbG9naW4odXNlckRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvbG9naW4nLCB1c2VyRGF0YSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGdldEFsbFVzZXJzID0gZnVuY3Rpb24gZ2V0QWxsVXNlcnModXNlckRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiAkaHR0cC5nZXQoJy91c2VycycsIHVzZXJEYXRhKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3JlYXRlOiBjcmVhdGUsXG4gICAgICAgICAgICBsb2dpbjogbG9naW4sXG4gICAgICAgICAgICBnZXRBbGxVc2VyczogZ2V0QWxsVXNlcnNcbiAgICAgICAgfTtcbiAgICB9XG59KSgpO1xuJ3VzZSBzdHJpY3QnO1xuXG47KGZ1bmN0aW9uICgpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGFuZ3VsYXIubW9kdWxlKCdsb2dpbicpLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uIExvZ2luQ3RybChVc2VyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBsb2FkZWQnKTtcblxuICAgICAgICB0aGlzLmxvZ2luID0gZnVuY3Rpb24gKHVzZXJEYXRhKSB7XG4gICAgICAgICAgICBVc2VyLmxvZ2luKHVzZXJEYXRhKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH0pO1xufSkoKTsiLCI7KGZ1bmN0aW9uKCkge1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbXG4gICAgJ3RlbXBsYXRlcycsXG4gICAgJ3VpLnJvdXRlcicsXG4gICAgJ3dlbGNvbWUnLFxuICAgICdsb2dpbicsXG4gICAgJ3JlZ2lzdGVyJyxcbiAgICAndXNlci1zZXJ2aWNlJ1xuICBdKVxuICAuY29uZmlnKGZ1bmN0aW9uICgkdXJsUm91dGVyUHJvdmlkZXIsICRzdGF0ZVByb3ZpZGVyKSB7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3JlZ2lzdGVyJyk7XG4gIH0pXG4gIC5ydW4oZnVuY3Rpb24gKCkge1xuXG4gIH0pO1xufSgpKTtcbiIsIjsoZnVuY3Rpb24oKSB7XG5cInVzZSBzdHJpY3RcIjtcblxuYW5ndWxhci5tb2R1bGUoJ3JlZ2lzdGVyJywgW10pO1xuXG5hbmd1bGFyLm1vZHVsZSgncmVnaXN0ZXInKVxuICAuY29uZmlnKCRzdGF0ZVByb3ZpZGVyID0+IHtcbiAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgIC5zdGF0ZSgncmVnaXN0ZXInLCB7XG4gICAgICAgICAgdXJsOiAnL3JlZ2lzdGVyJyxcbiAgICAgICAgICBjb250cm9sbGVyOiAnUmVnaXN0ZXJDdHJsJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3JlZ2lzdGVyL3JlZ2lzdGVyLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3JlZ2lzdGVyJ1xuICAgICAgICB9KTtcbiAgfSk7XG59KCkpO1xuIiwiOyhmdW5jdGlvbigpIHtcblwidXNlIHN0cmljdFwiO1xuXG5hbmd1bGFyLm1vZHVsZSgnbG9naW4nLCBbXSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdsb2dpbicpXG4gIC5jb25maWcoJHN0YXRlUHJvdmlkZXIgPT4ge1xuICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgLnN0YXRlKCdsb2dpbicsIHtcbiAgICAgICAgICB1cmw6ICcvbG9naW4nLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwnLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbG9naW4vbG9naW4uaHRtbCcsXG4gICAgICAgICAgY29udHJvbGxlckFzOiAnbG9naW4nXG4gICAgICAgIH0pO1xuICB9KTtcbn0oKSk7XG4iLCI7KGZ1bmN0aW9uKCkge1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmFuZ3VsYXIubW9kdWxlKCd3ZWxjb21lJywgW10pO1xuXG5hbmd1bGFyLm1vZHVsZSgnd2VsY29tZScpXG4gIC5jb250cm9sbGVyKCdXZWxjb21lQ3RybCcsIFdlbGNvbWVDdHJsKVxuICAuY29uZmlnKCRzdGF0ZVByb3ZpZGVyID0+IHtcbiAgICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAgIC5zdGF0ZSgnd2VsY29tZScsIHtcbiAgICAgICAgICB1cmw6ICcvd2VsY29tZScsXG4gICAgICAgICAgY29udHJvbGxlcjogJ1dlbGNvbWVDdHJsJyxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3dlbGNvbWUvd2VsY29tZS5odG1sJyxcbiAgICAgICAgICBjb250cm9sbGVyQXM6ICd3ZWxjb21lJ1xuICAgICAgICB9KTtcbiAgfSk7XG5cbmZ1bmN0aW9uIFdlbGNvbWVDdHJsKCkge1xuICB0aGlzLm1lc3NhZ2UgPSAnQml0d2lzZSBTYXlzIEhlbGxvLic7XG59XG59KCkpO1xuIiwiOyhmdW5jdGlvbigpIHtcblwidXNlIHN0cmljdFwiO1xuXG5hbmd1bGFyLm1vZHVsZSgncmVnaXN0ZXInKVxuICAgIC5jb250cm9sbGVyKCdSZWdpc3RlckN0cmwnLCBmdW5jdGlvbiBSZWdpc3RlckN0cmwoVXNlcikge1xuICAgICAgICBjb25zb2xlLmxvZygnUmVnaXN0ZXIgbG9hZGVkJyk7XG5cbiAgICAgICAgdGhpcy5yZWdpc3RlciA9IHVzZXJEYXRhID0+IHtcbiAgICAgICAgICAgIFVzZXIuY3JlYXRlKHVzZXJEYXRhKVxuICAgICAgICAgICAgICAgIC50aGVuKHVzZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3I7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgVXNlci5nZXRBbGxVc2VycygpXG4gICAgICAgICAgICAudGhlbih1c2VycyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VycyA9IHVzZXJzLmRhdGE7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codXNlcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSk7XG59KCkpO1xuIiwiOyhmdW5jdGlvbigpIHtcblwidXNlIHN0cmljdFwiO1xuXG5hbmd1bGFyLm1vZHVsZSgndXNlci1zZXJ2aWNlJywgW10pO1xuXG5hbmd1bGFyLm1vZHVsZSgndXNlci1zZXJ2aWNlJylcbiAgICAuc2VydmljZSgnVXNlcicsIFVzZXIpO1xuXG4gICAgZnVuY3Rpb24gVXNlcigkaHR0cCkge1xuICAgICAgICBjb25zdCBjcmVhdGUgPSB1c2VyRGF0YSA9PiAkaHR0cC5wb3N0KCcvcmVnaXN0ZXInLCB1c2VyRGF0YSk7XG5cbiAgICAgICAgY29uc3QgbG9naW4gPSB1c2VyRGF0YSA9PiAkaHR0cC5wb3N0KCcvbG9naW4nLCB1c2VyRGF0YSk7XG5cbiAgICAgICAgY29uc3QgZ2V0QWxsVXNlcnMgPSB1c2VyRGF0YSA9PiAkaHR0cC5nZXQoJy91c2VycycsIHVzZXJEYXRhKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3JlYXRlLFxuICAgICAgICAgICAgbG9naW4sXG4gICAgICAgICAgICBnZXRBbGxVc2VycyxcbiAgICAgICAgfVxuICAgIH1cbn0oKSk7XG4iLCI7KGZ1bmN0aW9uKCkge1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmFuZ3VsYXIubW9kdWxlKCdsb2dpbicpXG4gICAgLmNvbnRyb2xsZXIoJ0xvZ2luQ3RybCcsIGZ1bmN0aW9uIExvZ2luQ3RybChVc2VyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBsb2FkZWQnKTtcblxuICAgICAgICB0aGlzLmxvZ2luID0gdXNlckRhdGEgPT4ge1xuICAgICAgICAgICAgVXNlci5sb2dpbih1c2VyRGF0YSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufSgpKTtcbiJdfQ==
