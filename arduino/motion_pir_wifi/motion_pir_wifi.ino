#include <Process.h>
#include <SPI.h>

int ledPin = 13;                // choose the pin for the LED
int inputPin = 2;               // choose the input pin (for PIR sensor)
int pirState = LOW;             // we start, assuming no motion detected
int val = 0;                    // variable for reading the pin status
int motionTime = 0;             // variable for time spent working
int secs2 = 0;
int oneTime = 0;

void setup()
{
  pinMode(ledPin, OUTPUT);      // declare LED as output
  pinMode(inputPin, INPUT);     // declare sensor as input
  Bridge.begin();   // Initialize the Bridge
}

void loop()
{
  secs2 = 1;
  oneTime += secs2;

  float motionFinal = getMotion(secs2);
 
  Process p;
  p.runShellCommand("curl -k -X POST https://officeeye-project.firebaseio.com/arduinoData.json -d '{ \"value\" : " + String(motionFinal) + "}'");  
  //replace officeeye-project with your own firebase project name
  while(p.running()); 
  delay(1000);                

}

float getMotion(float e){
  int motionTime1 = motionTime;

  val = digitalRead(inputPin);  // read input value
    if (val == HIGH) {            // check if the input is HIGH
      digitalWrite(ledPin, HIGH);  // turn LED ON
      motionTime1 += e;
      if (pirState == LOW) {
        // we have just turned on
        Serial.println("Motion detected!");
        // We only want to print on the output change, not state
        pirState = HIGH;
        //motionTime1 += e;
      }
    } else {
      digitalWrite(ledPin, LOW); // turn LED OFF
      if (pirState == HIGH){
        // we have just turned of
        Serial.println("Motion ended!");
        // We only want to print on the output change, not state
        pirState = LOW;
      }
    }

  motionTime = motionTime1;
  return motionTime1;

}
