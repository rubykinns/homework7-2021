var video = document.querySelector("#player1");
var volume = document.querySelector("#volume");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	// volume.innerHTML="100%"
	video.play();
	document.querySelector("#volume").innerHTML=video.volume *100 +"%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Change CSS");
	video.classList.add("oldSchool");
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	const buttonElement = document.getElementById("mute");
	
	if (video.muted === false) {
		video.muted = true;
		buttonElement.textContent = "Unmute";
 	}
	else {
		video.muted = false;
		buttonElement.textContent = "Mute";
    }
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *=.95;
	console.log("New speed is "+ video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate/.95;
	console.log("New speed is "+ video.playbackRate);
});

document.querySelector("#slider").addEventListener("click", function() {
	
	console.log("Changing volume" );
	console.log(this.value);
	video.volume = this.value /100;
	document.querySelector("#volume").innerHTML=video.volume *100 +"%";
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Video");
	video.classList.remove("oldSchool");
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime += 15;
	console.log("Current time is "+ video.currentTime);
	// console.log(video.duration);

	if (video.currentTime === video.duration) {
		video.currentTime = 0;
	}
	// console.log(video.currentTime);
});