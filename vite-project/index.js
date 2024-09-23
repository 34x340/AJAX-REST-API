// function fetchPokemonById(pokemonId) {
//   return (fetch(`https://pokeapi.co/api/v2/pokemon/5`))
//   .then(pokemon=>console.log(pokemon))
// }

// fetchPokemonById(10)
//   .then(pokemon => {
//       document.body.textContent = pokemon.name
//   })

searchArticles('flower')
    .then(res => res.articles)
    .then(articles => {
        const markup = createArticleCards(articles)
        articlesContainerRef.innerHTML = markup
    })