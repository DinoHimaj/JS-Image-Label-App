//draws uploaded image to a canvas
function drawImage(image) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.drawImage(image, 0, 0, ctx.canvas.width, ctx.canvas.height);
  imageLoaded = true;
  canvas.style.cursor = 'crosshair';
}

//draws a green dot where user has clicked
function drawGreenDot(x, y) {
  ctx.beginPath();
  ctx.fillStyle = 'green';
  ctx.arc(x, y, 5, 0, 2 * Math.PI);
  ctx.fill();
}

//save a JSON file to a local machine
function saveData() {
  if (allCoordinates.length > 0) {
    // Convert the coordinates array to a JSON string
    const json = JSON.stringify(allCoordinates);
    // Create a new Blob and save it to the file
    const blob = new Blob([json], { type: 'application/json' });
    saveAs(blob, 'coordinates.json');
    // Reset the allCoordinates array for the next image
    allCoordinates = [];
  } else {
    alert("You haven't labeled any images yet.");
  }
}
