const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

const carsByMake2: string[][] = [];

//Help with inference when extracting values
const car = carsByMake2[0]; //string
const myCar = carsByMake2.pop(); //string

//Prevent incompatible values
carsByMake2.push(100);

//Help with 'map'
carMakers.map((car: string): string => {
  return car.toLowerCase();
});

//Flexible types

const importantDates: (Date | string)[] = [];

importantDates.push('2030-10-10');
importantDates.push(new Date());
importantDates.push(21);
