// const weatherLviv = "http://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=3f152ae62a9f057cdb1a9851e3b676cd"

function showWeather(element) {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Lviv&appid=3f152ae62a9f057cdb1a9851e3b676cd&units=metric")
        .then(
            function(response) {
                // Examine the text in the response
                response.json().then(function(data) {
                    document.getElementById(element).innerHTML = `${data.weather[0].description} in ${data.name}. t: ${data.main.temp}°C`;
                });
            }
        )
}

let co = 1;

function move() {
    let elem = document.getElementById('train')
    if (co == 1) {
        elem.style.left = '30%'
        elem.classList.add('back');
        co++
    } else {
        elem.style.left = '-30%'
        elem.classList.remove('back');
        co--
    }
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
// window.onclick = function(e) {
//     if (!e.target.matches('.dropbtn')) {
//         var myDropdown = document.getElementById("myDropdown");
//         if (myDropdown.classList.contains('show')) {
//             myDropdown.classList.remove('show');
//         }
//     }
// }

function validate() {
    let name = document.forms['form']['name'].value
    let surname = document.forms['form']['surname'].value
    let email = document.forms['form']['number'].value
    if (!name) {
        alert('What is Your name?');
        return false;
    } else if (/[A-Z][a-z]+/.test(name) == false) {
        alert("Spell your name correctly!");
        return false;
    } else if (!surname) {
        alert("What is Your surname?");
        return false;
    } else if (/[A-Z][a-z]+/.test(surname) == false) {
        alert("Spell your surname correctly!");
        return false;
    } else if (!email) {
        alert("What is Your e-mail?");
        return false;
    } else if (/\w+@\w+\.\w+/.test(email) == false) {
        alert("This is e-mail is invalid!");
        return false;
    } else {
        alert('Logged in!');
        document.location.href = "/index.html";
        return false;
    }
}

emails = []

function subscribe() {
    let input = document.getElementById('e-mail').value;
    if (/\w+@\w+\.\w+/.test(input) == false) {
        alert.innerHTML = "This is e-mail is invalid!";
        return false;
    } else {
        if (emails.includes(input)) {
            alert('You have already subscribed!');
        } else {
            emails.push(input);
            console.log(input, emails)
            alert('Subscribed!');
        }

    }
}


function goTo() {
    location.href = 'https://www.google.com'
}

// class Car {
//     constructor(color, model) {
//         this.color = color
//         this.model = model
//     }

//     show_me(id) {
//         document.getElementById(id).innerHTML = this.color + "<br>" + this.model
//     }
// }

// let my_car = new Car('red')

let colors = ['red', 'purple', 'green', 'pink', 'yellow', 'grey', 'orange', 'lightgrey', 'brown', 'lightblue', 'blue', 'white', 'black']
let count = 0

function colorChange() {
    let color = document.getElementById('color_select').value;
    console.log(color)
    document.body.style.background = color
}

function color() {
    document.body.style.background = colors[count];
    if (count == colors.length - 1) {
        count = 0
    } else {
        count++
    }
}

async function parser(url){
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  let response = await fetch(proxyurl + url, {
      headers : {
        'Content-Type': 'application/json, text/plain, */*',
        'Accept': 'application/json'
       }

    });

  if (response.ok) { // если HTTP-статус в диапазоне 200-299
  // получаем тело ответа (см. про этот метод ниже)
    let json = await response.text();
    document.getElementById('res').innerHTML = json;
} else {
  alert("Ошибка HTTP: " + response.status);
}
}


// function validate(name, surname, number) {
//     // let name = document.forms['form']['name'].value
//     // let surname = document.forms['form']['surname'].value
//     // let number = document.forms['form']['number'].value
//     if (/[A-Z]{1}[a-z]+/.test(name) == false) {
//         // alert("Spell your name correctly!")
//         return false
//     } else if (/[A-Z]{1}[a-z]+/.test(surname) == false) {
//         // alert("Spell your surname correctly!")
//         return false
//     } else if (/\w+@\w+\.\w+/.test(number) == false) {
//         // alert("This is e-mail is invalid!")
//         return false
//     } else {
//         return true
//     }
// }

// const add = (a, b) => a + b;

// const evaluate = (x) => { return eval(x) };

// const logic = {
//     add,
//     validate,
//     evaluate,
// }

// module.exports = logic;