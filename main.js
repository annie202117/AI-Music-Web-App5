heading = "";

song1 = "";
song2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload()
{
    song1 = loadSound("electro-summer-positive-party-141081.mp3");
    song2 = loadSound("tropical-summer-music-112842.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969A97');
    canvas = createCanvas(600, 500);
    canvas.center();
    
    song1 = "";
    song2 = "";

      document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
      fill('#F90093');
      stroke('#F90093');
    song_variable.isPlaying()

    if(scoreLeftWrist > 0.2)
    {
    if(leftWristY >0 && leftWristY <= 100)
    {
        circle(leftWristX, leftWristY, 20);
        song2_variable.stop();
    }
    else if(song1 == false)
    {
        song1.play()
        song = "song1"
    }
    }

    if(scoreRightWrist > 0.2)
    {
    if(rightWristY >0 && rightWristY <= 100)
    {
        circle(rightWristX, rightWristY, 20);
        song1_variable.stop();
    }
    else if(song1 == false)
    {
        song2.play()
        song = "song2"
    }
    }
}

    function modelLoaded() {
        console.log('PoseNet is Intitialized');
    }

    function gotPoses(results) 
{
    if(results.length > 0.2)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist =" + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}
