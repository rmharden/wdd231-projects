/*Activity 1:*/
/*const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
async function getPokemon(url) {
    const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
    const outputElement = document.querySelector("#output");
    results = data;
    const html = `
        <h2>Name: ${results.name}</h2>
        <img src="${results.sprites.front_default}" alt="Image of ${results.name}">
        <p>Height: ${results.height}</p>
        <p>Weight: ${results.weight}</p>
        <p>Moves: ${results.moves[0].move.name}</p>
        <p>Ability: ${results.abilities[0].ability.name}</p>
        <h3>Pokémon Cries</h3>
        <audio controls src="${results.cries.latest}"></audio>
        <audio controls src="${results.cries.legacy}"></audio>
        <img src="${results.sprites.other["official-artwork"].front_default}" alt="Official artwork of ${data.name}">
        `;
        outputElement.innerHTML = html;
    console.log("first: ", results);
}
getPokemon(url);*/

/*Creates random Pokémon with a button:*/

/*const button = document.querySelector("#randomButton");
button.addEventListener("click", getRandomPokemon);

async function getRandomPokemon() {
    const randomNumber = Math.floor(Math.random() * 1025) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        doStuff(data);
    }
}

function doStuff(data) {
    const outputElement = document.querySelector("#output");
    results = data;
    const html = `
        <h2>Name: ${results.name}</h2>
        <img src="${results.sprites.front_default}" alt="Image of ${results.name}">
        <p>Height: ${results.height}</p>
        <p>Weight: ${results.weight}</p>
        <p>Moves: ${results.moves[0].move.name}</p>
        <p>Ability: ${results.abilities[0].ability.name}</p>
        <h3>Pokémon Cries</h3>
        <audio controls src="${results.cries.latest}"></audio>
        <audio controls src="${results.cries.legacy}"></audio>
        <img src="${results.sprites.other["official-artwork"].front_default}" alt="Official artwork of ${data.name}">
        `;
        outputElement.innerHTML = html;
    console.log("first: ", results);
}
getRandomPokemon();

function doStuffList(data) {

}*/

/* Activity 2 */
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi/co/api/v2/pookemon";
let results = null;

async function getPokemon(url) {
    const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    doStuff(data);
  }
}

async function getPokemonList(url) {
    const list = await fetch(url);
    if (list.ok) {
        const data = await response.json();
        doStuffList(data);
    }
}

async function doStuffList(data) {

}

function doStuff(data) {
    const outputElement = document.querySelector("#output");
    results = data;
    const html = `
        <h2>Name: ${results.name}</h2>
        <img src="${results.sprites.front_default}" alt="Image of ${results.name}">
        <p>Height: ${results.height}</p>
        <p>Weight: ${results.weight}</p>
        <p>Moves: ${results.moves[0].move.name}</p>
        <p>Ability: ${results.abilities[0].ability.name}</p>
        <h3>Pokémon Cries</h3>
        <audio controls src="${results.cries.latest}"></audio>
        <audio controls src="${results.cries.legacy}"></audio>
        <img src="${results.sprites.other["official-artwork"].front_default}" alt="Official artwork of ${data.name}">
        `;
        outputElement.innerHTML = html;
    console.log("first: ", results);
}
getPokemon(url);