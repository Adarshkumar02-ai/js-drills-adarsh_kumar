import{
    findCarById,
    lastCar,
    carModels,
    getAllCarYears,
    countCarsOlderThan2000,
    getBMWandAudi,
} from "./solution.js"



findCarById(33);

const lcar = lastCar
console.log(`Last car is a ${lcar.car_make} ${lcar.car_model}`);

const models = carModels();
console.log(models);

console.log(getAllCarYears());

countCarsOlderThan2000();

getBMWandAudi();