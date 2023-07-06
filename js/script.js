    
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
        
    return {
    add: add,
    getAll: getAll
    };
})();  

    pokemonRepository.getAll().forEach(function(pokemon) { 
    if (pokemon.height > 6){
        document.write("<p>" + pokemon.name + " (height: " + pokemon.height +")" + " Wow this is really big" + "<p/>");
        }
    else {
        document.write("<p>" + pokemon.name + " (height: " + pokemon.height +")" + "<p/>");
        } 
});
        
console.log(pokemonRepository.getAll()); // []
pokemonRepository.add({ name: 'bulbasaur' });
console.log(pokemonRepository.getAll()); // [ { name: 'bulbasaur' } ]
    
