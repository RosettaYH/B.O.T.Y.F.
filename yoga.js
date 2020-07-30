/* global text, stroke, line, noStroke textColor httpDo push pop fill textSize
textFont strokeWeight loadImage songs image div div1, div2, div3, div4, yogaImage1, 
yogaImage2, yogaImage3, exerciseImage rect tint color, colorMode, HSB
*/
//https://github.com/steven-isbell/student-yoga-api/blob/master/yoga.json

function drawYoga() {
//   push();
//   //strokeWeight(4);
//   colorMode(HSB, 255,100,255);
//   //stroke(210.81, 48.05, 60.39);
//   //fill("white");
//   let rectColor = color(255,10,255);
//   rectColor.setAlpha(10);
//   fill(rectColor);
//   rect(0, 120, screen.width / 2 - 5, 750);

  
//   //fill(255,255,255);
//   rect(0, 120, screen.width / 2 - 5, 750);

//   //stroke(210.81, 48.05, 60.39);
//   fill("white");
//   tint(255, 255);
//   rect(screen.width / 2 + 5, 120, screen.width - 5, 750);
//   pop();

  var hiddenInputs = document.getElementById("yVideo1");
  hiddenInputs.style.display = "block";
  var hiddenInputs = document.getElementById("yVideo2");
  hiddenInputs.style.display = "block";
  var hiddenInputs = document.getElementById("yVideo3");
  hiddenInputs.style.display = "block";

  var hiddenInputs = document.getElementById("eVideo1");
  hiddenInputs.style.display = "block";
  var hiddenInputs = document.getElementById("eVideo2");
  hiddenInputs.style.display = "block";
  var hiddenInputs = document.getElementById("eVideo3");
  hiddenInputs.style.display = "block";
  // Titles
  push();
  strokeWeight(4);
  stroke(210.81, 48.05, 60.39);
  fill("white");
  textSize(30);
  textFont("Minion pro");
  text("Practice Yoga 🕉", 200, screen.height / 8);
  text("Workout Your Problems 💪🏼", 900, screen.height / 8);

  textSize(50);
  text("YOGA", (screen.width / 3) * 1.33, 40);

  // Center Line
  stroke(255);
  line(screen.width / 2, screen.height / 10, screen.width / 2, screen.height);

  pop();

  // Images
  image(yogaImage1, 500, 150, yogaImage1.width / 6, yogaImage1.height / 6);
  image(yogaImage2, 100, 400, yogaImage1.width / 6, yogaImage1.height / 6);
  image(yogaImage3, 500, 650, yogaImage1.width / 6, yogaImage1.height / 6);

  image(exImage1, 1180, 130, yogaImage1.width / 4, yogaImage1.height / 4);
  image(exImage2, 800, 400, yogaImage1.width / 4, yogaImage1.height / 4);
  image(exImage3, 1200, 630, yogaImage1.width / 4, yogaImage1.height / 4);

}
