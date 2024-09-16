import inventory from "./cars.js";

// / ==== Problem #1 ====
// // The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
// ("Car 33 is a *car year goes here* *car make goes here* *car model goes here*");

function findCarById(id){
    let flag 
    for(let i=0; i<inventory.length;i++){
        if(inventory[i].id === id){
           flag = inventory[i];
        }
    }
    console.log(`car 33 is a ${flag.car_year} ${flag.car_make} ${flag.car_model}`);

}
findCarById(33);




// // ==== Problem #2 ====
// // The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
// ("Last car is a *car make goes here* *car model goes here*");

function lastCar(){
    let last = inventory[inventory.length-1];
        return last;
}
const lcar = lastCar
console.log(`Last car is a ${lcar.car_make} ${lcar.car_model}`);




// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function carModels(){
    const result=[];
    for(let i=0; i<inventory.length; i++){
        result.push(inventory[i].car_model);
    }
// Bubble Sort Method    

for(let i=0; i<result.length;i++){
    for(let j=0; j<result.length-1;j++){
        if(result[j] > result[j+1]){
            const temp = result[j];
            result[j] = result[j+1];
            result[j+1] = temp;
        }
    }
}
return result;

}
const models = carModels();
console.log(models);




// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

function getAllCarYears(){
    const result=[];
    for(let i=0; i<inventory.length;i++){
      result.push(inventory[i].car_year);
    }
    return result;
}
console.log(getAllCarYears());