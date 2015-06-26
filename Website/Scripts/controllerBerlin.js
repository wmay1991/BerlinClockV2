var berlinClock = new angular.module("berlinClock", []);
berlinClock.controller('clockController', ['$scope', '$interval', function ($scope, $interval) {
    $interval(function () {
        var d = new Date();
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var seconds = d.getSeconds();
        $scope.sec = GetSeconds(seconds);
        $scope.min = GetMinutesRow(minutes).split('');
        $scope.fiveMinutes = GetFiveMinutesRow(minutes).split('');
        $scope.hours = GetSingleHoursRow(hours).split('');
        $scope.fiveHours = GetFiveHoursRow(hours).split('');
    }, 1000
    );

}
]);