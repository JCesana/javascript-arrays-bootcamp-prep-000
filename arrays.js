var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var output = [];
  output = [element, ...array];
  
  return output;
}

function 