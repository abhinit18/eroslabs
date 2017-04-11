/**
 * Created by Abhinit on 8/18/2016.
 */
App.controller('StatsController', function ($scope, $http, $cookies, $cookieStore, $state) {
//console.log(MY_CONSTANT.url);
    $scope.SubmitValue = function(){
        console.log($scope.DonationValue);
        if($scope.DonationValue == null || $scope.DonationValue == undefined){
            alert("Please enter the donation ammount.")
        }else{
            var value = 0;
            $('#progress-bar').css('width',$scope.DonationValue*2).attr('aria-valuenow',$scope.DonationValue);
        }
    };
//    ======================================= New Chart ==================================== //

});