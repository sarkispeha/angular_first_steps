var myApp = angular.module("myApp", []);

myApp.controller('mainController', ['$scope', function($scope){

	$scope.name = 'Sark';

}]);

myApp.controller('controller2', ['$scope', '$filter', function($scope, $filter){

		$scope.handle = '';

		$scope.lowerCase = function(){
			return $filter('lowercase')($scope.handle);
		}

}]);