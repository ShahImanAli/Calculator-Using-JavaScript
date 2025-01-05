let element = document.getElementsByTagName('li');
let screen = document.getElementById('screen').getElementsByTagName('p')[0]; 
let clear = document.getElementById('clear');

for (let i = 0; i < element.length; i++) {
    if (element[i].innerHTML === "=") {
        element[i].addEventListener('click', calculate);  
    } else {
        element[i].addEventListener('click', addToCurrentValue(i)); 
    }
}

clear.addEventListener('click', function() {
    screen.innerHTML = ''; 
});

function calculate() {
    try {
        screen.innerHTML = eval(screen.innerHTML);  
    } catch (error) {
        screen.innerHTML = 'Error'; 
    }
}

function addToCurrentValue(i) {
    return function() {
        let value = element[i].innerHTML;

        screen.innerHTML += value; 
    }
}



