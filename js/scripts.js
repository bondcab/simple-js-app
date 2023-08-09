
let pokemonRepository = (function () {
  
  let pokemonList = [
    {
      name: "Bulbasaur",
      height: 2.04,
      types: ["grass", "poison"],
    },

    {
      name: "Charmander",
      height: 2,
      types: ["fire"],
    },

    {
      name: "Squirtle",
      height: 1.08,
      types: ["water"],
    },

    {
      name: "Pidgey",
      height: 1,
      types: ["normal", "flying"],
    },

    {
      name: "Rattata",
      height: 1,
      types: ["normal"],
    },

    {
      name: "Pikachu",
      height: 1.04,
      types: ["electric"],
    },
    {
      name: "Jigglypuff",
      height: 1.08,
      types: ["normal", "fairy"],
    },
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    if(typeof pokemon === 'object'){
      return pokemonList.push(pokemon);
    }
    
  }

  function addListItem(pokemon) {
      let listPokemon = document.querySelector('.pokemon-list');
      let listItem = document.createElement('li');
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('button-class');
      listItem.appendChild(button);
      listPokemon.appendChild(listItem);

      button.addEventListener('click', function(event) {
        showDetails(pokemon);
      });
  
  } 

  function showDetails(pokemon){
    console.log(pokemon)
  }



  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
 
});
