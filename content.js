function reload() {
  location.reload();
}

var minSec = 5;
var maxSec = 15;

var ms = (minSec + Math.random() * (maxSec - minSec)) * 1e3;
console.log("You have " + ms + " milliseconds until reload. Use your time wisely");

setTimeout(reload, ms);
