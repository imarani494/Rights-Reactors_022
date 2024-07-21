const music = new Audio('vande.mp3');

// create Array 



// Check if the redirect has already occurred
if (!sessionStorage.getItem('redirected')) {
    // Set a timeout to redirect after 5 seconds
    let timeoutId = setTimeout(() => {
        // Set a flag in sessionStorage to indicate the redirect has occurred
        
        window.location.href = "./signup/signup.html";
    }, 10000);
}


function hideButtonsIfLoggedIn() {
    if (localStorage.getItem('loggedIn') === 'true') {
        document.getElementById('Loginbut').style.display = 'none';
        document.getElementById('Signupbut').style.display = 'none';
        document.getElementById('logout').style.display = 'block';
    } else {
        document.getElementById('Loginbut').style.display = 'inline';
        document.getElementById('Signupbut').style.display = 'inline';
        document.getElementById('logout').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', hideButtonsIfLoggedIn);

document.addEventListener('DOMContentLoaded', () => {
    let logout = document.getElementById('logout');
    logout.addEventListener('click', () => {
        localStorage.setItem('loggedIn', 'false');
        sessionStorage.setItem('redirected', 'false');
        window.location.href = './Login/login.html';
    });
});

document.addEventListener('DOMContentLoaded', hideButtonsIfLoggedIn);



const songs = [
    {
        id:'1',
        songName:` On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName:` Alan Walker-Fade <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
    },
    // all object type 
    {
        id:"3",
        songName: `Cartoon - On & On <br><div class="subtitle"> Daniel Levi</div>`,
        poster: "img/3.jpg",
    },
    {
        id:"4",
        songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
        poster: "img/4.jpg",
    },
    {
        id:"5",
        songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
        poster: "img/5.jpg",
    },
    {
        id:"6",
        songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
        poster: "img/6.jpg",
    },
    {
        id:"7",
        songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName: `Suna Hai <br><div class="subtitle">Neha Kakker</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"9",
        songName: `Dilber <br><div class="subtitle">Satyameva Jayate</div>`,
        poster: "img/9.jpg",
    },
    {
        id:"10",
        songName: `Duniya <br><div class="subtitle">Luka Chuppi</div>`,
        poster: "img/10.jpg",
    },
    {
        id:"11",
        songName: `Lagdi Lahore Di <br><div class="subtitle">Street Dancer 3D</div>`,
        poster: "img/11.jpg",
    },
    {
        id:"12",
        songName: `Putt Jatt Da <br><div class="subtitle">Putt Jatt Da</div>`,
        poster: "img/12.jpg",
    },
    {
        id:"13",
        songName: `Baarishein <br><div class="subtitle">Atif Aslam</div>`,
        poster: "img/13.jpg",
    },
    {
        id:"14",
        songName: `Vaaste <br><div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/14.jpg",
    },
    {
        id:"15",
        songName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/15.jpg",
    },
    {
        id:'1',
        songName:` On My Way <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName:` Alan Walker-Fade <br>
        <div class="subtitle">Alan Walker</div>`,
        poster: "img/2.jpg"
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele =>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;


    // Get the sign-up button element
// const signupButton = document.getElementById('signupButton');

// // Add click event listener to the sign-up button
// signupButton.addEventListener('click', function() {
//     // Redirect to the sign-up page
//     window.location.href = './sign_up/signup.html';
// });

// const loginbut = document.getElementById('Loginbut');
// loginbut.addEventListener('click', function() {
   
//     window.location.href = './Login/login.html';
// });

document.addEventListener('DOMContentLoaded', () => {
    // Step 1: Simulate fetching songs data
    function fetchSongsData(artist) {
        // Example song data
        const songsData = {
            "Arjit Singh": [
                { title: "Tum Hi Ho", duration: "4:22" },
                { title: "Channa Mereya", duration: "5:10" },
                { title: "Raabta", duration: "4:10" }
            ],
            // Add more artists and songs as needed
        };
        return songsData[artist] || [];
    }

    // Step 2: Render songs in the HTML
    function renderSongs(songs) {
        const songsList = document.getElementById('songs-list');
        songsList.innerHTML = ''; // Clear any existing songs

        if (songs.length === 0) {
            songsList.innerHTML = '<p>No songs found for this artist.</p>';
            return;
        }

        songs.forEach(song => {
            const songDiv = document.createElement('div');
            songDiv.className = 'song';
            songDiv.innerHTML = `<strong>${song.title}</strong> - ${song.duration}`;
            songsList.appendChild(songDiv);
        });
    }

    // Step 3: Handle artist click event
    function handleArtistClick(event) {
        const artist = event.currentTarget.getAttribute('data-artist');
        if (artist) {
            document.getElementById('artist-name').textContent = artist;
            const songs = fetchSongsData(artist);
            renderSongs(songs);
        }
    }

    // Step 4: Add event listeners to artist elements
    const artistElements = document.querySelectorAll('.artist');
    artistElements.forEach(artistElement => {
        artistElement.addEventListener('click', handleArtistClick);
    });
});


})

// Rutvik End
// <!-- manish day4 -->
const API_URL = "http://localhost:3000/songs";
const searchInput = document.getElementById("search-input");
const resultsContainer = document.getElementById("results");
// day6manish
const audioPlayer = document.createElement("audio");
        audioPlayer.id = "audio-player";
        audioPlayer.style.display = "none";
        document.body.appendChild(audioPlayer);
// day6manish
let debounceTimeout;
searchInput.addEventListener("input", () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    const query = searchInput.value.trim().toLowerCase();
    if (query) {
      fetchSongs(query);
    } else {
      resultsContainer.innerHTML = "";
      songDetailsContainer.innerHTML = "";
    }
  }, 500);
});
async function fetchSongs(query) {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const filteredSongs = data.filter((song) =>
      song.name.toLowerCase().includes(query)
    );
    if (filteredSongs.length > 0) {
      displayResults(filteredSongs);
    } else {
      resultsContainer.innerHTML = `<p>No songs found</p>`;
    }
  } catch (error) {
    resultsContainer.innerHTML = `<p>Error fetching data</p>`;
  }
}
/* manishday6 */
function displayResults(songs) {
    resultsContainer.innerHTML = "";
    songs.forEach((song, index) => {
      const songDiv = document.createElement("div");
      songDiv.classList.add("song-title");
      songDiv.style.cursor = "pointer";
      songDiv.textContent = song.name;
      songDiv.addEventListener("click", () => {
        resultsContainer.innerHTML = "";
        showSongPopup(song);
      });
      resultsContainer.appendChild(songDiv);
    });
  }
/* manishday5 */
  function showSongPopup(song) {
    // Create popup elements
    const popupOverlay = document.createElement("div");
    popupOverlay.classList.add("popup-overlay");
    const popup = document.createElement("div");
    popup.classList.add("popup");
    const songTitle = document.createElement("h2");
    songTitle.textContent = song.name;
    const songArtist = document.createElement("p");
    songArtist.innerHTML = `<strong>Artist:</strong> ${song.artist}`;
    const songAlbum = document.createElement("p");
    songAlbum.innerHTML = `<strong>Album:</strong> ${song.album}`;
    const songLanguage = document.createElement("p");
    songLanguage.innerHTML = `<strong>Language:</strong> ${song.language}`;
    const songCategory = document.createElement("p");
    songCategory.innerHTML = `<strong>Category:</strong> ${song.category}`;
    const songDuration = document.createElement("p");
    songDuration.innerHTML = `<strong>Duration:</strong> ${song.duration}`;
    const songGenre = document.createElement("p");
    songGenre.innerHTML = `<strong>Genre:</strong> ${song.genre}`;
    const songPoster = document.createElement("img");
    songPoster.src = song.songposterurl;
    songPoster.alt = song.name;
    const playButton = document.createElement("button");
    playButton.textContent = "Play";
    playButton.addEventListener("click", () => {
      
      showMusicPlayer(song);
      document.body.removeChild(popupOverlay);
    });
    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", () => {
      document.body.removeChild(popupOverlay);
    });
    // Append elements to popup
    popup.appendChild(songTitle);
    popup.appendChild(songArtist);
    popup.appendChild(songAlbum);
    popup.appendChild(songLanguage);
    popup.appendChild(songCategory);
    popup.appendChild(songDuration);
    popup.appendChild(songGenre);
    popup.appendChild(songPoster);
    popup.appendChild(playButton);
    popup.appendChild(closeButton);
    // Append popup to overlay
    popupOverlay.appendChild(popup);
    // Append overlay to body
    document.body.appendChild(popupOverlay);
  }
  function showMusicPlayer(song) {
// Remove existing popup if any
const existingPopup = document.getElementById("music-player-popup");
if (existingPopup) {
existingPopup.remove();
}
// Create overlay
const overlay = document.createElement("div");
overlay.id = "music-player-popup";
overlay.className = "popup-overlay";
// Create popup container
const popup = document.createElement("div");
popup.className = "popup";
// Close button
const closeButton = document.createElement("button");
closeButton.textContent = "X";
closeButton.className = "popup-close";
closeButton.addEventListener("click", () => {
// Stop and clear the audio player
audioPlayer.pause();
audioPlayer.src = "";
document.body.removeChild(overlay);
});
// Music player UI elements
const songImage = document.createElement("img");
songImage.src = song.songposterurl;
songImage.alt = song.name;
const songName = document.createElement("h2");
songName.textContent = song.name;
const songArtist = document.createElement("p");
songArtist.innerHTML = `<strong>Artist:</strong> ${song.artist}`;
const playerControls = document.createElement("div");
playerControls.className = "controls";
const playPauseButton = document.createElement("i");
playPauseButton.className = "bi bi-pause";
playPauseButton.addEventListener("click", () => {
if (audioPlayer.paused) {
audioPlayer.play();
playPauseButton.className = "bi bi-pause";
} else {
audioPlayer.pause();
playPauseButton.className = "bi bi-play";
}
});
const prevButton = document.createElement("i");
prevButton.className = "bi bi-skip-backward";
prevButton.addEventListener("click", () => {
currentSongIndex = (currentSongIndex - 1 + songsList.length) % songsList.length;
playSong(songsList[currentSongIndex]);
});
const nextButton = document.createElement("i");
nextButton.className = "bi bi-skip-forward";
nextButton.addEventListener("click", () => {
currentSongIndex = (currentSongIndex + 1) % songsList.length;
playSong(songsList[currentSongIndex]);
});
playerControls.appendChild(prevButton);
playerControls.appendChild(playPauseButton);
playerControls.appendChild(nextButton);
// Create progress bar
const progressBar = document.createElement("div");
progressBar.className = "progress-bar";
const progress = document.createElement("div");
progress.className = "progress";
const progressHandle = document.createElement("div");
progressHandle.className = "progress-handle";
progressBar.appendChild(progress);
progressBar.appendChild(progressHandle);
// Update progress bar
audioPlayer.addEventListener("timeupdate", () => {
const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
progress.style.width = `${progressPercent}%`;
progressHandle.style.left = `${progressPercent}%`;
});
progressHandle.addEventListener("mousedown", (event) => {
const onMouseMove = (e) => {
const rect = progressBar.getBoundingClientRect();
const x = e.clientX - rect.left;
const percent = Math.min(Math.max(x / rect.width, 0), 1);
audioPlayer.currentTime = percent * audioPlayer.duration;
progress.style.width = `${percent * 100}%`;
progressHandle.style.left = `${percent * 100}%`;
};
document.addEventListener("mousemove", onMouseMove);
document.addEventListener("mouseup", () => {
document.removeEventListener("mousemove", onMouseMove);
});
});
// Create volume control
const volumeControl = document.createElement("div");
volumeControl.className = "volume-control";
const volumeLabel = document.createElement("span");
volumeLabel.textContent = "Volume:";
const volumeInput = document.createElement("input");
volumeInput.type = "range";
volumeInput.min = "0";
volumeInput.max = "1";
volumeInput.step = "0.1";
volumeInput.value = "1";
volumeInput.addEventListener("input", () => {
audioPlayer.volume = volumeInput.value;
});
volumeControl.appendChild(volumeLabel);
volumeControl.appendChild(volumeInput);
// Set up audio player
function playSong(song) {
audioPlayer.src = song.songurl;
audioPlayer.play();
document.querySelector(".popup h2").textContent = song.name;
document.querySelector(".popup img").src = song.songposterurl;
}
playSong(song);
// Append elements to popup
popup.appendChild(closeButton);
popup.appendChild(songImage);
popup.appendChild(songName);
popup.appendChild(songArtist);
popup.appendChild(playerControls);
popup.appendChild(progressBar);
popup.appendChild(volumeControl);
// Append popup to overlay
overlay.appendChild(popup);
// Append overlay to body
document.body.appendChild(overlay);
}
  /* manishday6 */
  
  
// <!-- manish day4 -->