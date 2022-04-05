//Exercicios - Dinamica aula 01
//Escolha 2 dos 3 exercícios para realizar nessa dinâmica. O que sobrar deverá ser resolvido em casa durante essa semana.

//1. Escreva uma função soma que retorna a soma dos números de um array usando spread operator
array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

function soma(...array) {
  let soma = 0;
  array.map((array) => {
    soma += array;
  });
  return soma;
}

console.log(soma(...array));

//2. Faça fetch dos dados através da aPI (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.
//Formato:
//Nome: [nome]
//ID: [id]
//Região: [area]
//Ingredientes: [ingredientes (string única)]
//Instruções: [instruções]

const fetch = require("node-fetch");

fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    return console.log({
      nome: data.meals["0"].strMeal,
      id: data.meals["0"].idMeal,
      regiao: data.meals["0"].strArea,
      ingredientes: `${data.meals["0"].strIngredient1}, ${data.meals["0"].strIngredient2}, ${data.meals["0"].strIngredient3},${data.meals["0"].strIngredient4},
        ${data.meals["0"].strIngredient5}, ${data.meals["0"].strIngredient6}, ${data.meals["0"].strIngredient7}, ${data.meals["0"].strIngredient8}, ${data.meals["0"].strIngredient9}`,
      instrucoes: data.meals["0"].strInstructions,
    });
  });

//3. Faça fetch dos dados através da API (https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood) e retorne uma lista(array) com os nomes dos primeiros 10 resultados.
import fetch from "node-fetch";

fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return console.log([
      data.meals[0].strMeal,
      data.meals[1].strMeal,
      data.meals[2].strMeal,
      data.meals[3].strMeal,
      data.meals[4].strMeal,
      data.meals[5].strMeal,
      data.meals[6].strMeal,
      data.meals[7].strMeal,
      data.meals[8].strMeal,
      data.meals[9].strMeal,
      data.meals[10].strMeal,
    ]);
  });
module.exports = soma;
