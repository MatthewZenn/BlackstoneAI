const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

const grammar = "#JSGF V1.0; grammar commands; public <commands> = hello|generate an image of the card i'm thinking of;";

const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;

var coin = 0;

document.getElementById('btn').addEventListener('click', () => {
  if (coin == 0) {
    document.getElementById('btn').style.boxShadow = 'inset 5px 5px 10px #161b1d41';
    document.getElementById('btn').style.fontSize = '23pt';
    recognition.start();
    coin = 1;
  }
  else {
    recognition.stop();
    document.getElementById('btn').style.boxShadow = 'none';
    document.getElementById('btn').style.fontSize = '24pt';
    coin = 0;
  }
});

recognition.onspeechend = () => {
  recognition.stop();
  document.getElementById('btn').style.boxShadow = 'none';
  document.getElementById('btn').style.fontSize = '24pt';
  coin = 0;
};

// recognition.onresult = (event) => {
//   const result = event.results[0][0].transcript;
//   diagnostic.textContent = `${result}.`;
//   // if then...
// };
