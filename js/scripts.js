
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
    button.innerText = pokemon.name;
    //Bootstrap attributes added below to toggle the modal
    button.classList.add("button-class", "btn", "btn-primary");
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("type", "button");
    button.setAttribute("data-target", "#exampleModal");

    //Bootstrap list-group-item added to li
    listItem.setAttribute("class", "list-group-item")

    listItem.appendChild(button);
    listPokemon.appendChild(listItem);

    //event listener checking for button to be clicked then running the showDetails function below
    button.addEventListener("click", function (event) {
      showDetails(pokemon);

    });
  }

  //function to find pokemon by name from the search bar
  function findPokemonByName(searchText) {
    for (let pokemon of pokemonList) {
      if (pokemon.name.toLowerCase() === searchText.toLowerCase()) {
        return pokemon;
      }
    }
    return null;
  }

  // code to open modal if search text matches 
  function searchOpenModal() {
    let submitButton = document.querySelector('.btn-outline-success');

    submitButton.addEventListener("click", function (event) {
      let searchText = document.querySelector('.form-control').value;
      let matchedPokemon = pokemonRepository.findPokemonByName(searchText);
      if (matchedPokemon) {
        showDetails(matchedPokemon);
      }

    })


  }


  


  //Show details of pokemon in the console and modal
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon.name, "height: " + pokemon.height, pokemon.imageUrl)
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
          console.log(pokemon)
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //retrives the object informationfor the modal
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    })
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
function showModal(name, height, image) {

  //Changes the boostrap modal title text to the pokemons name
  let pokemonNameElement = document.querySelector('.modal-title');
  pokemonNameElement.innerText = name;

  //Changes the bootsrap modal p elements text to height from api
  let heightElement = document.querySelector('.pokemon-height');
  heightElement.innerText = height;

  //pokemon image
  let imageElement = document.createElement('img');
  imageElement.setAttribute('src', image);
  imageElement.setAttribute('alt', 'Image of pokemon');
  imageElement.setAttribute('width', '150');
  imageElement.setAttribute('height', '150');
  imageElement.setAttribute('class', 'pokemon-image');

  let modalFooter = document.querySelector('.modal-footer');

  //prevents multiple images being applied to the modal
  while (modalFooter.firstChild) {
    modalFooter.removeChild(modalFooter.firstChild);
  }

  modalFooter.appendChild(imageElement);



}






















