# OfficEye

### Pitch
As an employer do you often struggle keeping your employees motivated? Do you wish you could know what your employees are really upto? Do you wish you could know how many hrs a day they really spend working?
OfficeEye is your solution. OfficeEye will keep track of the time your employees spend on their desks and whether they are working on their computers or not. OfficeEye will compile all this information and display it for you in a super easy to use UI for you to manage all your employees, alongside a scoreboard visible to employees to keep them motivated and create a competetive environment encouraging employees to work more.

### Hardware/Software Used
For this kind of "monitoring/survalance" system I would prefer for my artifact to be as small as possible to keep it as concealed to the employee as possible. This is to create a safe enevirnoment for the employee. As a result I have researched microcontrollers & sensors that are miniscule in size.
After a substantial ammount of researching, combining accessiblity & budget, 
This project will be using an Arduino UNO R3 alongside a small Infrared Sensor. 
With a Wifi-Shield that will allow an ease connection to a ESP-01 WiFi Module.

Using Python & PHP the data gathered will be sent from the sensor to a database.
In terms of software & databases & Api's i'm deciding whether to use C# & MySQL or just use Google Firebase's Realtime Database which would make it easier to deploy it. Then for the front-end UI I plan on using Material under the React Framework.

### Milestones

| **Key Milestones** | **Start Date** | **Projected End Date** |
|-------------------------------------------------|--------|--------|
| Experiment with MicroController | 27 Dec | 02 Jan |
| Programming MicroController/Sensor | 02 Jan |  08 Jan |
| **Pre-Minimum Viable Product** | 08 Jan | 08 Jan |
| Hooking it up to the database | 08 Jan | 15 Jan |
| Connecting the database with basic front-end UI | 22 Jan | 29 Jan |
| **Minimum Viable Product** | 29 Jan | 29 Jan |
| Developing/Designing the front-end UI | 29 Jan | 05 Feb |
| Polishing/Garbage Collection | 29 Jan | 05 Feb |
| **Live Version** | 06 Feb | 06 Feb |
for more info check out: https://trello.com/b/8vvpgd2T/officeye

### Build Instructions
Step 0 - Make sure you have the following equipment/technologies: A functioning computer, Arduino UNO, Ethernet Shield or Yun WiFi Shield, Adafruit Infrared Sensor.

Step 1 - Clone the git project into you local directory by opening a terminal and entering: git clone HTTPSLINK

#### For Ethernet Shield
Step 2 - Connect your Arduino UNO to your Ethernet Shield and hook it up to the infrared sensor
Step 3 - Upload the motion_pir_for_ethernet.s file to your Arduino UNO
Step 4 - Open the Dashboard.js file loacted under web_app/src/pages
Step 5 - Comment lines 71-79 and Uncomment line 70 & lines 81-85 and save

#### For Yun WiFi Shield
Step 2 - Connect your Arduino UNO to your Yun WiFi Shield and hook it up to the infrared sensor
Step 3 - Upload the motion_pir_for_wifi.s file to your Arduino UNO

#### Run Web App
Step 1 - Download node.js -- https://nodejs.org/en/2. 
Step 2 - Open the terminal, navigate to the folder web_app through the terminal
Step2.5 - If Node Modules aren't in folder then run the command "npm install"
Step 3 - Then run "npm start"
Step 4 - Go to http://localhost:3000/
