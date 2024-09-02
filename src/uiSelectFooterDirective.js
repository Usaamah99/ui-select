uis.directive('uiSelectFooter', ['uiSelectConfig', function (uiSelectConfig) {
  return {
    template: '<div class="ui-select-footer" ng-transclude></div>',
    restrict: 'EA',
    transclude: true,
    replace: true
  };
}]);
