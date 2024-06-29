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

async function record() {
  //somthing
  await sleep (5000)
  document.getElementById('btn').click();
};

async function reply() {
  await sleep(500);
  document.getElementById('loader').style.display = 'inline-block';
  await sleep(3500);
  document.getElementById('loader').style.display = 'none';
  TTS.speak({
    text: "Ok, here are some images of the card you're thinking of.",
    rate: 1.5,
    cancel: true
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}