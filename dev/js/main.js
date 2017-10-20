let theFact = document.querySelector('#the-fact');
let factText = document.querySelector('#fact-text');
let factNumber = document.querySelector('#fact-number');

let factTitle = document.querySelector(".fact-title");
let theEnteredNumber = document.querySelector('#the-number');

// Event listener for the input number 
factNumber.addEventListener('input', getFactAjax);

/**
 * Get data using AJAX.
 */ 
function getFactAjax() {
    let number = factNumber.value.trim();

    theEnteredNumber.innerText = number;

    if(Number(number) || number == 0) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'http://numbersapi.com/' + number);

        xhr.onload = function () {
            if (this.status == 200 && number != '') {
                theFact.style.display = 'block';
                factText.innerText = this.responseText;
            }
        }

        xhr.send();
    } else if( number == '' ) {
        factTitle.style.display = 'block';
        theFact.style.display = 'none';
    } else {
        factTitle.style.display = 'none';
        theFact.style.display = 'block';
        factText.innerText = 'Please... enter a valid number!';
    }
}

/**
 * Get data using Fetch.
 */ 
function getFactFetch() {
    let number = factNumber.value;

    fetch('http://numbersapi.com/' + number)
        .then(response => response.text())
        .then(data => {
            if (number != '') {
                theFact.style.display = 'block';
                factText.innerText = data;
            }
        })
        .catch(err => console.log(err));
}
