// import animals, {useAnimal} from "./data";

// console.log(animals);

// const [cat, dog] = animals;

// // console.log(cat.name);

// // const{name: catName , sound: catSound} = cat;
// // const{feeding:{food, water}} = cat;
// // console.log(food);
// // console.log(water);
// // console.log(catSound);
// // console.log(catName);

// const{name: dogName, sound: dogSound} = dog;
// console.log(dogName);
// console.log(dogSound);

// //console.log(useAnimal(cat));
// const [animal, makeSound] = useAnimal(cat);
// console.log(animal);
// makeSound();

// // CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice.js";

const [honda, tesla] = cars;
const {
  speedStats: { topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroSixty }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed, zeroToSixty: teslaZeroSixty }
} = tesla;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Zero To Sixty </th>
      <th>Top Colour </th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaZeroSixty}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaZeroSixty}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
