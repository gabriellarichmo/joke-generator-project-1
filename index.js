const url = 'https://official-joke-api.appspot.com/jokes/'
const newJokeForm = document.querySelector('#new-joke')
//! GLOBAL USE STUFF

let displayedJoke = null;

const fetchJokes = () => {
  return fetch(`${url}`)
  .then(resp => resp.json())
  .then(jokes => renderJokes(jokes))
  .catch(err => console.log(err))
}
//! Appending the <h3, h4> (Name and Type of joke) and <p> (Setup and punchline)
//! To the parent li


const selectType = document.querySelector("#joke-type-selection");

selectType.addEventListener("change", (e) => {
  let selectedJokeType = e.target.value;
  let typeJokeDisplay = document.querySelector('#joke-by-type-display');
  let typeJokeText = document.querySelector('#joke-by-type-text');
  let typeJokeSetup = document.querySelector('#joke-by-type-setup');
  let typeJokePunchline = document.querySelector('#joke-by-type-punchline')

  //typeJokeText.innerText = console.log(`Setup: ${typeJokeSetup.innerText}` + `Punchline: ${typeJokePunchline.innerText}`)

  return fetch(`${url}${selectedJokeType}/random`)
  .then(resp => resp.json())
  .then(jokes => console.log(jokes));
  

});



function getNewJoke() {
  const newJokeSetup = document.querySelector('#new-joke-setup')
  newJokeSetup.innerText = document.getElementById('new-joke-setup')
  const newJokePunchline = document.querySelector('#new-joke-punchline')
  newJokePunchline.innerText = document.getElementById('new-joke-punchline')
  const newJokeType = document.querySelector('#new-joke-type')
  newJokeType.innerText = document.getElementById('new-joke-type')
  const newUserName = document.querySelector('#user-name')
  newUserName.innerText = document.getElementById('user-name')
  console.log(`Type: ${newJokeType.innerText}` + `Setup: ${newJokeSetup.innerText}` +
  `Punchline: ${newJokePunchline.innerText}` + `Submitted By: ${newUserName.innerText}`)
}
//!Remidner to test function getNewJoke() inside the web console


//const userJokeForm = 
//userJokeForm.addEventListener('sumbit', submitUserJoke)
//! Submit User's Joke and Appends it to the current data list

const sumbitUserJoke = (e) => {
  e.preventDefault();
  const li = document.createElement('li')
    
}
