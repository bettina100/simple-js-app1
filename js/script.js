    
    let pokemonList=[
        {name: "bulbasaur", height: "7", type: "grass"},
        {name: "charizard", height: "6", type: "fire"},
        {name: "squirtle", height: "5", type: "water"}
    ];
    
    for (let i=0; i < pokemonList.length; i++)
     
// second loop in order to identify the big pokemon higher than `6`
    if (pokemonList[i].height > 6)
    { console.log(pokemonList[i].name + " (height: " + pokemonList[i].height +")" + " Wow this is really big")
}
    else 
{  console.log(pokemonList[i].name + " (height: " + pokemonList[i].height +")")
}


    
