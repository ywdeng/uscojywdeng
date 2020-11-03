/* camera.js */
picWindow = null;   // a global variable for window handle

/**
 * open picture in a dedicate window
 **/
function openPicture(img) {  
  // picture size
  var width = img.naturalWidth  + 4;
  var height = img.naturalHeight  + 4;
  console.log(img.src, img.naturalWidth , img.naturalHeight );
  // place the windows at center of screen
  var leftTopX = (screen.width - width) / 2;
  var leftTopY = (screen.height - height) / 2;
  var x = leftTopX < 0 ? 0 : parseInt(leftTopX);
  var y = leftTopY < 0 ? 0 : parseInt(leftTopY); 
  console.log(leftTopX, leftTopY, x, y);
  
  closePicture();   // close old window to reset width and height  
  // open a new window with freshing new parameters
  picWindow = window.open(img.src, "PIC", 
    "width=" + width + ",height=" + height + ",left=" + x + ",top=" + y + 
    ",resizable=no,location=no,menubar=no,scrollbars=no,toolbar=no,status=no,titlebar=no"
  );
  picWindow.focus();
}

/**
 * close existing picture window
 **/
function closePicture() {
  try {
    if (picWindow != null) picWindow.close();
  } catch(err) {
    console.log(err);
  }
}
