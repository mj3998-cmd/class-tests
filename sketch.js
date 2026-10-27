// Position and velocity variables
let x;
let y;
let vx = 5;
let vy = 4;
let radius = 30; // Radius of the circle

function setup() {
  // Create a canvas that fills the browser window
  createCanvas(windowWidth, windowHeight);
  
  // Start the circle at the center
  x = width / 2;
  y = height / 2;
}

function draw() {
  // Clear the background each frame (dark sleek background)
  background(26, 26, 36);

  // Move the circle
  x += vx;
  y += vy;

  // Check collision with right and left edges
  if (x + radius >= width) {
    x = width - radius; // Prevent sticking to the boundary
    vx *= -1;           // Reverse horizontal direction
  } else if (x - radius <= 0) {
    x = radius;
    vx *= -1;
  }

  // Check collision with bottom and top edges
  if (y + radius >= height) {
    y = height - radius; // Prevent sticking to the boundary
    vy *= -1;            // Reverse vertical direction
  } else if (y - radius <= 0) {
    y = radius;
    vy *= -1;
  }

  // Draw the blue circle
  noStroke();
  fill(0, 122, 255); // Vibrant blue
  circle(x, y, radius * 2);
}

// Adjust canvas dynamically when the browser window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  // Keep the ball within view if resized smaller
  x = constrain(x, radius, width - radius);
  y = constrain(y, radius, height - radius);
}

