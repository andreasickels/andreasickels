var coins = 0;
var coinsPerSecond = 0;
var clicks = 0;
var clickPower = 50;
var cursorCost = 1;
var cursors = 0;
var farmCost = 2;
var farms = 0;
var towerCost = 3;
var towers = 0;
var castleCost = 4;
var castles = 0;
var fairyCost = 5;
var fairies = 0;

let cursorPower = cursors * 1

const names = [];
names[0]= "Bertha";
names[1]= "Enid Pennywinkle";
names[2]= "Beatrice";
names[3]= "Bernice";
names[4]= "Edna";
names[5]= "Gertrude";
names[6]= "Ruth";
document.getElementById("names").innerHTML = names[Math.floor(Math.random() * 7)];


function addToClicks(amount) {
		clicks = clicks + amount;
		document.getElementById("clicks").innerHTML = clicks;
}

function addToCoins(amount) {
		coins = coins + amount;
		document.getElementById("coins").innerHTML = coins;
}

function eggBreak1() {
if (clicks >= 100){
  document.getElementById("egg").src = "egg1.png";
	}
}

function eggBreak2() {
if (clicks >= 250){
  document.getElementById("egg").src = "egg2.png";
	}
}

function eggBreak3() {
if (clicks >= 500){
  document.getElementById("egg").src = "dragon0.png";
	}
}

function play() {
        var audio = document.getElementById("audio");
        audio.play();
}


function buyCursor() {
 if (coins >= cursorCost) {
	coins = coins - cursorCost;
	cursors = cursors + 1;
	cursorCost = Math.round(cursorCost * 1.15);

	document.getElementById("coins").innerHTML = coins ;
	document.getElementById("cursorcost").innerHTML = cursorCost;
	document.getElementById("cursors").innerHTML = cursors;
	updateCoinsPerSecond();

	}
}

function buyFarm() {
if (coins >= farmCost) {
	coins = coins - farmCost;
	farms = farms + 1;
	farmCost = Math.round(farmCost * 1.15);

	document.getElementById("coins").innerHTML = coins ;
	document.getElementById("farmcost").innerHTML = farmCost;
	document.getElementById("farms").innerHTML = farms;
	updateCoinsPerSecond();
	}
}

function buyTower() {
if (coins >= towerCost) {
	coins = coins - towerCost;
	towers = towers + 1;
	towerCost = Math.round(towerCost * 1.15);

	document.getElementById("coins").innerHTML = coins ;
	document.getElementById("towercost").innerHTML = towerCost;
	document.getElementById("towers").innerHTML = towers;
	updateCoinsPerSecond();
	}
}

function buyCastle() {
if (coins >= castleCost) {
	coins = coins - castleCost;
	castles = castles + 1;
	castleCost = Math.round(castleCost * 1.15);

	document.getElementById("coins").innerHTML = coins ;
	document.getElementById("castlecost").innerHTML = castleCost;
	document.getElementById("castles").innerHTML = castles;
	updateCoinsPerSecond();
	}
}

function buyFairy() {
if (coins >= fairyCost) {
	coins = coins - fairyCost;
	fairies = fairies + 1;
	fairyCost = Math.round(fairyCost * 1.15);

	document.getElementById("coins").innerHTML = coins ;
	document.getElementById("fairycost").innerHTML = fairyCost;
	document.getElementById("fairies").innerHTML = fairies;
	updateCoinsPerSecond();
	}
}

function updateCoinsPerSecond() {
		coinsPerSecond = (cursors * 1) + (farms * 2) + (towers * 3) + (castles * 4) + (faries * 5);
		document.getElementById("coinspersecond").innerHTML = coinsPerSecond;
	}

setInterval(function() {
	coins = coins + cursors;
	coins = coins + farms * 2;
	coins = coins + towers * 3;
	coins = coins + castles * 4;
	coins = coins + fairies * 5;
	document.getElementById("coins").innerHTML = coins;
	if (coins == 1) {
	document.title = coins + "  coin - Dragon Game";
	} else {
	document.title = coins + "  coins - Dragon Game";
	}
}, 1000);

function ascend() {
 coins == 0;
 coinsPerSecond == 0;
 clicks == 0;
 clickPower = 0;
 cursorCost = 1;
 cursors = 0;
 farmCost = 2;
 farms = 0;
 towerCost = 3;
 towers = 0;
 castleCost = 4;
 castles = 0;
 fairyCost = 5;
 fairies = 0;
}


var modal = document.getElementById("prestMod");

var btn = document.getElementById("prestBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

ascBtn.onclick = function() {
  modal.style.display = "none";
}