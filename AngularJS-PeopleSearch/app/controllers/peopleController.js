(function () {
    "use strict";
    angular
        .module("peopleSearch")
        .controller("searchCtrl",
                     ["$scope", "$http", PeopleSearch]);

    function PeopleSearch($scope, $http) {

        var ppl = this;
        ppl.searchText = '';

        //  Load JSON Data
        $http.get('app/data/data.json').success(function (data) {
            ppl.pplData = data;
        });

        // Search on text change
        $scope.getData = function () {
            filterData();
        };
        
        // Search on click button
        $scope.applyFilter = function () {
            filterData();
        };

        // Filter search data 
        function filterData() {
            if (ppl.searchText == '') {
                ppl.people = null;
            }
            else {
                ppl.people = ppl.pplData;
            }
        }
    }

}());