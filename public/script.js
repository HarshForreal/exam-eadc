let isBulbOn = false;

document.getElementById("toggleButton").addEventListener("click", () => {
  const bulbImage = document.getElementById("bulbImage");
  bulbImage.src = isBulbOn ? "bulb_off.png" : "bulb_on.png";
  isBulbOn = !isBulbOn;
});
