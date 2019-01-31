window.onload = function(){


function fetchText() {
  const text = [];
  fetch('dracula.txt')
  .then(response => response.text())
  .then(response =>  response.split(/\W+/))
  .then(results => text.push(results));

  return text;
}


function fetchJson(){
    const colours = [];
    fetch('data.json')
    .then(res => res.json())
    .then(results => colours.push(...results));
    return colours;
}


var coloursArray = fetchJson();

function processText(text){

    var res = text.split(/\W+/);

}

function findMatches(dracula, coloursArray){

}

console.log(fetchJson());
console.log(fetchText());


function showText(responseAsText) {

  var message = document.getElementById('message');
  message.textContent = responseAsText;
  processText(responseAsText);
}

}
