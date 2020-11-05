function setup() {
  createCanvas(900, 600)
}

function draw() {

  translate(200, 200)
  background(0)
  sc = second();
  hr = hour();
  mn = minute();

  SecondHand();
  HourHand();
  minuteHand();

  fill("pink")
  ellipse(0, 0, 20)

}

function SecondHand() {

  secondAngle = map(sc, 0, 60, 0, 360);

  strokeWeight(4);
  stroke("red");
  noFill()
  arc(0, 0, 300, 300, 0, secondAngle); 

  push();
  rotate(secondAngle)
  stroke("red")
  strokeWeight(10)
  line(0, 0, 100, 0)
  pop();

}

function HourHand() {

  hoursAngle = map(hr % 12, 0, 60, 0, 360);


  strokeWeight(4);
  stroke("green");
  noFill()
  arc(0, 0, 260, 260, 0, hoursAngle);

  push()
  rotate(hoursAngle)
  stroke("green")
  strokeWeight(10)
  line(0, 0, 100, 0)
  pop();


}

function minuteHand() {

  minutesAngle = map(mn, 0, 60, 0, 360);

  strokeWeight(4);
  stroke("blue");
  noFill()
  arc(0, 0, 280, 280, 0, minutesAngle);

  push()
  rotate(minutesAngle)
  stroke("blue")
  strokeWeight(10)
  line(0, 0, 100, 0)
  pop();


}