function receivesAFunction(callback) {
    
    callback();
  }
  function returnsANamedFunction() {
    // Define a named function
    function namedFunction() {
      // This function doesn't have to do anything specific
      // You can add some logic here if needed
    }
  
    // Return the named function
    return namedFunction;
  }
  function returnsAnAnonymousFunction() {
    return function(){

    }
  }
 
  