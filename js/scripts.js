let pokemonList = [
    { name: 'Bulbasaur', height: .7, type: ['grass' , 'poison']}, 
    { name: 'Charmander', height: .6, type: ['fire']}, 
    { name: 'Squirtle', height: .5, type: ['water']} 
  ];

pokemonList.forEach(function(pokemonList) {
    if (pokemonList.height >.6){
      document.write(pokemonList.name + " Height: " + pokemonList.height + " Wow, that’s big! <br>" );
    }else {
      document.write(pokemonList.name + " Height: " + pokemonList.height + "<br>");
    }
  })