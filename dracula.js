window.onload = function(){

function readResponseAsText(response) {
  return response.text();
}

function showText(responseAsText) {
  // Assuming the DOM has a div with id 'message'
  var message = document.getElementById('message');
  message.textContent = responseAsText;
}

function fetchText(pathToResource) {
  fetch(pathToResource)
  .then(readResponseAsText)
  .then(showText);

}



fetchText('dracula.txt');

};
