let pokemonRepository = (function () {
let pokemonList = [
    { name: 'Bulbasaur', height: .7, type: ['grass' , 'poison']}, 
    { name: 'Charmander', height: .6, type: ['fire']}, 
    { name: 'Squirtle', height: .5, type: ['water']} 
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.forEach(function(getAll) {
  let element = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li')
  let button = document.createElement('button')
  element.classList.add('pokemonbutton');
  listItem.appendChild(button)
  ul.appendChild(listItem)
}
  })