(function() {
  angular.module('Caret').service('Caret', function() {
    return function(element) {
      return new Caret(element[0]);
    };
  });

}).call(this);
