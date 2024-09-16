import{
    testObject,
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
} from "./objects.js"


console.log(keys(testObject)); 


console.log(values(testObject));


const transformed = mapObject(testObject,
    function(value){
      return typeof value === 'string' ? value.toUpperCase() : value*2;
    }
  );
  
console.log(transformed);

console.log(pairs(testObject));

console.log(invert(testObject));

console.log(defaults(testObject));