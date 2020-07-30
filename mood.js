/* global pineappleImg quoteImg1 text push loadImage strokeWeight stroke fill textSize textFont pop line songs, moodImg, quoteImg3, quoteImg2 httpDo image*/

/*async function preload() {
  
  const YOUTUBE_API_KEY = "AIzaSyCidXbfiOAF5TUls8qx4KPhwJ7qVMSxXzY";
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=meditate&key=${YOUTUBE_API_KEY}`;
  // console.log(url);
  fetch(url)
    .then(response => response.json())
    .then(data => {
     // console.log(data.items[0].id.channelId);
      document.querySelector(
        "#video1"
      ).src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
      // ).src = `https://www.youtube.com/embed/yPWkPOfnGsw`;
  
  });
}*/

function drawMood() {
  // Display videos
  var hiddenInputs = document.getElementById("video1");
  hiddenInputs.style.display = "block";
  var hiddenInputs = document.getElementById("video2");
  hiddenInputs.style.display = "block";
  var hiddenInputs = document.getElementById("video3");
  hiddenInputs.style.display = "block";
  var hiddenInputs = document.getElementById("video4");
  hiddenInputs.style.display = "block";

  // Picture collage
  image(
    moodImg,
    (screen.width / 10) * 6-27,
    150,
    moodImg.width / 6,
    moodImg.height / 6
  );

  // Titles
  push();
  strokeWeight(4);
  stroke(210.81, 48.05, 60.39);
  //fill(210.00, 5.02, 93.73)
  fill("white");
  textFont("Minion pro");
  textSize(50);
  text("MOOD BOOST", (screen.width / 3) * 1.15, 55);
  
  textSize(20);
  text("Motivation:", 30, 150);
  text("Meditation:", 30, 350);
  text("Travel:", 30, 550);
  text("Stress Relief:", 30, 750);
  
  // Center line
  stroke(255);
  line(screen.width / 2, screen.height / 10, screen.width / 2, screen.height);
  
  // Horizontal lines
  for(let i = 0; i < 3; i++){
    line(0, 200*i+325, screen.width / 2, 200*i+325)
  }
  
  pop();
}

function pictures() {
  // Old pictures
  image(
    pineappleImg,
    (screen.width * 4) / 7,
    155,
    pineappleImg.width / 2,
    pineappleImg.height / 2
  );
  image(
    quoteImg1,
    (screen.width * 3) / 4,
    175,
    quoteImg1.width / 4,
    quoteImg1.height / 4
  );
  image(
    quoteImg2,
    (screen.width * 54) / 100,
    540,
    (quoteImg2.width * 13) / 20,
    (quoteImg2.height * 13) / 20
  );
  image(
    quoteImg3,
    (screen.width * 3) / 4,
    500,
    quoteImg3.width / 2,
    quoteImg3.height / 2
  );

}
