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

//for loop which lists out the name and height of each pokemon
for (let i = 0; i <= pokemonList.length; i++){

document.write(pokemonList[i].name + " (" + pokemonList[i].height + ") ")

if (pokemonList[i].height >= 2){
    document.write(" - Wow, thats big! ")
}

};









