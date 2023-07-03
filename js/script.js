    
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
    
    pokemonList.forEach(function(pokemon) { 
        
        
            console.log(pokemon.name + pokemon.height + pokemon.types);
        });  

    
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


        console.log(pokemonRepository.getAll()); // []
        pokemonRepository.add({ name: 'bulbasaur' });
        console.log(pokemonRepository.getAll()); // [ { name: 'bulbasaur' } ]
    
