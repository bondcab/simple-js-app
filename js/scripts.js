//Pokemon Pokedex code

//Code for the pokemon list inside an IIFE
let pokemonRepository = (function () {
  let pokemonList = [];

  //api where pokemon data is being retrieved from
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  //function returns the pokemonList above shows as an empty array
  function getAll() {
    return pokemonList;
  }

  //conditional rule, if the pokemonType from the array is an object add it to the pokemonList array
  function add(pokemon) {
    if (typeof pokemon === "object") {
      return pokemonList.push(pokemon);
    }
  }

  //The pokemon buttons
  function addListItem(pokemon) {
    let listPokemon = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    let pokemonName = pokemon.name;
    pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    button.innerText = pokemonName;
    //Bootstrap attributes added below to toggle the modal
    button.classList.add("button-class", "btn", "btn-primary");
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("type", "button");
    button.setAttribute("data-target", "#exampleModal");

    //Bootstrap list-group-item added to li
    listItem.setAttribute("class", "list-group-item");

    listItem.appendChild(button);
    listPokemon.appendChild(listItem);

    //event listener checking for button to be clicked then running the showDetails function below
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  //Show details of pokemon in the console and modal
  function showDetails(pokemon) {
    let abilities = [];
    let types = [];

    loadDetails(pokemon).then(function () {
      pokemon.abilities.forEach(function (object) {
        abilities.push(" " + object.ability.name);
      }),
        pokemon.types.forEach(function (object) {
          types.push(" " + object.type.name);
        }),
        // console.log(pokemon);
        showModal(
          pokemon.name[0].toUpperCase() + pokemon.name.slice(1),
          pokemon.height,
          pokemon.weight,
          abilities,
          types,
          pokemon.imageUrl
        );
      console.log(pokemon);
      console.log(types);
    });
  }
  //Loads list of Pokemon
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
          // console.log(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //retrives the object information for the modal
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
        item.weight = details.weight;
        item.abilities = details.abilities;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //outputs each of the following inner functions
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

// //modal code - //

// //Will open the modal when button is clicked
function showModal(name, height, weight, abilities, types, image) {
  //Changes the boostrap modal title text to the pokemons name
  let pokemonNameElement = document.querySelector(".modal-title");
  pokemonNameElement.innerText = name;

  // Changes the bootstrap modal height paragraph elements text to height from api
  let heightElement = document.querySelector(".pokemon-height");
  heightElement.innerText = height;

  // Changes the bootstrap modal weight paragraph elements text to weight from api
  let weightElement = document.querySelector(".pokemon-weight");
  weightElement.innerText = weight;

  // Changes the bootstrap modal abilities paragraph elements text to abilties from api
  let abilitiesElement = document.querySelector(".pokemon-abilities");
  abilitiesElement.innerText = abilities;

  // Changes the bootstrap modal types paragraph elements text to types from api
  let typesElement = document.querySelector(".pokemon-types");
  typesElement.innerText = types;

  //pokemon image
  let imageElement = document.createElement("img");
  imageElement.setAttribute("src", image);
  imageElement.setAttribute("alt", "Image of pokemon");
  imageElement.setAttribute("width", "150");
  imageElement.setAttribute("height", "150");
  imageElement.setAttribute("class", "pokemon-image");

  let modalFooter = document.querySelector(".modal-footer");

  //prevents multiple images being applied to the modal
  while (modalFooter.firstChild) {
    modalFooter.removeChild(modalFooter.firstChild);
  }

  modalFooter.appendChild(imageElement);
}
