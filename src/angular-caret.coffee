angular.module('Caret')

.service('Caret', ->
  return (element) ->
    return new Caret element[0]
)
