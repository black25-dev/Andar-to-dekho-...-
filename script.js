function showMessage() {
    const messages = [
        "You are my everything! ❤️",
        "I love you more than words can say! 😘",
        "Forever together, forever in love! 💖",
        "You make my world beautiful! 🌍✨"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("hiddenMessage").innerText = randomMessage;
}

function toggleMusic() {
    var music = document.getElementById("bgMusic");
    if (music.paused) {
        music.play();
        document.getElementById("musicBtn").innerText = "⏸ Pause Music";
    } else {
        music.pause();
        document.getElementById("musicBtn").innerText = "🎵 Play Music";
    }
}
