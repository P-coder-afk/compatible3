var bg;
var bg1Animation,bgAnimation;
var s1;
var gameState=BEGIN;
var BEGIN=0;
var INSTRUCTIONS=1;
var SETTINGS=2;
var PLAY=3;


function preload(){
bg1Animation=loadImage("bg1.jpg");

 bgAnimation=loadAnimation("bg.jpg");   
s1Animation=loadAnimation("s_model_3.png");

}

function setup(){
    createCanvas(WindowWidth,WindowHeight);

}

function draw(){
background(bg1Animation);

    drawSprites();

}