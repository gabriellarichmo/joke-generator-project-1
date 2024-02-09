const url = 'https://official-joke-api.appspot.com/random_joke'

//! GLOBAL USE STUFF

const fetchJokes = () => {
  return fetch(`${url}`)
  .then(resp => resp.json())
  .then(jokes => renderJokes(jokes))
  .catch(err => console.log(err))
}
//! Appending the <h1, h2> (Name and Type of joke) and <p> (Setup and punchline)
//! To the parent li



//const userJokeForm = 
//userJokeForm.addEventListener('sumbit', submitUserJoke)
//! Submit User's Joke and Appends it to the current data list

const sumbitUserJoke = (e) => {
  e.preventDefault();
  const li = document.createElement('li')
    
  }