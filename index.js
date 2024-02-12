const url = 'https://official-joke-api.appspot.com/random_joke'
const newJokeForm = document.querySelector('#new-joke')
//! GLOBAL USE STUFF

const fetchJokes = () => {
  return fetch(`${url}`)
  .then(resp => resp.json())
  .then(jokes => renderJokes(jokes))
  .catch(err => console.log(err))
}
//! Appending the <h3, h4> (Name and Type of joke) and <p> (Setup and punchline)
//! To the parent li
const selectType = document.querySelector(".joke-type-selection");
const result = document.querySelector(".result");
selectElement.addEventListener("change", (e) => {
  result.textContent = `${e.target.value}`;
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
