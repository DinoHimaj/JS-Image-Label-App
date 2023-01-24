const uploadButton = document.getElementById('upload-btn');
const saveButton = document.getElementById('save-btn');
const canvas = document.getElementById('image-canvas');
const ctx = canvas.getContext('2d');

const instructions = [
  'Please click on the TOP LEFT corner of the license plate',
  'Please click on the BOTTOM LEFT corner of the license plate',
  'Please click on the TOP RIGHT corner of the license plate',
  'Please click on the BOTTOM RIGHT corner of the license plate',
];

//event listeners
uploadButton.addEventListener('click', handleUploadBtn);
canvas.addEventListener('click', handleCanvas);
saveButton.addEventListener('click', handleSaveButton);

let imageLoaded = false;
let clickCount = 0;
let coordinates = {};
let allCoordinates = [];

setTimeout(() => {
  alert(
    "Please click the 'Upload Image' button and choose a image from your computer that you want to label"
  );
}, 500);

function handleUploadBtn(e) {
  //upload image file from a local machine
  const uploadImage = document.createElement('input');
  uploadImage.type = 'file';
  uploadImage.addEventListener('change', handleFileChange);
  uploadImage.click();
}

function handleFileChange(e) {
  // Get the first file that was selected
  const file = e.target.files[0];
  let image = new Image();

  image.addEventListener('load', handleImageLoad);
  // Set the source of the image to the selected file
  image.src = URL.createObjectURL(file);
}

function handleImageLoad(e) {
  drawImage(this);

  //wait 0,5s for the first instruction for better user exp
  setTimeout(() => {
    alert(instructions[clickCount]);
  }, 500);
}

function handleCanvas(e) {
  if (imageLoaded && clickCount < 4) {
    // Get the coordinates of the click event
    const x = e.offsetX;
    const y = e.offsetY;

    drawGreenDot(x, y);
    // Save the coordinates to an object with the appropriate property name
    switch (clickCount) {
      case 0:
        coordinates['top_left'] = { x, y };
        break;
      case 1:
        coordinates['bot_left'] = { x, y };
        break;
      case 2:
        coordinates['top_right'] = { x, y };
        break;
      case 3:
        coordinates['bot_right'] = { x, y };
        break;
    }
    clickCount++;

    //wait 0,5s between the instructions
    if (clickCount < 4) {
      setTimeout(() => {
        alert(instructions[clickCount]);
      }, 500);
    } else {
      setTimeout(() => {
        alert(
          `You have successfully finished labeling this image. Click 'Save Coordinates' to save the coordinates or 'Upload Next Image' to upload another image.`
        );
      }, 500);
      //change the upload button
      uploadButton.innerHTML = 'Upload Next Image';
      canvas.style.cursor = 'default';

      let imageData = {
        id: Date.now(), // use the current time as the image ID
        coordinates,
      };

      allCoordinates.push(imageData);
      clickCount = 0;
      imageLoaded = false;
    }
  }
}

function handleSaveButton(e) {
  saveData();
}
