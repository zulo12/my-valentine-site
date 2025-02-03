document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audio");
    audio.currentTime = 212; // Start music at 3:32 (212 seconds)
    audio.play();

    var yesButton = document.getElementById("yesButton");
    var noButton = document.getElementById("noButton");
    var hiddenMessage = document.getElementById("hiddenMessage");
    var noClicks = 0;

    // Show hidden message when "Yes" is clicked
    yesButton.addEventListener("click", function() {
        hiddenMessage.style.display = "block";
    });

    // Move "No" button and make "Yes" button bigger each time "No" is clicked
    noButton.addEventListener("click", function() {
        noClicks++;
        yesButton.style.transform = `scale(${1 + noClicks * 0.2})`; // Increase size
        noButton.style.position = "absolute";
        noButton.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
        noButton.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
    });
});
