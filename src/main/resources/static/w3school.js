document.getElementById("demo").innerHTML = "Hello World!";

const element = document.getElementById("intro");

//Denne getElementByID overskriver den forrige
document.getElementById("demo1").innerHTML = "The text from the intro paragraph is: " + element.innerHTML;

const element2 = document.getElementsByTagName("p");

//Viser hvor mange elementer der er i
document.getElementById("demo").innerHTML = 'The text in first paragraph (index 0) is: ' + element2[0].innerHTML;

// Ændrer html for det id der hedder "test"
document.getElementById("test").innerHTML = "Hello people"

// Hør gør den det samme men sætter en const medt navnet element
const element3 = document.getElementById("header");
element3.innerHTML = "W3school project"

//Ændrer html for id showDate så den viser datoen
document.getElementById("showDate").innerHTML = "Date : " + Date();

//Ændre på farven for id demo
document.getElementById("demo").style.color = "blue"

//Function for at indtaste en string ellers giver den en alert
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == ""){
        alert("Name must be filled out");
        return false;
    }
}
//Function for at indtaste et rigtigt nummer i mellem 1-10
function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("numberisvalid").innerHTML = text;
}
