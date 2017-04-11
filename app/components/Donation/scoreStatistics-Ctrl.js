/**
 * Created by Abhinit on 8/18/2016.
 */
App.controller('StatsController', function ($scope, $http, $cookies, $cookieStore, $state) {
//console.log(MY_CONSTANT.url);
    $scope.changeValue = function(){
        console.log($scope.DonationValue);
        if($scope.DonationValue == null || $scope.DonationValue == undefined){
            alert("Please enter the donation ammount.")
        }else{
            var maxValue,allotedValue;
            maxValue = 200;
            allotedValue = ($scope.DonationValue/maxValue)*100;
            $('#progress-bar').css('width',allotedValue+"%").attr('aria-valuenow',$scope.DonationValue);
        }
    }
    $scope.SubmitValue = function(){
        alert("congrats you have donated"+"$"+$scope.DonationValue);
    };
//    ======================================= New Chart ==================================== //

});
