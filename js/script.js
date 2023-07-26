    
let pokemonRepository = (function () {
    
    let pokemonList=[
    {   
        name: "bulbasaur",
        height: "7",
        types: ["grass", "poison"]
    },
    {   
        name: "charizard", 
        height: "6", 
        types: ["fire", "flying"]
    },
    {   
        name: "squirtle", 
        height: "5", 
        types: ["water"]
    }
    ];
        
function add(pokemon) {
    pokemonList.push(pokemon);
}      
        
function getAll() {
    return pokemonList;
    }

function showDetails(pokemon){
    console.log(pokemon);
}

function addListItem(pokemon){
        let pokemonList = document.querySelector(".pokemon-list");
        let listpokemon = document.createElement("li");
        let button = document.createElement("button");
        button.innerText = pokemon.name;
        button.classList.add("button-class");
        button.addEventListener('click', function (){
            showDetails(pokemon);
        })
        listpokemon.appendChild(button);
        pokemonList.appendChild(listpokemon);
}

return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
    };
})();  
    

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});