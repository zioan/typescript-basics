// object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//tuple (array looking data type) -> the order inside is very specific / important
const pepsi: [string, boolean, number] = ['brown', true, 40];

//type alias
type Drink = [string, boolean, number];

const cola: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 25];
const tea: Drink = ['red', false, 0];

// ?
const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
};
