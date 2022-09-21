const hello = require('./hello')

hello();
console.log("we love lotr")

const heading = document.querySelector("h1");
// console.log(heading);

heading.textContent = "The Lord of the rings - by Gustafsson";
heading.style.color = "purple";

const pTags = document.querySelectorAll("p");
// console.log(pTags);
pTags.forEach(pTag => pTag.style.color = "green")

document.querySelector('#number1').textContent = "Gimli"

const buttonAdd = document.querySelector('button');
console.log(buttonAdd);

buttonAdd.addEventListener('click', () => {
    const ol = document.querySelector("ol");
    const li = document.createElement("li");
    li.textContent = "Gandalf";
    ol.appendChild(li)
})

const ol = document.querySelector("ol");
ol.addEventListener('mouseover', () => {
    ol.style.color = "red"
})

ol.addEventListener('mouseout', () => {
    ol.style.color = "black"
})

const buttonUpdate = document.querySelector('#updateTitle');

buttonUpdate.addEventListener('click', () => {
    document.querySelector('h1').textContent = "you hit me"
})