const jokeButton=document.getElementById('jokeButton');
const joke=document.getElementById('joke');

const apiKey = '252QYzuPLVA2B4J8WfV6DA==zSkAZLQYW9R0gCL1';
const apiURL = 'https://api.api-ninjas.com/v1/jokes?limit=1';

const options ={
    method:'GET',
    headers:{
        'X-Api-Key':apiKey
    },
};

async function getJoke() {

    try {
        joke.textContent = 'Updating...';
        jokeButton.textContent = 'Loding...';
        jokeButton.disabled = true;
    
        const response = await fetch(apiURL,options);
        const data = await response.json();
    
        jokeButton.disabled = false;
        jokeButton.textContent = 'Tell me a Joke';
    
        joke.textContent = data[0].joke;   
    } catch (error) {
        joke.textContent = 'Try Again Later';
        jokeButton.disabled = false;
        jokeButton.textContent = 'Tell me a joke';
    }
}

jokeButton.addEventListener('click',getJoke);