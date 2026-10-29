// JavaScript to toggle videos, remember playback positions, and unmute after the first click

// Select the video element and the text box
var videoPlayer = document.getElementById("videoPlayer");
var textBox = document.getElementById("textBox");

// Array of video sources for toggling
var videoSources = ["videos/brewers.mp4", "videos/packers.mp4", "videos/Fc25.mp4", "videos/video07.mp4", "videos/cigar.mp4"];

// Current video index, starting with the first video
var currentVideoIndex = 0;

// Array to store the playback time for each video
var videoTimes = [0, 0, 0, 0, 0];

// Flag to check if sound should remain unmuted after the first click
var isSoundEnabled = false;

// Initially mute the video
videoPlayer.muted = true;

// Function to toggle between the two videos

function getRandomIndex () {
	let newIndex;
	do {
		newIndex = Math. floor (Math.random() * videoSources.length) ;
} 		while (newIndex === currentVideoIndex) ;
	return newIndex;
}

function toggleVideo() {
	
	if (!isSoundEnabled) {
		videoPlayer.muted = false;
		isSoundEnabled = true;
		
	}

		videoTimes[currentVideoIndex] = videoPlayer.currentTime;
		currentVideoIndex = getRandomIndex ();

		videoPlayer.src = videoSources[currentVideoIndex];
		videoPlayer.load();
		videoPlayer.currentTime = videoTimes[currentVideoIndex];
		videoPlayer.play();
}

// Add a click event to the text box to switch videos
textBox.addEventListener("click", toggleVideo);