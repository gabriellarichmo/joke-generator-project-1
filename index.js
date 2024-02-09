const url = 'https://official-joke-api.appspot.com/random_joke'

//! GLOBAL USE STUFF

fetch(`${url}`)
.then(resp => resp.json())
.then(jokeData => {debugger})