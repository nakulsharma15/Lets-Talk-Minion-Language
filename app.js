var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
   return serverURL + "?text=" + text;
}

function errorHandler(error) {
   alert("Error Occurred, Please try again after some time!")
}

function clickEventHandler(){
  
  var inputTxt = txtInput.value;

  fetch(getTranslationURL(inputTxt))
  .then(response => response.json())
  .then(json => {
     var translatedText = json.contents.translated;
     outputDiv.innerText = translatedText;
  })

  .catch(errorHandler())
};

btnTranslate.addEventListener("click",clickEventHandler);


