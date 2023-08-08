// let pokemonRepository = (function () {
//   let pokemonList = [
//     {
//       name: "Bulbasaur",
//       height: 2.04,
//       types: ["grass", "poison"],
//     },

//     {
//       name: "Charmander",
//       height: 2,
//       types: ["fire"],
//     },

//     {
//       name: "Squirtle",
//       height: 1.08,
//       types: ["water"],
//     },

//     {
//       name: "Pidgey",
//       height: 1,
//       types: ["normal", "flying"],
//     },

//     {
//       name: "Rattata",
//       height: 1,
//       types: ["normal"],
//     },

//     {
//       name: "Pikachu",
//       height: 1.04,
//       types: ["electric"],
//     },
//     {
//       name: "Jigglypuff",
//       height: 1.08,
//       types: ["normal", "fairy"],
//     },
//   ];

//   function getAll() {
//     return pokemonList;
//   }

//   function add(pokemon) {
//     return pokemonList.push(pokemon);
//   }

//   return {
//     getAll: getAll,
//     add: add,
//   };
// })();

// pokemonRepository.getAll().forEach(listOnSite);

// function listOnSite(pokemon) {
//     let pokemonListClass = document.querySelector('.pokemon-list');
//   document.write(
//     "<p>" + pokemonList[pokemon].name + "</p>" + " Height: " + pokemonList[pokemon].height
//   );

//   if (getAll.pokemonList[pokemon].height >= 2) {
//     document.write(" - Wow, thats big!");
//   }
// }




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


  return {
    getAll: getAll,
    add: add,
  };
})();

function listOnSite(pokemon) {
  let pokemonListClass = document.querySelector('.pokemon-list');
  let listItem = document.createElement('p');
  listItem.textContent = pokemon.name + " - Height: " + pokemon.height;

  if (pokemon.height >= 2) {
    listItem.textContent += " - Wow, that's big!";
  }

  pokemonListClass.appendChild(listItem);
}

pokemonRepository.getAll().forEach(listOnSite);