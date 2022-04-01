myModule.controller("myTaskCtrl", function ($scope) {

    $scope.submitClick = function () {
        console.log($scope.newUser)
     
        if ($scope.newUser == undefined || $scope.newUser.email == undefined || $scope.newUser.password == undefined || $scope.newUser.rePassword == undefined) {
            alert("Please Enter Valid information")

        }

    };
});
