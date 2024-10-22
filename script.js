let randomNumber;
let maxTries;
let tries = 0;

window.addEventListener("DOMContentLoaded", function (event) {
  const form = document.getElementById("form");
  const radios = document.querySelectorAll('input[name="mode"]');
  form.addEventListener("submit", submitForm);

  radios.forEach((radio) => {
    radio.addEventListener("change", chooseMode);
  });

  function chooseMode(event) {
    const choice = event.target.value;
    console.log("Mode choisi : " + choice);
    

    if (choice === "facile") {
      startGame(20, 8); 
    } else if (choice === "moyen") {
      startGame(50, 5); 
    } else if (choice === "difficile") {
      startGame(100, 3);
    }
  }

  function startGame(maxNumber, maxTriesInput) {
    randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    maxTries = maxTriesInput; // Pour qu'il modifie le nbr d'essai à ce qui est passé en argument
    tries = 0; 
    getTries(); 
  }

  function submitForm(event) {
    event.preventDefault();
    let guess = parseInt(form.guess.value);
    tries++; 

    if (guess < randomNumber) {
      plus(); 
    } else if (guess > randomNumber) {
      moins();
    } else {
      alert("WIN! Le chiffre était : " + randomNumber);
    }

    if (tries === maxTries) {
      alert("Perdu, plus d'essais. Le chiffre était " + randomNumber);
    }

    getTries(); 
  }
});


function getTries() {
  let spanTries = document.getElementById("tries");
  spanTries.innerText = maxTries - tries;
}

function plus() {
  let messagePlus = document.getElementById("plusmoins");
  messagePlus.innerText = "C'est plus !";
  form.guess.value = ""; 
}

function moins() {
  let messageMoins = document.getElementById("plusmoins");
  messageMoins.innerText = "C'est moins !";
  form.guess.value = ""; 
}
