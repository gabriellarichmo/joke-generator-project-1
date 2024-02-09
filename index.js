const url = 'https://official-joke-api.appspot.com/random_joke'

//! GLOBAL USE STUFF

const fetchJokes = () => {
  return fetch(`${url}`)
  .then(resp => resp.json())
  .then(jokes => renderJokes(jokes))
  .catch(err => console.log(err))
}
