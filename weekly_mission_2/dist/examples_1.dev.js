"use strict";

// Ejemplo 1: for Each para imprimir elementos de una lista
var numbers = [1, 2, 3, 4, 5];
console.log("Ejemplo 1: Imprimiendo los elementos de una lista");
numbers.forEach(function (num) {
  return console.log(num);
}); // Ejemplo 2: for Each para calcular la suma de todos los elementos de una lista

var sum = 0;
var numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(function (num) {
  return sum += num;
});
console.log("Ejemplo 2: Cálculo de la suma de los elementos de la lista");
console.log(sum); // Ejemplo 3: forEach para imprimir los países en letras mayúsculas

var countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
console.log("Ejemplo 5: Imprimiendo la lista de países en mayúsculas");
countries.forEach(function (element) {
  return console.log(element.toUpperCase());
}); // Ejemplo 4: Uso de map para recorrer los elementos de una lista y crear una nueva lista

/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/

var numbers4 = [1, 2, 3, 4, 5];
var numbersSquare = numbers4.map(function (num) {
  return num * num;
}); // También puedes escribir la función como fat arrow
//const numbersSquare = numbers4.map((num) => return num * num)

console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado");
console.log(numbersSquare); // Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a mayúsculas

var names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
var namesToUpperCase = names.map(function (name) {
  return name.toUpperCase();
});
console.log("Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas");
console.log(namesToUpperCase); // Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas

var countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
var countriesFirstThreeLetters = countries6.map(function (country) {
  return country.toUpperCase().slice(0, 3);
} // el método slice obtiene solo la longitud marcada del string
);
console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas");
console.log(countriesFirstThreeLetters); // Ejemplo 7: Uso de filter para filtrar una lista de elementos

var countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
var countriesContainingLand = countries7.filter(function (country) {
  return (// esta es una función
    country.includes('land')
  );
} // indicación para solo filtrar elementos que incluyan "land"
);
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos");
console.log(countriesContainingLand);
var countriesEndsByia = countries.filter(function (country) {
  return country.endsWith('ia');
});
console.log("Ejemplo 7: Paises que terminan en i");
console.log(countriesEndsByia); // Ejemplo 8: Filtrar una lista por condicional

var scores = [{
  name: 'A',
  score: 95
}, {
  name: 'L',
  score: 98
}, {
  name: 'M',
  score: 80
}, {
  name: 'E',
  score: 50
}, {
  name: 'M',
  score: 85
}, {
  name: 'J',
  score: 100
}];
var scoresGreaterEighty = scores.filter(function (score) {
  return score.score > 80;
});
console.log("Ejemplo 8: Filtrando elementos por score");
console.log(scoresGreaterEighty); // Ejemplo 9: Uso del reduce

var numbers9 = [1, 2, 3, 4, 5];
var result_of_reduce = numbers9.reduce(function (acc, element) {
  return acc + element;
}, 0);
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista");
console.log(result_of_reduce); // Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false

var names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4'];
var areAllStr = names10.every(function (name) {
  return typeof name === 'string';
}); // every

console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr); // Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques

var ages = [24, 22, 19, 25, 32, 35, 18];
var age = ages.find(function (age) {
  return age < 20;
});
console.log("Ejemplo 11: Primera edad menor a 20 es: " + age); // Ejemplo 12: Uso de find en una lista de objetos

var scores12 = [{
  name: 'A',
  score: 95
}, {
  name: 'M',
  score: 80
}, {
  name: 'E',
  score: 50
}, {
  name: 'M',
  score: 85
}, {
  name: 'J',
  score: 100
}];
var score_less_than_80 = scores12.find(function (user) {
  return user.score > 80;
});
console.log("Ejemplo 12. Name score found:" + score_less_than_80.name); // Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.

var names13 = ['Explorer 1', 'Explorer 2', 'Explorer 3'];
var result = names13.findIndex(function (name) {
  return name.length > 7;
});
console.log("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 esta en la posición " + result); // Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.
// lista de elementos

var bools = [true, true, false, true]; // Uso de Some para ver si al menos uno de los elementos es false

var areSomeTrue = bools.some(function (b) {
  return b === false;
});
console.log("Ejemplo 14: Alguno de los elementos en el array es false: " + areSomeTrue); //true
//Ejemplo 15: Uso de sort para ordenar elementos

var products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot'];
console.log("Ejemplo 15: Elementos ordernados usando SORT");
console.log(products.sort()); // Ejemplo 16: Ordenando una lista de objetos

var users = [{
  name: 'A',
  age: 150
}, {
  name: 'B',
  age: 50
}, {
  name: 'C',
  age: 100
}, {
  name: 'D',
  age: 22
}];
users.sort(function (a, b) {
  // podemos invocar una función
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log("Ejemplo 16: Ordenando una lista de objetos por la edad");
console.log(users); // sorted ascending