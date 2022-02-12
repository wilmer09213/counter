

let minus = document.getElementsByClassName("minus");
let add = document.getElementsByClassName("add");

let counter = 0;

let count = document.getElementsByClassName("number");

count[0].textContent = counter;

minus[0].addEventListener("click", function() {
    counter = counter - 1;
    count[0].textContent = counter;
});

add[0].addEventListener("click", function() {
    counter = counter + 1;
    count[0].textContent = counter;
});