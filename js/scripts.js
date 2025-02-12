let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function logNames() {
    console.log(pokemonList);
  }

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon 
    ) {
      pokemonList.push(pokemon);
    } else{
      console.log("Pokemon error.");
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let element = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.classList.add('pokemonbutton');
    button.innerText = pokemon.name; 
    button.addEventListener('click', function (event) {
      showDetails(pokemon.name);
    });
    listItem.appendChild(button);
    element.appendChild(listItem);
  }

  function loadList() {
    return fetch(apiUrl).then(fuction (response) {
      return response.json();
    }).then(funtion (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.apiUrl
        };
        add(pokemon);
      }); 
    }).catch(function (e) {
      console.error(e);
    })
  }


  function showDetails(pokemon) {
    console.log(pokemon)
  }

  
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList
  };
})();

console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
});