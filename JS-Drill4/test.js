import {
    items,
    each,
    map,
    reduce,
    find,
    filter,
    nestedArray,
    flatten,
} from "./arrays.js"


each(items, (item, index) => {
    console.log(`Item at index ${index} : ${item}`)});


console.log("map:", map(items, item => item * 2));


const reduced = reduce(items,
    function(acc,item){
      return acc+item;
    },0);
console.log(reduced);



const found = find(items,
    function(item){
      return item>2;
    }
  );
console.log(found);




const filtered = filter(items,
    function(item){
      return item%2 === 0;
    }
   );
console.log(filtered);



const flatArray = flatten(nestedArray);
console.log(flatArray);