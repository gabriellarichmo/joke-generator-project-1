const url = 'https://official-joke-api.appspot.com/jokes/'
const newJokeForm = document.querySelector('#new-joke')

const renderJokes = () => {}

const fetchJokes = () => {
  return fetch(`${url}random`)
  .then(resp => resp.json())
  .then(jokes => renderJokes(jokes))
  .catch(err => console.log(err))
}


const selectType = document.querySelector("#joke-type-selection");

selectType.addEventListener("change", (e) => {
  let selectedJokeType = e.target.value;
  let typeJokeSetup = document.querySelector('#joke-by-type-setup');
  let typeJokePunchline = document.querySelector('#joke-by-type-punchline');

  fetch(`${url}${selectedJokeType}/random`)
  .then(resp => resp.json())
  .then(joke => {
    typeJokeSetup.innerHTML = joke[0].setup;
    typeJokePunchline.innerHTML = joke[0].punchline;
  });
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
  const div = document.createElement('div')
    div.append(getNewJoke())
    console.log(div.childNodes)
}

//submitUserJoke();