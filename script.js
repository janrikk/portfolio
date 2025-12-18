// 1. Tab Switching Logic
function showTab(tabId) {
    // Hide all tabs
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active-tab'));

    // Deactivate all menu items
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(item => item.classList.remove('active'));

    // Show specific tab
    document.getElementById(tabId).classList.add('active-tab');
    
    // Highlight specific menu item (simple matching text logic)
    // In a real app, you might pass the element 'this' to the function
    const activeLink = Array.from(menuItems).find(item => 
        item.innerText.toLowerCase().includes(tabId.split('-')[0])
    );
    if(activeLink) activeLink.classList.add('active');
}

// 2. Audio Player Logic
const audioPlayer = document.getElementById('main-audio-player');
const nowPlayingText = document.getElementById('now-playing');

function playTrack(sourceUrl, element) {
    // Reset all play icons visually
    document.querySelectorAll('.track').forEach(t => t.classList.remove('playing'));
    document.querySelectorAll('.play-icon').forEach(icon => icon.innerText = '▶');

    // If we clicked the track that is already playing, pause it
    if (!audioPlayer.paused && audioPlayer.src.includes(sourceUrl)) {
        audioPlayer.pause();
        nowPlayingText.innerText = "Paused";
        return;
    }

    // Set new source and play
    audioPlayer.src = sourceUrl;
    audioPlayer.play();

    // Update Visuals
    element.classList.add('playing');
    element.querySelector('.play-icon').innerText = '❚❚'; // Pause symbol
    const title = element.querySelector('.track-title').innerText;
    nowPlayingText.innerText = "Now Playing: " + title;
}