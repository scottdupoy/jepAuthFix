
console.log('+DROP AUTH 3');

var authElements = document.getElementsByClassName("rauth-registration");
console.log('found ' + authElements.length + ' auth elements');

authElements.forEach(function(authElement) {
    console.log('authElement.style.display = ' + authElement.style.display);
});

console.log('-DROP AUTH 3');
