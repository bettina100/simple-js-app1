    
    
    
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
        
        
            document.write(pokemon.name + pokemon.height + pokemon.types);
        });  

        let pokemonRepository = (function () {
       
        

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


        document.write(pokemonRepository.getAll()); // []
        pokemonRepository.add({ name: 'bulbasaur' });
        document.write(pokemonRepository.getAll()); // [ { name: 'bulbasaur' } ]
    
