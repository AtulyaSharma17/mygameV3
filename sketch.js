var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;
var camera, cameraImg, carkey, carkeyImg, apple, appleImg, wallet, walletImg, phone, phoneImg;
var walletStatus = true
var phoneStatus = true
var appleStatus = true
var cameraStatus = true
var carkeyStatus = true
var wcount= 0;
var form, player, game, sound;


function preload(){
cameraImg = loadImage ("images/camera.png")
carkeyImg = loadImage ("images/carkey.png")
walletImg = loadImage ("images/wallet.png")
phoneImg = loadImage ("images/phone.png")
appleImg = loadImage ("images/apple.png")
sound = loadSound ("soundbg.mp3")


backgroundImage = loadImage ("images/gamelevel.jpeg")
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    textSize(150)
    text("Game End",displayWidth/2,displayHeight/2)
    game.end()
    

}
if(mousePressedOver(wallet))    {
  wallet.destroy()
  database.ref("/").update({
    wallet:false
  })
}
database.ref("wallet").on("value",function(data){
  walletStatus=data.val()
  //console.log(walletStatus)
})
if (walletStatus===false){
  wallet.destroy()
}

if(mousePressedOver(phone))    {
  phone.destroy()
  database.ref("/").update({
    phone:false
  })
}
database.ref("phone").on("value",function(data){
  phoneStatus=data.val()
 // console.log(phoneStatus)
})
if (phoneStatus===false){
  phone.destroy()
}


if(mousePressedOver(apple))    {
  apple.destroy()
  database.ref("/").update({
    apple:false
  })
}
database.ref("apple").on("value",function(data){
  appleStatus=data.val()
 // console.log(appleStatus)
})
if (appleStatus===false){
  apple.destroy()
}

if(mousePressedOver(carkey))    {
  carkey.destroy()
  database.ref("/").update({
    carkey:false
  })
}
database.ref("carkey").on("value",function(data){
  carkeyStatus=data.val()
  //console.log(carkeyStatus)
})
if (carkeyStatus===false){
  carkey.destroy()
}

if(mousePressedOver(camera))    {
  camera.destroy()
  database.ref("/").update({
    camera:false
  })
}
database.ref("camera").on("value",function(data){
  cameraStatus=data.val()
 // console.log(cameraStatus)
})
if (cameraStatus===false){
  camera.destroy()
}

//text(mouseX+","+mouseY,mouseX,mouseY)
}