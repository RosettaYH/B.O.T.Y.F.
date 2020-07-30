/* global
 *    HSB, background, colorMode, createCanvas, ellipse, fill, height,
 *    noStroke, random, windowHeight, windowWidth, width, createButton, text, textSize
 *    drawMood, drawMusic, drawDoodle, drawYoga, drawCalendar, rect, noCanvas, httpDo, image, 
 textFont, clear, createSlider, loadImage, strokeWeight, stroke, noFill, createDiv, tempQuote, str, resizeCanvas
 x, y, push, pop, line, keyCode, UP_ARROW, loadSound
*/

let buttons = [];

let currentPage = "index";

let quotes = [];
let quote;
let newQuotes = [];

let imgEmotion;
let imgEmo1, imgEmo2, imgEmo3, imgEmo4, imgEmo5;
let mSlider;
let sliderValue = 0;
let sliderValues = [];

let moodImg;

let pineappleImg, quoteImg1, quoteImg2, quoteImg3;
let yogaImage1, yogaImage2, yogaImage3;
let exImage1, exImage2, exImage3;
let exerciseImage;
let rainImage;

let song;
let songPlay = true;

async function preload() {
  // Loading Quotes
  let response = await httpDo("https://type.fit/api/quotes");
  quotes = JSON.parse(response).map(quote => quote.text);

  // Limiting the length of quote
  for (quote in quotes) {
    tempQuote = quotes.pop();
    if (tempQuote.length <= 65) {
      str(newQuotes.push(tempQuote));
    }
  }

  // Generate a random quote to display
  quote = random(newQuotes);
}

function setup() {
  // Creating Canvas
  createCanvas(screen.width, screen.height);
  colorMode(HSB, 360, 100, 100);

  // Creating Buttons
  buttons = [
    makeButton((screen.height / 4) * 1, "MOOD BOOST", "mood"),
    makeButton((screen.height / 4) * 1.4, "MUSIC", "music"),
    makeButton((screen.height / 4) * 1.8, "DOODLE", "doodle"),
    makeButton((screen.height / 4) * 2.2, "YOGA", "yoga"),
    makeButton((screen.height / 4) * 2.6, "CALENDAR", "calendar"),

    // Submit button
    makeButton(screen.height / 2 + 50, "SUBMIT", "index")
  ];
  makeButton(5, "HOME", "index");
  makeButton(5, "🎵", "index");

  // Creating emotion slider
  mSlider = createSlider(0, 10, 0);

  imgEmotion = loadImage(
    "https://cdn.glitch.com/4ca366f3-f7ca-46f6-81f2-71131afbd35b%2Foutput-onlinejpgtools.png?v=1596005822382"
  );
  imgEmo1 = loadImage(
    "https://cdn.glitch.com/4ca366f3-f7ca-46f6-81f2-71131afbd35b%2Foutput-onlinejpgtools%20(1).png?v=1596055256181"
  );
  imgEmo2 = loadImage(
    "https://cdn.glitch.com/4ca366f3-f7ca-46f6-81f2-71131afbd35b%2Foutput-onlinejpgtools%20(2).png?v=1596055420324"
  );
  imgEmo3 = loadImage(
    "https://cdn.glitch.com/4ca366f3-f7ca-46f6-81f2-71131afbd35b%2Foutput-onlinejpgtools%20(3).png?v=1596055516640"
  );
  imgEmo4 = loadImage(
    "https://cdn.glitch.com/4ca366f3-f7ca-46f6-81f2-71131afbd35b%2Foutput-onlinejpgtools%20(4).png?v=1596055519207"
  );
  imgEmo5 = loadImage(
    "https://cdn.glitch.com/4ca366f3-f7ca-46f6-81f2-71131afbd35b%2Foutput-onlinejpgtools%20(5).png?v=1596055539528"
  );

  moodImg = loadImage(
    "https://cdn.glitch.com/4ca366f3-f7ca-46f6-81f2-71131afbd35b%2FIMG_2600.JPG?v=1596137228207"
  );
  // Load Mood Boost Images
  pineappleImg = loadImage(
    "https://cdn.glitch.com/4ca366f3-f7ca-46f6-81f2-71131afbd35b%2Fpineapple%20image.png?v=1595969936047"
  );
  quoteImg1 = loadImage(
    "https://cdn.glitch.com/4ca366f3-f7ca-46f6-81f2-71131afbd35b%2FD75b4k-XYAAcu_6.jpg?v=1595973250536"
  );
  quoteImg2 = loadImage(
    "https://cdn.glitch.com/4ca366f3-f7ca-46f6-81f2-71131afbd35b%2Fkotokomi200500037.jpg?v=1595973314586"
  );
  quoteImg3 = loadImage(
    "https://cdn.glitch.com/4ca366f3-f7ca-46f6-81f2-71131afbd35b%2Fbe-proud-mental-health-quote.jpg?v=1595973299739"
  );

  // Load Yoga Images
  yogaImage1 = loadImage(
    "https://cdn.glitch.com/4ca366f3-f7ca-46f6-81f2-71131afbd35b%2Foutput-onlinepngtools-3.png?v=1596050861779"
  );

  yogaImage2 = loadImage(
    "https://cdn.glitch.com/4ca366f3-f7ca-46f6-81f2-71131afbd35b%2Foutput-onlinepngtools.png?v=1596050680392"
  );

  yogaImage3 = loadImage(
    "https://cdn.glitch.com/4ca366f3-f7ca-46f6-81f2-71131afbd35b%2Foutput-onlinepngtools-2.png?v=1596050854626"
  );

  exImage1 = loadImage(
    "https://cdn.glitch.com/4ca366f3-f7ca-46f6-81f2-71131afbd35b%2Foutput-onlinepngtools-6.png?v=1596137678998"
  );
  exImage2 = loadImage(
    "https://cdn.glitch.com/4ca366f3-f7ca-46f6-81f2-71131afbd35b%2Foutput-onlinepngtools-8.png?v=1596138003851"
  );
  exImage3 = loadImage(
    "https://cdn.glitch.com/4ca366f3-f7ca-46f6-81f2-71131afbd35b%2Foutput-onlinepngtools-7.png?v=1596137886505"
  );

  // Load Excercise Images
  exerciseImage = loadImage(
    "https://cdn.glitch.com/4ca366f3-f7ca-46f6-81f2-71131afbd35b%2Fmental-health-benefits-of-exercise.jpg?v=1595973273983"
  );

  rainImage = loadImage(
    "https://cdn.glitch.com/4ca366f3-f7ca-46f6-81f2-71131afbd35b%2Ftattly_rainbow_doodle_marc_johns_00_3000x.png?v=1596141034219"
  );

  //Background Music
  // song = loadSound(
  //   "https://cdn.glitch.com/4ca366f3-f7ca-46f6-81f2-71131afbd35b%2F2019-12-13_-_In_The_Light_-_FesliyanStudios.com_-_David_Renda.mp3?v=1596062768775"
  // );
  song = loadSound(
    "https://cdn.glitch.com/4ca366f3-f7ca-46f6-81f2-71131afbd35b%2F2019-04-20_-_Quiet_Time_-_David_Fesliyan.mp3?v=1596076692239"
  );
}

function draw() {
  // Go to other pages
  if (currentPage == "index") {
    resizeCanvas(screen.width, screen.height);
    drawIndex();
  } else if (currentPage == "mood") {
    drawMood();
  } else if (currentPage == "music") {
    drawMusic();
  } else if (currentPage == "doodle") {
    // resizeCanvas(1000, 400);
    // background("white");r
    drawDoodle();
  } else if (currentPage == "yoga") {
    drawYoga();
  } else if (currentPage == "calendar") {
    drawCalendar();
  }
}

function drawIndex() {
  // Get slider values for calender
  sliderValue = mSlider.value() * 50 + 75;
  console.log(sliderValue);

  // Display emotion image
  image(
    imgEmotion,
    imgEmotion.width / 5 + 50,
    0 - imgEmotion.height / 25 + 15,
    imgEmotion.width / 3,
    imgEmotion.height / 3
  );

  // Display slider
  mSlider.position(522, 471);
  mSlider.size(528, 10);

  // Display Inspraiation quote
  push();
  strokeWeight(3);
  stroke("white");
  noFill();
  rect(screen.width * 0.6 - 20, screen.height * 0.5 - 80, 560, 100);

  noStroke();
  fill("white");
  textSize(25);
  textFont("Minion pro");
  text(
    "Inspriational Quote of the Day: ",
    screen.width * 0.6,
    screen.height * 0.5 - 50
  );

  textSize(20);
  textFont("Minion pro");
  text(quote, screen.width * 0.6, screen.height * 0.5);
  pop();

  // Draw lines
  push();
  strokeWeight(3);
  stroke("white");
  line(0, 1, screen.width, 2);
  line(screen.width / 4, 0, screen.width / 4, screen.height);
  pop();

  var hiddenInputs = document.getElementById("video1");
  hiddenInputs.style.display = "none";
  var hiddenInputs = document.getElementById("video2");
  hiddenInputs.style.display = "none";
  var hiddenInputs = document.getElementById("video3");
  hiddenInputs.style.display = "none";
  var hiddenInputs = document.getElementById("video4");
  hiddenInputs.style.display = "none";

  var hiddenInputs = document.getElementById("yVideo1");
  hiddenInputs.style.display = "none";
  var hiddenInputs = document.getElementById("yVideo2");
  hiddenInputs.style.display = "none";
  var hiddenInputs = document.getElementById("yVideo3");
  hiddenInputs.style.display = "none";

  var hiddenInputs = document.getElementById("eVideo1");
  hiddenInputs.style.display = "none";
  var hiddenInputs = document.getElementById("eVideo2");
  hiddenInputs.style.display = "none";
  var hiddenInputs = document.getElementById("eVideo3");
  hiddenInputs.style.display = "none";

  var hiddenInputs = document.getElementById("spotifyHappy");
  hiddenInputs.style.display = "none";

  var hiddenInputs = document.getElementById("spotifyCalm");
  hiddenInputs.style.display = "none";

  var hiddenInputs = document.getElementById("spotifyMed");
  hiddenInputs.style.display = "none";

  var hiddenInputs = document.getElementById("spotifyCon");
  hiddenInputs.style.display = "none";
}

function makeButton(y, buttonLabel, name) {
  let button = createButton(buttonLabel);

  button.style("font-family", "Minion pro");
  button.style("font-size", "25px");
  button.style("color", "#50749a");
  button.style("background-color", "white");
  button.style("border", "2px solid #50749a");

  if (buttonLabel == "SUBMIT") {
    button.style("font-size", "15px");
    button.size(100, 20);
    button.position(screen.width / 2 + 32, y);
    button.style("border-radius", "15px");
  } else if (buttonLabel == "🎵") {
    button.size(50, 50);
    button.position(5 + 85.71, y);
    button.style("border-radius", "7.14px");
  } else if (name == "index") {
    // Home button
    button.size(85.71, 50);
    button.position(5, y);
    button.style("border-radius", "7.14px");
  } else {
    button.size(200, 70);
    button.position(screen.width / 15, y);
    button.style("border-radius", "10px");
  }

  // Hovering effect
  console.log(button);
  button.mouseOver(() => {
    console.log(button);
    button.style("background-color", "#50749a");
    button.style("color", "white");
  });
  button.mouseOut(() => {
    button.style("background-color", "white");
    button.style("color", "#50749a");
  });

  // Go to corresponding pages when clicked on
  button.mouseClicked(() => {
    console.log(button);
    currentPage = name;

    if (buttonLabel == "HOME") {
      mSlider.show();
      buttons.forEach(b => b.show());
    } else if (name != "index" && buttonLabel != "🎵") {
      mSlider.hide();
      buttons.forEach(b => b.hide());
    }
    // if (name != "index") {
    //   mSlider.hide();
    //   buttons.forEach(b => b.hide());
    // } else if (buttonLabel == "HOME") {
    //   mSlider.show();
    //   buttons.forEach(b => b.show());
    // }

    // Store slider values
    if (buttonLabel == "SUBMIT") {
      if (sliderValues.length >= 7) {
        sliderValues.shift();
      }
      let sliderVal = mSlider.value() * 50 + 75;
      sliderValues.push(sliderVal);
    }

    if (buttonLabel == "🎵") {
      if (songPlay == true) {
        song.loop();
        songPlay = false;
      } else {
        song.stop();
        songPlay = true;
      }
    }
    clear();
  });

  return button;
}
