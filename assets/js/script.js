function loadServer(url) {
    document.getElementById('videoPlayer').src = url;
}

function gantiServer(server) {
    const player = document.getElementById("player-frame");
    if (server === 1) {
        player.src = "https://www.youtube.com/embed/dQw4w9WgXcQ";
    } else if (server === 2) {
        player.src = "https://www.youtube.com/embed/tgbNymZ7vqY";
    } else if (server === 3) {
        player.src = "https://www.youtube.com/embed/oHg5SJYRHA0";
    }
}
