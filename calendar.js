/* global fill, text, strokeWeight, 
  line, stroke, ellipse, height, textFont, sliderValues, imgEmotion
  textSize image circle, image, img, push, pop
*/

let thickness = 5;
let tSize = 20;
let dHeight = 615;
let dWidth = 355;

function drawCalendar() {
  // Title
  push();
  strokeWeight(4);
  stroke(210.81, 48.05, 60.39);
  //fill(210.00, 5.02, 93.73)
  fill("white");
  textSize(50);
  textFont("Minion pro");
  // fill("black")
  // textSize(28)
  text("CALENDAR", (screen.width / 3) * 1.22, 40);

  // X and Y axis
  xAxis();
  yAxis();

  // Print chart elements
  printChart();

  pop();
}

function xAxis() {
  push();
  strokeWeight(4);
  stroke(210.81, 48.05, 60.39);
  fill("white");
  textSize(tSize);
  textFont("Minion pro");

  text("Monday", 420, dHeight);
  text("Tuesday", 520, dHeight);
  text("Wednesday", 605, dHeight);
  text("Thursday", 715, dHeight);
  text("Friday", 825, dHeight);
  text("Saturday", 920, dHeight);
  text("Sunday", 1025, dHeight);

  pop();
}

function yAxis() {
  image(
    imgEmo1,
    305,
    85,
    (imgEmo1.width * 13) / 35,
    (imgEmo1.height * 13) / 35
  );
  image(
    imgEmo2,
    310,
    185,
    (imgEmo2.width * 13) / 35,
    (imgEmo2.height * 13) / 35
  );
  image(
    imgEmo3,
    315,
    285,
    (imgEmo3.width * 13) / 35,
    (imgEmo3.height * 13) / 35
  );
  image(
    imgEmo4,
    308,
    385,
    (imgEmo4.width * 13) / 35,
    (imgEmo4.height * 13) / 35
  );
  image(
    imgEmo5,
    310,
    485,
    (imgEmo5.width * 13) / 35,
    (imgEmo5.height * 13) / 35
  );
}

function printChart() {
  strokeWeight(thickness);
  stroke(126);
  line(400, 50, 400, 575);
  line(400, 575, 1100, 575);

  // Dots 
  for (let i = 0; i < sliderValues.length; i++) {
    push();
    fill("white");
    // draw Dircles when equal to the sliderValues
    console.log(sliderValues[i]);
    circle(100 * i + 450, sliderValues[i], 10);
    pop();
  }

  // Lines connecting
  for (let i = 0; i < sliderValues.length - 1; i++) {
    push();
    fill("white");
    // draw Dircles when equal to the sliderValues
    line(
      100 * i + 450,
      sliderValues[i],
      100 * (i + 1) + 450,
      sliderValues[i + 1]
    );
    pop();
  }

  // Lines
  for (let y = 125; y <= 575; y += 100) {
    fill("white");
    strokeWeight(2);
    line(400, y, 1100, y);
  }

  // Marks
  for (let x = 450; x <= 1050; x += 100) {
    line(x, 565, x, 585);
  }

  for (let y = 125; y <= 575; y += 100) {
    line(390, y, 410, y);
  }
}
