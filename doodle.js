let brushHue = 120;
let brushThickness = 30;


function drawDoodle() {
  // Title
  push();
  strokeWeight(4);
  stroke(210.81, 48.05, 60.39);
  fill("white");
  textSize(50);
  textFont("Minion pro");
  text("DOODLE", (screen.width / 3) * 1.26, 40);
  textSize(30);
  text("😊 Express your emotions here 😊", (screen.width/3)*1+25 , 90)

  // Drawing Brush 
  configureBrush();
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
  pop();
  
}

function configureBrush() {
  brushHue += 1;
  if (brushHue > 360) {
    brushHue = 0;
  }
  
  strokeWeight(brushThickness);
  stroke(brushHue, 100, 100);
}

