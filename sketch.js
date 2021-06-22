var karma = 0;
var txt = "I";
var i = 200;
let mySound;
let txtScroll;
var about = 0;
let scroll = 0;
var o1 = 0;
var o2 = 0;
var scrall = 0;
var colorText1 = '#a9a560';
var colorText2 = '#b9c990';








function preload() {

 soundFormats('mp3');
mySound = loadSound('addons/theshepherd_audio');

  titleFont = loadFont('addons/Daubenton.otf');
  corpusFont = loadFont('addons/Ortica-Light.otf');
  intlMed = loadFont('addons/SuisseIntl-Medium.otf');
  intlReg = loadFont('addons/SuisseIntl-Regular.otf');
  intlBol = loadFont('addons/SuisseIntl-Bold.otf');
  druk = loadFont('addons/DrukCond-Super.ttf');

wilfrid = loadImage("addons/Wilfrid.png");
vicary = loadImage("addons/Vicary.png");
connor = loadImage("addons/lineart.png");





}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(displayWidth, displayHeight, WEBGL);
  noSmooth();




  //Button To START
  buttonST = createButton('HOME');
  buttonST.position(50, height-150);
  buttonST.mouseClicked(starty);
  buttonST.addClass('button');

  buttonMY = createButton('EARTH');
  buttonMY.position(50, (height-100));
  buttonMY.mouseClicked(starty1);
  buttonMY.addClass('button');

  buttonAB = createButton('ABOUT');
  buttonAB.position(50, (height-50));
  buttonAB.mouseClicked(starty2);
  buttonAB.addClass('button');




}

function draw() {
  var paragraphTextSize = (width/70);
  background('#041d1a');
  console.log(scroll);



// image(cover, (width/2),(height/2), windowWidth, (windowWidth/16)*9);
push();
fill(colorText1);
textAlign(LEFT);
textSize(paragraphTextSize);
textFont(intlMed);
text("Vicary van Houten, the head of the ecocentric government, \nwas among the first ones who landed on the planet, \nand Connor Reece is one of her young pupils, \nraised and educated to be a brilliant virologist and biologist.\nOn the other hand, an opposing faction, \nknown as the anthropocentric one, \nis led by Wilfrid Izgren, a young rebel \nwho believes in the hedonistic nature of humans \nand whose artistic attitude makes him reject \nthe current authoritarian government.", width/12,300);
pop();

push();
fill(colorText1);
textAlign(LEFT);
textSize(paragraphTextSize);
textFont(intlMed);
text("T2, on the other hand, introduces the user to Mycenae, \nthe Eden-like planet where, in 2153, \na few lucky ones from the space mission Aeneas \ngot the chance to land. \nHere, a technocratic society flourished: \nscientific progress and knowledge are \nat the center of both social development \nand political control, focused \non human’s respect towards nature \n(which has to be as pristine as possible).", ((width/12)*7),300);
pop();

imageMode(CORNERS);
image(wilfrid, (0)+(scrall*0.9),height-540,(404.5)+(scrall*0.9),height);
image(vicary, (0)+(scrall*1.15),height-540,(753.5)+(scrall*1.15),height);
image(connor, (0)+(scrall*1.03),height-339,(400)+(scrall*1.03),height);


push();
noStroke();
fill("#535e57");
rectMode(CORNERS);
rect(0,0,(width/2)-scrall,windowHeight);
pop();

push();
fill(colorText1);
textAlign(LEFT);
textSize(paragraphTextSize);
textFont(intlMed);
text("The storyline you are going to dive in \ninvolves two timesets, that we called, \nfor our own convenience,\nT1 (dystopian present on Earth) and T2 (Mycenae).\nIt’s 2033, and Earth is about to collapse \ndue to an invasive species of ants farmed \nby some visionary investors in order \nto initially contrast climate emergencies derived \nfrom intensive farming (cattle, poultry, etc.).", (width/12)-(scrall*1.2),300);
pop();



push();
fill(colorText2);
textAlign(LEFT);
textSize(paragraphTextSize);
textFont(intlBol);
text("THE AENEAS PROJECT", ((width/12)*2)+(scrall*0.4),height-50);
pop();


if (scroll>0 && scroll<windowHeight) {
scrall= scroll;
} else if (scroll <= 0 && about ===0) {

scrall = 0;
scroll=0;
}
 if (scroll >= windowHeight) {
   about=0;
   scrall= windowHeight;
   scroll = windowHeight;

}

}




function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  //resizeCanvas(displayWidth, displayHeight, WEBGL);

  return false;
}


function starty() {
  window.open("https://federicocordelli.github.io/HOME-COMPLEX/","_self");
}

function starty1() {
  window.open("https://federicocordelli.github.io/ABOUT-COMPLEX-EARTH/","_self");
}

function starty2() {
  window.open("https://federicocordelli.github.io/ABOUT-COMPLEX/","_self");
}




function mouseWheel(event) {
  print(event.delta);

  //move the square according to the vertical scroll amount
  txtScroll += event.delta;
  scroll += event.delta;

  //uncomment to block page scrolling
  //return false;
}
