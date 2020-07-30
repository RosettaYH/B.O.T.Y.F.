/* global text, stroke, line, noStroke textColor httpDo push pop fill textSize textFont songs strokeWeight hiddenInputs4
 */

function drawMusic() {

  
  // Music Blocks

  var hiddenInputs = document.getElementById("spotifyHappy");
  hiddenInputs.style.display = "block";

  var hiddenInputs2 = document.getElementById("spotifyCalm");
  hiddenInputs2.style.display = "block";

  var hiddenInputs3 = document.getElementById("spotifyMed");
  hiddenInputs3.style.display = "block";

  var hiddenInputs4 = document.getElementById("spotifyCon");
  hiddenInputs4.style.display = "block";

  // Titles
  push();
  strokeWeight(4);
  stroke(210.81, 48.05, 60.39);
  //fill(210.00, 5.02, 93.73)
  fill("white");
  textSize(30);
  textFont("Minion pro");
  text("Music to Cheer You Up!", screen.width / 6, screen.height / 8);
  text(
    "Let's Wind Down With Music",
    (screen.width * 3.7) / 6,
    screen.height / 8
  );
  text("Meditation Music", (screen.width * 4) / 6, screen.height / 2 + 100);

  textSize(50);
  text("MUSIC", (screen.width / 3) * 1.3, 40);

  stroke(255);
  // Center Line
  line(screen.width / 2, screen.height / 10, screen.width / 2, screen.height);
  // Horizontal Line
  line(
    screen.width / 2,
    screen.height / 2 + 50,
    screen.width,
    screen.height / 2 + 50
  ); // line(x1, y1, x2, y2)
   
  tint(255, 200)
  image(rainImage, 500, 150, rainImage.width / 6, rainImage.height / 6);
  
  pop();
}

//https://developer.spotify.com/documentation/web-api/reference/browse/
// async function preload() {
//   let response = await httpDo(
//     "https://api.spotify.com/v1/playlists/{playlist_id}"
//   );
//   songs = JSON.parse(response).map(song => song.tracks).join("\n");;
//   //quote = random(quotes)
//   //console.log(quote)
// }
