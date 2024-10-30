let jokeText = document.getElementById("jokeText");
let jokeBtn = document.getElementById("jokeBtn");
let spinner = document.getElementById("spinner");

function getDoc() {
            spinner.classList.toggle("d-none");
    let options = {
        method: "GET"
    };

    fetch("https://apis.ccbp.in/jokes/random", options)

        .then(function(response) {
            return response.text();

        }).then(function(data) { 
            spinner.classList.toggle("d-none");
            data = JSON.parse(data);
            jokeText.textContent = data.value;
        });
}


jokeBtn.onclick = function() {

    getDoc();
}