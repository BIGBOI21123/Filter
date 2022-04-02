noseX = 0;
noseY = 0;

function preload() {
    imgc = loadImage('Clown.png');
    imgh = loadImage('ClownHat.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(imgc, noseX-40, noseY-50, 80, 70);
    image(imgh, noseX-70, noseY-150, 130, 80);
}

function take_snapshot() {
    save('Snapshot.png');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose Y is" + noseY);
        console.log("Nose X is" + noseX);
    }
}