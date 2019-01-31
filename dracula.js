window.onload = function(){

function readResponseAsText(response) {
  return response.text();
}

function showText(responseAsText) {

  var message = document.getElementById('message');
  message.textContent = responseAsText;
  processText(responseAsText);
}

function fetchText(pathToResource) {
  fetch(pathToResource)
  .then(readResponseAsText)
  .then(showText);


}
function fetchJson(path){
    const colours = [];
    fetch(path)
    .then(res => res.json())
    .then(results => colours.push(...results));
    console.log(colours);
}


function processText(text){

    var res = text.split(/\W+/);
    console.log(res);
}





fetchText('dracula.txt');
fetchJson('data.json');
};
