function preload(){
    song1= loadSound("1.mp3");
    song2=loadSound("2.mp3");
}

function setup(){
canvas =  createCanvas(500, 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
}


function draw(){
image(video, 0, 0, 500, 500);
}