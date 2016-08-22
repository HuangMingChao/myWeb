angular.module("Login", ['ngCookies']).controller("loginController", ["$scope", "$cookies", "$compile", function($scope, $cookies) {
    var vm = $scope.vm = {};
    $scope.loginSubmit = function(form) {
        //console.log(form);
        $.ajax({
            url: "http://localhost:8088/data/login.json",
            type: "GET",
            //data: form,
            dataType: "json",
            async: false,
            success: function(data) {
                console.log(data);
                console.log(form);
                if (data.username == form.username && data.userpass == form.userpassword) {
                    console.log("登录成功");
                } else {

                    console.log("登录失败");
                }
            },
            error: function(error) {
                console.log("网络连接错误");
            }
        });
    }
}]);
angular.module("Login").directive("passValidte", ['$compile', function($compile) {
    return {
        restrict: 'A',
        require: "ngModel",
        scope: {},
        link: function(scope, element, attrs, ngModel) {
            scope.valid2 = function() {
                // console.log(element);
                //console.log(scope.$new(true));

                element.on("focus", function() {
                    return false;
                });
                if (ngModel.$dirty && ngModel.$isEmpty(ngModel.$modelValue)) {
                    ngModel.$setValidity("inputEmpty", false);
                    return true;
                } else {
                    ngModel.$setValidity("inputEmpty", true);
                    return false;
                }
            }
            var hint = $compile("<span ng-if='valid2()'><span class ='errorInfo redWhiteColor'><i class ='fa fa-info fa-lg'></i></span><span class ='errorText'> 输入不能不能为空</span></span>")(scope);
            // console.log(hint);
            $("#errorInfo").html(" ");
            $("#errorInfo").html(hint);
        }
    }
}])