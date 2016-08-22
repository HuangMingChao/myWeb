angular.module("Login", ['ngCookies']).controller("loginController", ["$scope", "$cookies", "$compile", function($scope, $cookies) {
    var vm = $scope.vm = {};
    //===================================================
    //=================登录的数据校验=====================
    //===================================================
    $scope.check = function() {
            if (($scope.loginForm.username.$error.required && $scope.loginForm.username.$dirty) || ($scope.loginForm.password.$error.required && $scope.loginForm.password.$dirty)) {
                if ($scope.loginForm.$error.loginFail) {
                    $scope.loginForm.$setValidity("loginFail", true);
                }
                if ($scope.loginForm.$error.connectError)
                    $scope.loginForm.$setValidity("connectError", true);
                return true;
            } else {
                return false;
            }
        }
        //===================================================
        //================= 表单提交登录 =====================
        //===================================================
    $scope.loginSubmit = function(form) {
        $.ajax({
            url: "http://localhost:8088/data/login.json",
            type: "GET",
            dataType: "json",
            async: false,
            success: function(data) {
                //TODO   当后台返回成功或失败信息时，进行转跳或者报错


                //================================================
                if (data.username == form.username && data.userpass == form.userpassword) {
                    console.log("登录成功");
                } else {
                    $scope.loginForm.$setValidity("loginFail", false);
                }
            },
            error: function(error) {
                $scope.loginForm.$setValidity("connectError", false);
            }
        });
    }
}]);