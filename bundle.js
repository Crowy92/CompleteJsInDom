(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function hello () {
    console.log("hello");
}

module.exports = hello
},{}],2:[function(require,module,exports){
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
},{"./hello":1}]},{},[2]);
