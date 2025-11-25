var video;

window.addEventListener("load", function () {
    console.log("Good job opening the window");


    video = document.getElementById("player1");

    video.autoplay = false;
    video.loop = false;
    video.load();


    document.getElementById("volume").innerHTML = (video.volume * 100) + "%";
});


document.querySelector("#play").addEventListener("click", function () {
    console.log("Play Video");
    video.play();

    document.getElementById("volume").innerHTML = (video.volume * 100) + "%";
});


document.querySelector("#pause").addEventListener("click", function () {
    console.log("Pause Video");
    video.pause();
});


document.querySelector("#slower").addEventListener("click", function () {
    video.playbackRate = video.playbackRate * 0.9;
    console.log("New speed:", video.playbackRate);
});


document.querySelector("#faster").addEventListener("click", function () {
    video.playbackRate = video.playbackRate / 0.9;
    console.log("New speed:", video.playbackRate);
});


document.querySelector("#skip").addEventListener("click", function () {
    console.log("Original location:", video.currentTime);

    video.currentTime += 10;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }

    console.log("New location:", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function () {
    if (video.muted === false) {
        video.muted = true;
        this.innerHTML = "Unmute";
        console.log("Muted");
    } else {
        video.muted = false;
        this.innerHTML = "Mute";
        console.log("Unmuted");
    }
});

document.querySelector("#slider").addEventListener("input", function () {
    video.volume = this.value / 100;
    document.getElementById("volume").innerHTML = this.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function () {
    console.log("Old School");
    video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function () {
    console.log("Original");
    video.classList.remove("oldSchool");
});
