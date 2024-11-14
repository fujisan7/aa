let canvas; //絵を描くエリア
let clearButton; //消すボタン

//キャンバスの設定
function setup() {
 canvas = createCanvas(400, 400);//Canvasを作成
 background(255); //Canvasの背景を白にする
 clearButton = createButton('消す');//ボタンを作成
 clearButton.mousePressed(clearCanvas);//ボタンクリックの関数を指定
}

//マウスで絵を描くための関数
function draw() {
   if (mouseIsPressed) {
     strokeWeight(18);
     line(mouseX, mouseY, pmouseX, pmouseY);
   }
}
 
//絵を全て消すボタンの動作
function clearCanvas() {
 background(255);
}