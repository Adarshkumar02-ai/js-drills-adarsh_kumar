function counterFactory() {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let counter = 0; // Private variable

  return {
    increment() {
      counter += 1;
      return counter;
    },
    decrement() {
      counter -= 1;
      return counter;
    }
  };
}

const counter = counterFactory();
console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.decrement()); 


function limitFunctionCallCount(cb, n) {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  // Returning null is acceptable if cb can't be returned
  let callCount = 0; 

  return function(...args) {
    if (callCount < n) { 
      callCount++; 
      return cb(...args); 
    }
    return null; 
  };
}

function greeting(msg){
  return msg;
}

const limitedGreet = limitFunctionCallCount(greeting,2);

console.log(limitedGreet("Good Morning"));
console.log(limitedGreet("Good Afternoon"));
console.log(limitedGreet("Good Evening"));
console.log(limitedGreet("Good Night"));




function cacheFunction(cb) {
  // Should return a function that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  const cache = new Map(); 

  return function(...args) {
    const key = JSON.stringify(args); 

    if (cache.has(key)) { 
      return cache.get(key); 
    }

    const result = cb(...args); 
    cache.set(key, result); 
    return result; 
  };
}


function multiply(a, b) {
  console.log('Processing...'); 
  return a * b;
}

const cachedProd = cacheFunction(multiply);


console.log(cachedProd(1, 2)); 
console.log(cachedProd(1, 2)); 
console.log(cachedProd(2, 3)); 
