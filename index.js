const url = 'https://official-joke-api.appspot.com/jokes/'
const newJokeForm = document.querySelector('#new-joke')
const generateJokeSetup = document.querySelector('#generate-joke-setup')
const generateJokePunchline = document.querySelector('#generate-joke-punchline')


function renderJokes(joke) {
  console.log(joke)
    generateJokeSetup.innerText = joke.setup;
    generateJokePunchline.innerText = joke.punchline;
}


const fetchJokes = () => {
  return fetch(`${url}random`)
  .then(resp => resp.json())
  .then(joke => renderJokes(joke))
  .catch(err => console.log(err))
}

const handleClick = (e) => {
  e.preventDefault();
  fetchJokes();
}

const generateBtn = document.querySelector('#reveal-button');
generateBtn.addEventListener('click', handleClick);


const selectType = document.querySelector("#joke-type-selection");
selectType.addEventListener("change", (e) => {
  let selectedJokeType = e.target.value;

  fetch(`${url}${selectedJokeType}/random`)
  .then(resp => resp.json())
  .then(joke => {
    generateJokeSetup.innerHTML = joke[0].setup;
    generateJokePunchline.innerHTML = joke[0].punchline;
  });
});

function getNewJoke(e) {
  e.preventDefault();
  const newJokeSetup = document.querySelector('#new-joke-setup')
  const newJokePunchline = document.querySelector('#new-joke-punchline')
  const newJokeType = document.querySelector('#new-joke-type')
  const newUserName = document.querySelector('#user-name')
  const validForm = [newJokeSetup.value, newJokePunchline.value].some(userInput => userInput.trim() === '')
    if (validForm) {
      alert ('Please fill in a setup and punchline')
    }  else {console.log(`Type: ${newJokeType.value} Setup: ${newJokeSetup.value}
  Punchline: ${newJokePunchline.value} Submitted By: ${newUserName.value}`)}
  generateJokeSetup.innerHTML = newJokeSetup.value
  generateJokePunchline.innerHTML = newJokePunchline.value
}

const storingUserJoke = (e) => {
  const form = document.getElementById('new-joke')
  form.addEventListener('submit', getNewJoke)
}

storingUserJoke();
