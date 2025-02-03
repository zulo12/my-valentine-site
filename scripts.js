function playMusic() {
    var audio = document.getElementById('audio');
    
    // Set the start time to 3:32 (212 seconds)
    audio.currentTime = 212;  // 3 minutes 32 seconds = 212 seconds
    
    // Play the audio
    audio.play().catch(function(error) {
        console.log('Error playing audio:', error);
    });
}
