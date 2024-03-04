// Check if the user is authenticated
console.log("authenticated");
var authenticated = sessionStorage.getItem("authenticated");
// Log the value of the authenticated variable
if (!authenticated || authenticated !== "true") {
// If not authenticated, redirect to the landing page
  window.location.href = "../index.html";
  console.log("not authenticated");
  }