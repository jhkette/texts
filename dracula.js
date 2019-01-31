window.onload = function(){


function fetchText() {
  fetch('dracula.txt')
  .then(readResponseAsText)
  .then(showText);
}

function fetchJson(){
    const colours = [];
    fetch('data.json')
    .then(res => res.json())
    .then(results => colours.push(...results));

    return colours;
}
var dracula = fetchText();
var coloursArray = fetchJson();

function processText(text){

    var res = text.split(/\W+/);
    console.log(res);
}

function findMatches(dracula, coloursArray){
    console.log(coloursArray);
}


function readResponseAsText(response) {
  return response.text();
}

function showText(responseAsText) {

  var message = document.getElementById('message');
  message.textContent = responseAsText;
  processText(responseAsText);
}

findMatches(dracula, coloursArray);


};
