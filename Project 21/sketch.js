var canvas;
var music;
let surface1, surface2, surface3, surface4, edges;
let box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surface

    surface1 = createSprite(100, 550, 175, 25);
    surface1.shapeColor = "red";

    surface2 = createSprite(300, 550, 175, 25);
    surface2.shapeColor = "blue";

    surface3 = createSprite(500, 550, 175, 25);
    surface3.shapeColor = "green";

    surface4 = createSprite(700, 550, 175, 25);
    surface4.shapeColor = "yellow";

    //create box sprite and give velocity
    box = createSprite(400, 50, 30, 30);
    box.shapeColor = "white";
    box.setVelocity(random(-3, 3), 5);

    edges = createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    box.bounceOff(edges)

    //add condition to check if box touching surface and make it box

    if (surface1.isTouching(box)) {
        box.velocityX = 0;
        box.velocityY = 0;
        box.shapeColor = "red";
    }
    boxBounce(surface2);
    boxBounce(surface3);
    boxBounce(surface4);
    drawSprites();
}

function boxBounce (surfaceGroup) {
    if (box.isTouching(surfaceGroup)) {
        box.shapeColor = surfaceGroup.shapeColor;
        music.play();
    }
    box.bounceOff(surfaceGroup);
}