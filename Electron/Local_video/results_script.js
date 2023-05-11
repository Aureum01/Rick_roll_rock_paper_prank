// Get the video element by its ID
const video = document.getElementById("customVideo");

// Set the dimensions of the video
const videoWidth = 200;
const videoHeight = 150;

// Get the dimensions of the screen
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Set a random initial angle for the video movement
let angle = Math.random() * 2 * Math.PI;

// Calculate the initial position of the video (centered on the screen)
let x = screenWidth / 2 - videoWidth / 2;
let y = screenHeight / 2 - videoHeight / 2;

// Set the speed of the video movement
const speed = 5;

// Function to update the video position
const updatePosition = () => {
  // Calculate the change in position based on the angle and speed
  const dx = Math.cos(angle) * speed;
  const dy = Math.sin(angle) * speed;

  // Update the position of the video
  x += dx;
  y += dy;

  // Check if the video hits the horizontal edges of the screen and adjust the angle accordingly
  if (x < 0 || x + videoWidth > screenWidth) {
    angle = Math.atan2(-dy, dx);
  }

  // Check if the video hits the vertical edges of the screen and adjust the angle accordingly
  if (y < 0 || y + videoHeight > screenHeight) {
    angle = Math.atan2(dy, -dx);
  }

  // Update the video's position on the screen
  video.style.left = x + "px";
  video.style.top = y + "px";
};

// Function to start the animation loop
const startAnimation = () => {
  updatePosition();
  requestAnimationFrame(startAnimation);
};

// Function to handle video errors
function handleVideoError(event) {
  console.error("Video error:", event);
}

// Add an error event listener to the video
video.addEventListener("error", handleVideoError);

// Add a loadeddata event listener to the video, which sets its initial position and starts the animation
video.addEventListener("loadeddata", () => {
  video.style.position = "absolute";
  video.style.left = x + "px";
  video.style.top = y + "px";
  startAnimation();
});
