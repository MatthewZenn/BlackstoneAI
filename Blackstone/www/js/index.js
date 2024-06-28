var coin = 0;

document.getElementById('btn').addEventListener('click', () => {
  if (coin == 0) {
    document.getElementById('btn').style.boxShadow = 'inset 5px 5px 10px #161b1d41';
    document.getElementById('btn').style.fontSize = '23pt';
    coin = 1;
    record();
  }
  else {
    document.getElementById('btn').style.boxShadow = 'none';
    document.getElementById('btn').style.fontSize = '24pt';
    coin = 0;
    reply();
  }
});

function record() {
  document.getElementById('btn').click();
};

function reply() {
  TTS.speak({
    text: "Ok, here are some images of the card you're thinking of.",
    rate: 1.5,
    cancel: true
  });
}
