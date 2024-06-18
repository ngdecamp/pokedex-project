let pokemonRepository = function() {
  let pokemonList = [
    { name: 'Bulbasaur', height: .7, type: ['grass' , 'poison']}, 
    { name: 'Charmander', height: .6, type: ['fire']}, 
    { name: 'Squirtle', height: .5, type: ['water']} 
  ];
  ;
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  }}

  pokemonRepository.getAll().forEach(pokemon => {
    if (pokemon.height > .6) {
      document.write(pokemon.name + " Height: " + pokemon.height + " Wow, that’s big! <br>" );
    } else {
      document.write(pokemon.name + " Height: " + pokemon.height + "<br>");
    }
  });