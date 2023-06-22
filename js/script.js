    
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
    
    for (let i=0; i < pokemonList.length; i++)
     
// second loop in order to identify the big pokemon higher than `6`
    if (pokemonList[i].height > 6)
    {document.write(pokemonList[i].name + " (height: " + pokemonList[i].height +")" + " Wow this is really big")
    }   
    else 
    {document.write(pokemonList[i].name + " (height: " + pokemonList[i].height +")")
    }


    
