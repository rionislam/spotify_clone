/** @format */

// Global Veriables
let myProgressBar = document.getElementById('myProgressBar');
let mySoundBar = document.getElementById('mySoundBar');
let songPlayBtn = document.getElementById('songPlayBtn');
let audioElement = new Audio('../songs/1.mp3');
let volume = document.getElementById('fa-volume-up');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItem = document.getElementsByClassName('songItem');
let index = 0;
let previousBtn = document.getElementsByClassName('fa-step-backward')[0];
let nextBtn = document.getElementsByClassName('fa-step-forward')[0];
let songs = [
  {
    songName: 'Warriyo - Mortals (feat. Laura Brehm)',
    filePath: 'https://github.com/rionislam/spotify_clone/blob/main/songs/1.mp3',
    coverPath: 'https://github.com/rionislam/spotify_clone/blob/main/covers/1.jpg',
    album: 'NCS Release',
    duration: '3:50',
    dateAdded: '15/12/2016',
  },
  {
    songName: 'Cielo – Huma-Huma',
    filePath: 'https://github.com/rionislam/spotify_clone/blob/main/songs/2.mp3',
    coverPath: 'https://github.com/rionislam/spotify_clone/blob/main/covers/2.jpg',
    album: 'No Copyright Music',
    duration: '2:34',
    dateAdded: '09/03/2015',
  },
  {
    songName: 'DEAF KEV - Invincible',
    filePath: 'https://github.com/rionislam/spotify_clone/blob/main/songs/3.mp3',
    coverPath: 'https://github.com/rionislam/spotify_clone/blob/main/covers/3.jpg',
    album: 'NCS Release',
    duration: '4:34',
    dateAdded: '14/05/2015',
  },
  {
    songName: 'Different Heaven & EH!DE - My Heart',
    filePath: 'https://github.com/rionislam/spotify_clone/blob/main/songs/4.mp3',
    coverPath: 'https://github.com/rionislam/spotify_clone/blob/main/covers/4.jpg',
    album: 'NCS Release',
    duration: '4:28',
    dateAdded: '13/11/2013',
  },
  {
    songName: 'Janji - Heroes Tonight (feat. Johnning)',
    filePath: 'https://github.com/rionislam/spotify_clone/blob/main/songs/5.mp3',
    coverPath: 'https://github.com/rionislam/spotify_clone/blob/main/covers/5.jpg',
    album: 'NCS Release',
    duration: '3:29',
    dateAdded: '09/06/2015',
  },
  {
    songName: 'Janji - Heroes Tonight (feat. Johnning)',
    filePath: 'https://github.com/rionislam/spotify_clone/blob/main/songs/6.mp3',
    coverPath: 'https://github.com/rionislam/spotify_clone/blob/main/covers/6.jpg',
    album: 'NCS Release',
    duration: '3:29',
    dateAdded: '09/06/2015',
  },
  {
    songName: 'DEAF KEV - Invincible',
    filePath: 'https://github.com/rionislam/spotify_clone/blob/main/songs/7.mp3',
    coverPath: 'https://github.com/rionislam/spotify_clone/blob/main/covers/7.jpg',
    album: 'NCS Release',
    duration: '4:34',
    dateAdded: '14/05/2015',
  },
  {
    songName: 'Warriyo - Mortals (feat. Laura Brehm)',
    filePath: 'https://github.com/rionislam/spotify_clone/blob/main./songs/8.mp3',
    coverPath: 'https://github.com/rionislam/spotify_clone/blob/main/covers/8.jpg',
    album: 'NCS Release',
    duration: '3:50',
    dateAdded: '15/12/2016',
  },
  {
    songName: 'Janji - Heroes Tonight (feat. Johnning)',
    filePath: 'https://github.com/rionislam/spotify_clone/blob/main/songs/9.mp3',
    coverPath: 'https://github.com/rionislam/spotify_clone/blob/main/covers/9.jpg',
    album: 'NCS Release',
    duration: '3:29',
    dateAdded: '09/06/2015',
  },
  {
    songName: 'Different Heaven & EH!DE - My Heart ',
    filePath: 'https://github.com/rionislam/spotify_clone/blob/main/songs/10.mp3',
    coverPath: 'https://github.com/rionislam/spotify_clone/blob/main/covers/10.jpg',
    album: 'NCS Release',
    duration: '4:28',
    dateAdded: '13/11/2013',
  },
];

// Functions
const makeAllUnactive = () => {
  songItems.forEach((element) => { 
    element.classList.remove('active');
  })
}

// Assigne values to song items
songItems.forEach((element, i) => {
  element.getElementsByTagName('img')[0].src = songs[i].coverPath;
  element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
  element.getElementsByClassName('index')[0].innerHTML = i + 1;
  element.getElementsByClassName('album')[0].innerHTML = songs[i].album;
  element.getElementsByClassName('date')[0].innerHTML = songs[i].dateAdded;
  element.getElementsByClassName('duration')[0].innerHTML = songs[i].duration;
  element.addEventListener('mouseover', () => {
    element.getElementsByClassName('index')[0].innerHTML =
      '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" class="svg-inline--fa fa-play fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>';
  });
  element.addEventListener('mouseout', () => {
    element.getElementsByClassName('index')[0].innerHTML = i + 1;
  });
  element.addEventListener('click', () => {
    audioElement.src = songs[i].filePath;
    audioElement.play();
    songPlayBtn.src = '../svg/pause-circle-solid.svg';
    document.getElementById('cover').src = songs[i].coverPath;
    document.getElementById('songName').innerHTML = songs[i].songName;
    document.getElementById('duration').innerHTML = songs[i].duration;
    makeAllUnactive();
    element.classList.add('active');
    index = i;
  });
});

// Progressbar Animations
myProgressBar.addEventListener('input', () => {
  document.getElementById('progress').style.width = myProgressBar.value + '%';
  document.getElementById('selector').style.left = myProgressBar.value + '%';
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

// Soundbar Annimations
mySoundBar.addEventListener('input', () => {
  document.getElementById('volume').style.width = mySoundBar.value + '%';
  document.getElementById('volumeSelector').style.left = mySoundBar.value + '%';
  audioElement.volume = mySoundBar.value / 100;
  if (mySoundBar.value == 0) {
    audioElement.pause();
    songPlayBtn.src = '../svg/play-circle-solid.svg';
    volume.innerHTML =
      '<path fill="currentColor" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"></path>';
  } else {
    volume.innerHTML =
      '<path fill="currentColor" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"></path>';
  }
});

// Play/pause click event
songPlayBtn.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    songPlayBtn.src = 'https://github.com/rionislam/spotify_clone/blob/main/svg/pause-circle-solid.svg';
    if (audioElement.volume == 0) {
      audioElement.volume = 0.1;
      document.getElementById('volume').style.width = '10%';
      document.getElementById('volumeSelector').style.left = '10%';
      volume.innerHTML =
        '<path fill="currentColor" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"></path>';
    }
  } else {
    audioElement.pause();
    songPlayBtn.src = 'https://github.com/rionislam/spotify_clone/blob/main/svg/play-circle-solid.svg';
  }
});

// Mute/unmute click event
volume.addEventListener('click', () => {
  if (audioElement.volume == 0) {
    audioElement.volume = 1;
    document.getElementById('volume').style.width = '100%';
    document.getElementById('volumeSelector').style.left = '100%';
    volume.innerHTML =
      '<path fill="currentColor" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"></path>';
  } else {
    audioElement.volume = 0;
    document.getElementById('volume').style.width = '0%';
    document.getElementById('volumeSelector').style.left = '0%';
    volume.innerHTML =
      '<path fill="currentColor" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"></path>';
    audioElement.pause();
    songPlayBtn.src = 'https://github.com/rionislam/spotify_clone/blob/main/svg/play-circle-solid.svg';
  }
});

// Update Seekbar
audioElement.addEventListener('timeupdate', () => {
  progress = parseFloat(
    (audioElement.currentTime / audioElement.duration) * 100,
  );
  myProgressBar.value = progress;
  document.getElementById('progress').style.width = progress + '%';
  document.getElementById('selector').style.left = progress + '%';
  minutes = Math.floor(audioElement.currentTime / 60);
  seconds = Math.floor(audioElement.currentTime % 60);
  seconds = (seconds >= 10) ? seconds : "0" + seconds;
  currentTime = minutes + ':' + seconds;
  document.getElementById('currentTime').innerHTML = currentTime;

  
});

// previous btn click event
previousBtn.addEventListener('click', () => {
  if (index < 1) {
    index = 9;
    audioElement.src = songs[index].filePath;
    audioElement.play();
    
  } else {
    index--;
    audioElement.src = songs[index].filePath;
    audioElement.play();
  }
  makeAllUnactive();
  songItems[index].classList.add('active');
  songPlayBtn.src = 'https://github.com/rionislam/spotify_clone/blob/main/svg/pause-circle-solid.svg';
  document.getElementById('cover').src = songs[index].coverPath;
  document.getElementById('songName').innerHTML = songs[index].songName;
  document.getElementById('duration').innerHTML = songs[index].duration;
})

// next btn click event
nextBtn.addEventListener('click', () => {
  if (index > 9) {
    index = 0;
    audioElement.src = songs[index].filePath;
    audioElement.play();
    
  } else {
    index++;
    audioElement.src = songs[index].filePath;
    audioElement.play();
  }
  makeAllUnactive();
  songItems[index].classList.add('active');
  songPlayBtn.src = 'https://github.com/rionislam/spotify_clone/blob/main/svg/pause-circle-solid.svg';
  document.getElementById('cover').src = songs[index].coverPath;
  document.getElementById('songName').innerHTML = songs[index].songName;
  document.getElementById('duration').innerHTML = songs[index].duration;
})
