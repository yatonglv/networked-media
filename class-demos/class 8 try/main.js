// Step 1:
// Call setTimeout with two parameters, a callback function, and a duration
// (the duration is in milliseconds, so 2000 means 2 seconds)
setTimeout(myFunction, 2000);

// Step 2:
// Define the function that will be called by setTimeout
function myFunction() {
  console.log("Two seconds have passed");
}

window.onload = () => {
	setTimeout(myFunction, 2000)
}

function myFunction() {
	console.log("Two seconds have passed")
}