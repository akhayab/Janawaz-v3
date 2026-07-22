document.querySelector(".volunteer-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for registering as a Janawaz volunteer!");
  this.reset();
});
