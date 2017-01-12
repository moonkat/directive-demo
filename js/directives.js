angular.module("splitchar", [])

.directive('splitchar', [function() {
  return {
    restrict: 'E',
    link: function(scope, elem, atts) {
      elem.splitchar(scope.$eval(atts.splitchar));
    }
  };
}]);

angular.module("fluidlabel", [])

.directive('fluidlabel', [function() {
  return {
    restrict: 'E',
    link: function(scope, elem, atts) {
      elem.fluidLabel(scope.$eval(atts.fluidlabel));
    }
  };
}]);
