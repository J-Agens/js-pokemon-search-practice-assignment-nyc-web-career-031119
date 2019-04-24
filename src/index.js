document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)


  const form = document.querySelector('#pokemon-search-form')

  const container = document.querySelector('#pokemon-container')


  //YOUR CODE HERE
  // Load in pokemon
  function generatePokemon(pokemon) {
    return pokemon.map(function(pokemonCard) {
      const div = document.createElement('div')
      div.className = "pokemon-card"

      container.appendChild(div)
      const frame = document.createElement('div')
      frame.className = "pokemon-frame"
      div.appendChild(frame)
      const header = document.createElement('h1')
      header.className = "center-text"
      header.innerText = `${pokemonCard.name}`
      frame.appendChild(header)
      const image = document.createElement('div')
      image.className = "pokemon-image"
      frame.appendChild(image)
      const pictureFront = document.createElement('img')
      pictureFront.className = "toggle-sprite"
      image.appendChild(pictureFront)
      pictureFront.src = `${pokemonCard.sprites.front}`
      const pictureBack = document.createElement('img')
      pictureBack.className = "toggle-sprite"
      pictureBack.src = `${pokemonCard.sprites.back}`
      // image.appendChild(pictureBack)
    })
  }

generatePokemon(POKEMON)

if (container.innerHTML === "") {
  const message = document.querySelector('center')
  message.style.display = "visible"
}
  // FILTER POKEMON FUNCTION


let userInput = document.querySelector('#pokemon-search-input')


  form.addEventListener('input', function(e) {

    const filter = function(pokemon, name) {
      return pokemon.filter(function(pokemonName) {
        // console.log(pokemonName.name)
        return pokemonName.name.includes(userInput.value)
      })
    }
    // container.innerHTML = ""
    // if (userInput.value === "") {
    //   // generatePokemon(POKEMON)
    // } else {
      container.innerHTML = ""
      console.log(userInput.value);
      console.log(filter(POKEMON, userInput.value))
    generatePokemon(filter(POKEMON, userInput.value))
    // }

  })
})

// Make sure to remove no pokemon message at right time
