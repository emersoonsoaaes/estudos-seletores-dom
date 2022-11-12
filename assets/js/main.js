console.log("test");

const titulo = document.querySelector("#titular");
const imgCoruja = document.querySelector("#lechuza");
const formularo = document.querySelectorAll("input");
const atributos = document.querySelector("#copyright");
const twitter = document.querySelector(".fa-twitter");
const youTube = document.querySelector(".fa-youtube");
const form = document.querySelector(".formulario");
const hs2 = document.querySelectorAll("h2");
const icones = document.querySelectorAll(".icon");



titulo.style.display = "none";
imgCoruja.style.filter = "grayscale(100%)";

formularo.forEach(input => input.style.background = "red");
console.log(atributos.attributes);

console.log(twitter.getAttribute("href"));
console.log(youTube.getAttribute("href"));

youTube.setAttribute("href", "https://www.youtube.com/c/DigitalHouseBrasil/featured");

console.log(form.hasAttribute("action"));

form.setAttribute("action", "http://www.digitalhouse.com");
form.removeAttribute("url");


hs2.forEach(h2 => h2.style.color = "red");


icones.forEach(icon => icon.style.color = "#680094");

