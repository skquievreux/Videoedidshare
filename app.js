// Initialize video player with markers plugin
const player = videojs('videoPlayer', {
    controls: true,
    fluid: true,
    techOrder: ['youtube', 'html5'],
    youtube: {
        ytControls: 2,
        rel: 0,
        modestbranding: 1,
        showinfo: 0,
        enablejsapi: 1,
        origin: window.location.origin
    },
    plugins: {
        markers: {
            markerTip: {
                display: true,
                text: function(marker) {
                    return marker.text;
                }
            },
            markers: []
        }
    }
});

let comments = JSON.parse(localStorage.getItem('videoComments')) || [];

// Load video from URL input
function loadVideo() {
    const videoUrl = document.getElementById('videoUrl').value;
    if (!videoUrl) return;
    
    const ytRegex = /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:[^\s]*)/;
    const ytMatch = videoUrl.match(ytRegex);
    
    if (ytMatch) {
        player.src({
            type: 'video/youtube',
            src: `https://www.youtube.com/watch?v=${ytMatch[1]}`
        });
    } else {
        player.src({ type: 'video/mp4', src: videoUrl });
    }
    player.markers.reset();
    updateMarkers();
}

// Add new comment with current timestamp
function addComment() {
    const commentText = document.getElementById('commentText').value;
    const timestamp = player.currentTime();
    
    if (!commentText) return;
    
    const newComment = {
        id: Date.now(),
        time: timestamp,
        text: commentText,
        date: new Date().toISOString()
    };
    
    comments.push(newComment);
    saveComments();
    updateCommentsUI();
    addMarker(newComment);
    document.getElementById('commentText').value = '';
}

// Save comments to localStorage
function saveComments() {
    localStorage.setItem('videoComments', JSON.stringify(comments));
}

// Update comments list UI
function updateCommentsUI() {
    const list = document.getElementById('commentsList');
    list.innerHTML = comments
        .sort((a, b) => a.time - b.time)
        .map(comment => `
            <div class="comment-item" data-time="${comment.time}" onclick="seekTo(${comment.time})">
                <span class="timestamp">${formatTime(comment.time)}</span>
                ${comment.text}
            </div>
        `).join('');
}

// Add timeline marker
function addMarker(comment) {
    player.markers.add([{
        time: comment.time,
        text: comment.text,
        overlayText: comment.text
    }]);
}

// Update all markers
function updateMarkers() {
    player.markers.reset(comments.map(comment => ({
        time: comment.time,
        text: comment.text
    })));
}

// Seek to timestamp
function seekTo(time) {
    player.currentTime(time);
    player.play();
}

// Format seconds to MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Update current time display
player.on('timeupdate', () => {
    document.getElementById('currentTime').textContent = formatTime(player.currentTime());
});

// Initial setup
document.getElementById('videoUrl').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') loadVideo();
});

// Handle URL parameters and initialize
function handleUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const videoParam = params.get('v');
    const commentsParam = params.get('c');
    
    if (videoParam) {
        document.getElementById('videoUrl').value = decodeURIComponent(videoParam);
        loadVideo();
    }
    
    if (commentsParam) {
        try {
            // URL-sicheres Base64 Decoding
            const safeDecoded = decodeURIComponent(commentsParam);
            const decoded = atob(safeDecoded.replace(/-/g, '+').replace(/_/g, '/'));
            comments = JSON.parse(decoded);
            
            // UI und Player komplett aktualisieren
            updateCommentsUI();
            player.markers.reset();
            comments.forEach(comment => addMarker(comment));
            player.markers.redraw();
            
        } catch(e) {
            console.error('Fehler beim Laden der Kommentare:', e);
            alert('Kommentare konnten nicht geladen werden: ' + e.message);
        }
    }
}

function generateShareLink() {
    const videoUrl = document.getElementById('videoUrl').value;
    if (!videoUrl) return '';
    
    const params = new URLSearchParams();
    params.set('v', encodeURIComponent(videoUrl));
    
    if (comments.length > 0) {
        const commentsBase64 = btoa(JSON.stringify(comments))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
        params.set('c', commentsBase64);
    }
    
    return `${window.location.origin}/index.html?${params}`;
}

function copyShareLink() {
    const link = generateShareLink();
    navigator.clipboard.writeText(link).then(() => {
        alert('Shareable link copied to clipboard:\n' + link);
    }).catch(() => {
        prompt('Copy this link:', link);
    });
}

// Initialize application
handleUrlParams();