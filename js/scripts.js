

let pokemonRepository = (function() {

  let pokemonList = [
    {
    name: "Bulbasaur",
    height: 2.04,
    types: ['grass', 'poison']

    },

   {
    name: "Charmander",
    height: 2,
    types: ['fire']

   },

   {
    name: "Squirtle",
    height: 1.08,
    types:  ['water']

   },

    {
    name: "Pidgey",
    height: 1,
    types: ['normal', 'flying']

   },

    {
    name: "Rattata",
    height: 1,
    types: ['normal']

   },

   {
    name: "Pikachu",
    height: 1.04,
    types: ['electric']

   },
   {
    name: "Jigglypuff",
    height: 1.08,
    types: ['normal', 'fairy']

   },
   
];


function getAll () {
    return pokemonList;
}


function add(pokemon) {
    return pokemonList.push(pokemon);
}

return {
    getAll: getAll,
    add: add
}



})();






pokemonRepository.getAll.forEach(listOnSite);

function listOnSite() {
    document.write(
        ("<p>" + pokemonList[i].name) + "</p>" + " Height: " + (pokemonList[i].height)
    )
    
    if (get.All.pokemonList[i].height >= 2){
        document.write(" - Wow, thats big!" )
    }
}







