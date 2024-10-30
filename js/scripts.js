let pokemonRepository = (function () {
  let pokemonList = [
    { name: 'Bulbasaur', height: .7, type: ['grass', 'poison'] },
    { name: 'Charmander', height: .6, type: ['fire'] },
    { name: 'Squirtle', height: .5, type: ['water'] }
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let element = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.classList.add('pokemonbutton');
    button.innerText = pokemon.name; // Add the pokemon name to the button
    listItem.appendChild(button);
    element.appendChild(listItem);
  }
  
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  let element = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li');
  let button = document.createElement('button');
  button.classList.add('pokemonbutton');
  button.innerText = pokemon.name; // Add the pokemon name to the button
  listItem.appendChild(button);
  element.appendChild(listItem);
});