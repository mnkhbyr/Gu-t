document.addEventListener('keydown', function(event) {
    if (event.code === 'Keyp') {
      var audio = document.getElementById('myAudio');
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  });
  
  document.getElementById('myAudio').play();
  