# Image Labeling Application

This program is an image labeling application built with JavaScript, HTML, and CSS. It allows the user to upload an image, label it by clicking on the corners of a license plate, and save the coordinates of the labeled points in a JSON file.

## Getting Started

1. Click on the "Upload Image" button. This will open a file dialog for the user to select an image.
2. Once the image is selected, it will be displayed on the canvas element in the center of the page.
3. The user will be prompted to click on the top left corner of the license plate in the image. Once the user clicks on the correct location, a green dot will be displayed on the canvas to indicate the point. Repeat the same process for: bottom left, top right and bottom right corner.
4. Once all four points have been labeled, the user will be prompted to save the coordinates by clicking on the "Save" button. This will create a JSON file containing the coordinates of the labeled points and the image ID which will be downloaded to the user's computer.
5. If the user wants to label another image, they can click on the "Upload Next Image" button to repeat the process.

### JSON File Structure

The JSON file will have the following structure(example with 3 images):

  ```json
  [
    {
      "id": 1674528576842,
      "coordinates": {
      "top_left": { "x": 219, "y": 315 },
      "bot_left": { "x": 220, "y": 364 },
      "top_right": { "x": 297, "y": 327 },
      "bot_right": { "x": 298, "y": 379 }
  }
  },
    {
      "id": 1674528599353,
      "coordinates": {
      "top_left": { "x": 219, "y": 315 },
      "bot_left": { "x":220, "y": 364 },
      "top_right": { "x": 297, "y": 327 },
      "bot_right": { "x": 298, "y": 379 }
  }
  },
    {
      "id": 1674528624102,
      "coordinates": {
      "top_left": { "x": 219, "y": 315 },
      "bot_left": { "x": 220, "y": 364 },
      "top_right": { "x": 297, "y": 327 },
      "bot_right": { "x": 298, "y": 379 }
    }
  }
  ]
```

This structure is an example of the saved JSON file when labeling 3 images. Each image is represented by an object with a unique ID and its labeled coordinates, including the top left, bottom left, top right, and bottom right points of the license plate.

Using the Program
Click on the "Upload Image" button to open a file dialog and select an image.
The image will be displayed on the canvas element in the center of the page.
Click on the top left corner of the license plate in the image. A green dot will appear on the canvas to indicate the labeled point. Repeat this process for the bottom left, top right, and bottom right corners.
Click on the "Save" button to create a JSON file containing the coordinates of the labeled points and the image ID, which will be downloaded to your computer.
If you wish to label another image, click on the "Upload Next Image" button.
Please note that the program currently does not work in Google Chrome due to a file saving library that is not supported. However, it does work on Mozilla Firefox and MS Edge.

Live Demo
A live demo of the application can be found here: 
https://classy-cascaron-194ddf.netlify.app/ (currently not supported in Google Chrome)

Future Improvements
Adding support for Google Chrome
Improve UI/UX design
Adding additional features such as multiple label points per image, and labeling other objects beside license plates.
"




