uis.directive('uiSelectHeader', ['uiSelectConfig', function (uiSelectConfig) {
  return {
    template: '<div class="ui-select-header" ng-transclude></div>',
    restrict: 'EA',
    transclude: true,
    replace: true
  };
}]);
