
//Pokemon Pokedex code

let pokemonRepository = (function () {
  let pokemonList = [];

  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function getAll() {
    return pokemonList;
  }

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
    button.classList.add("button-class");
    listItem.appendChild(button);
    listPokemon.appendChild(listItem);

    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });
  }

  //Show details function - change to open modal
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon.name, "height: "+ pokemon.height, pokemon.imageUrl)
    });

  }

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


//modal code//

//Will open the modal when button is clicked
function showModal(name, height, image) {
  let modalContainer = document.querySelector('#modal-container');

  modalContainer.classList.add('is-visible');

  modalContainer.innerHTML = '';

  let modal = document.createElement('div');
  modal.classList.add('modal');

  //Close button element
  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);

  //pokemon name
  let pokemonNameElement = document.createElement('h1');
  pokemonNameElement.innerText = name;

  //pokemon height
  let heightElement = document.createElement('p');
  heightElement.innerText = height;

  //pokemon image
  let imageElement = document.createElement('img');
  imageElement.setAttribute('src', image);
  imageElement.setAttribute('alt', 'Image of pokemon');
  imageElement.setAttribute('width', '150');
  imageElement.setAttribute('height', '150');
  imageElement.classList.add('pokemon-image');


  //adding the elements to the modal
  modal.appendChild(closeButtonElement);
  modal.appendChild(pokemonNameElement);
  modal.appendChild(heightElement);
  modal.appendChild(imageElement);

  //adding the modal to the container
  modalContainer.appendChild(modal);

  //class .is-visible added to the container
  modalContainer.classList.add('is-visible');

  //close modal when clicking outside of modal
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  })


}

//hide modal function
function hideModal(){
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible');
}

//esc key hide modal
window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')){
    hideModal();
  }
})




