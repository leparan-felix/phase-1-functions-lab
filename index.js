// Code your solution in this file!
// Function 1: distanceFromHqInBlocks
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - 42); // Return the absolute difference
}

// Function 2: distanceFromHqInFeet
function distanceFromHqInFeet(someValue) {
  const blocks = distanceFromHqInBlocks(someValue); // Call the previous function
  return blocks * 264; // Convert blocks to feet
}

// Function 3: distanceTravelledInFeet
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264; // Convert block difference to feet
}

// Function 4: calculatesFarePrice
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // First 400 feet are free
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat fare of $25
  } else {
    return 'cannot travel that far'; // Distance exceeds 2500 feet
  }
}
