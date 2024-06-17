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

  pokemonRepository.pokemonList.forEach() {
    if (pokemonList.height >.6){
      document.write(getAll.name + " Height: " + getAll.height + " Wow, that’s big! <br>" );
    }else {
      document.write(getAll.name + " Height: " + getAll.height + "<br>");
    }
  }