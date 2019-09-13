let jokeDiv = document.querySelector("#dadJokes");

const API = {
    getJokes: () => {
        return fetch("https://icanhazdadjoke.com/", {
            method: "GET",
                headers: {
                    "accept": "application/json"
                },
        }).then(response => response.json())
        .then(result => jokeDiv.innerHTML = createJokes(result))
    },    
}

const createJokes = (newJoke) =>{
    // Create your own HTML structure for a joke
    return `
    <div>
        <h2>${newJoke.joke}</h2>
    </div>
    `
}
document.getElementById("button").addEventListener("click", (event) => {
    API.getJokes();  
}) 