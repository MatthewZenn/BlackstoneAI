var coin = 0;

document.getElementById('light').addEventListener('click', function() {
  window.location.reload();
})

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
  await sleep (5000);
  document.getElementById('p1').style.opacity = '1';
  document.getElementById('p1').style.top = '0px';
  await sleep(1000);
  document.getElementById('btn').click();
};

async function reply() {
  await sleep(500);
  document.getElementById('loader').style.visibility = 'visible';
  await sleep(3500);
  document.getElementById('loader').style.visibility = 'hidden';
  await sleep(200);
  document.getElementById('p2').style.opacity = '1';
  document.getElementById('p2').style.top = '0px';
  TTS.speak({
    text: "Ok, here are some images of the card you're thinking of.",
    rate: 1.5,
    cancel: true
  });
  await sleep(1500);
  document.getElementById("1").style.opacity = "1";
  await sleep(600);
  document.getElementById("2").style.opacity = "1";
  await sleep(200);
  document.getElementById("3").style.opacity = "1";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}