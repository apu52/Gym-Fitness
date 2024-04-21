// Create an audio element
const audio = new Audio();

// Set the audio source
audio.src = "music.mp3";

// Set the audio to loop
audio.loop = true;

// Play the audio
audio.play();

// Add an event listener to the window object to reload the page when the audio ends
window.addEventListener("ended", function() {
  location.reload();
});
