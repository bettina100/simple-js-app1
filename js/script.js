    
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
        if (pokemonList[i].height > 6)
            {document.write("<p>" + pokemon[i].name + " (height: " + pokemon[i].height +")" + " Wow this is really big" + "<p/>");
        }
        else
        {document.write("<p>" + pokemon[i].name + " (height: " + pokemon[i].height +")" +"<p/>")
        };  
    });
        document.write(pokemonRepository.getAll()); // []
        pokemonRepository.add({ name: 'bulbasaur' });
        document.write(pokemonRepository.getAll()); // [ { name: 'bulbasaur' } ]
    
