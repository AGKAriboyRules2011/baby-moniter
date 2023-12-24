function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
}
img = "";
object = [];
status = "";

function preload(){
img = loadImage('baby-sleeping-2.jpg');
}

function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380,380);
  video.hide();
}

function modelLoaded() {
console.log("Model Loaded!");
status = true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, result) {
if (error) {
console.log(error);
}
console.log(results);
}

function draw() {
  image(img, 0, 0, 640, 420);
  
      if(status != "")
     {
       for (i = 0; i < object.length; i++)  {
           document.getElementById("status").innerHTML = "Status : Object Detected";
          
           fill("#FF0000");
           percent = floor(objects[i].confidence * 100);
           text(objects[i].label + " " + percent + "%", objects[i].x + 15, object[i].y + 15);
           noFill();  
           stroke("#FF0000");
           rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
       }
     }
}