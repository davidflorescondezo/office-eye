# OfficEye

## Table of Contents
  * [Pitch](#pitch)
  * [Feature List](#feature-list)
  * [Hardware and Software Used](#hardware-and-software-used)
  * [Management and Development Process](#management-and-development)
  * [Milestones](#milestones)
  * [Build Instructions](#build-instructions)
  * [Code of Conduct](#code-of-conduct)
  * [About Me](#about-me)

### Pitch
As an employer do you often struggle keeping your employees motivated? Do you wish you could know what your employees are really upto? Do you wish you could know how many hrs a day they really spend working?
OfficeEye is your solution. OfficeEye will keep track of the time your employees spend on their desks and whether they are working on their computers or not. OfficeEye will compile all this information and display it for you in a super easy to use UI for you to manage all your employees, alongside a scoreboard visible to employees to keep them motivated and create a competetive environment encouraging employees to work more.

### Feature List

#### Toolkit
   - IoT (Infrared Sensor) integrated Web App
   
#### Dashboard
   - Realtime Employee Monitoring Statistics
   - Dynamic Widgets

### Hardware and Software Used
For this kind of "monitoring/survalance" system I would prefer for my artifact to be as small as possible to keep it as concealed to the employee as possible. This is to create a safe enevirnoment for the employee. As a result I have researched microcontrollers & sensors that are miniscule in size.
After a substantial ammount of researching, combining accessiblity & budget, This project will be using an Arduino UNO R3 alongside a small Adafruit Infrared Sensor. 
With a Yun Wifi-Shield that will allow an ease connection to the Internet.

Combining the C code for the Arduino with Python & PHP the data gathered will be sent from the sensor to a database. In terms of software & databases & Api's I have used Google Firebase's Realtime Database to gather the sensor data. Then for the front-end UI i'm using Material under the React Framework.

### Management and Development
I've been using an agile project management structure, consisting of weekly 'sprints' - or a set of tasks I aim to get done in the week. This 'modular' approach enables greater control and organisation over the development process, as it splits tasks into smaller and more management segments. 

Each individual task within a sprint, as described above, is called a 'ticket'. To determine the tickets that fall into each sprint, i've decided what I want to have done at a certain point of time, before breaking that up into series of individual components. From there, I am able to develop the individual tickets necessary for each component. 

Once the tickets are created, I order them into approximate times - or sprints - that they should be worked on and completed, with a view to the optimal development process. This takes into account development dependencies - tasks that need to be done prior to the development of another.

### Milestones

| **Key Milestones** | **Start Date** | **Projected End Date** | **Actual End Date** |
|-------------------------------------------------|--------|--------|--------|
| Experiment with MicroController | 27 Dec | 02 Jan | 02 Jan |
| Programming MicroController/Sensor | 02 Jan |  08 Jan | 15 Jan |
| **Pre-Minimum Viable Product** | 08 Jan | 08 Jan | 15 Jan |
| Hooking it up to the database | 08 Jan | 15 Jan | 05 Feb |
| Connecting the database with basic front-end UI | 22 Jan | 29 Jan | 29 Jan |
| **Minimum Viable Product** | 29 Jan | 29 Jan | 05 Feb |
| Developing/Designing the front-end UI | 29 Jan | 05 Feb | 15 Feb |
| Polishing/Garbage Collection | 29 Jan | 05 Feb | 19 Feb |
| **Live Version** | 06 Feb | 06 Feb | 19 Feb |
for more info check out: https://trello.com/b/8vvpgd2T/officeye

### Build Instructions
Step 0 - Make sure you have the following equipment/technologies: A functioning computer, Arduino UNO, Ethernet Shield or Yun WiFi Shield, Adafruit Infrared Sensor.

Step 1 - Clone the git project into you local directory by opening a terminal and entering: git clone HTTPSLINK

#### For Ethernet Shield
Step 2 - Connect your Arduino UNO to your Ethernet Shield and hook it up to the infrared sensor.
Step 3 - Upload the motion_pir_for_ethernet.s file to your Arduino UNO.
Step 4 - Open the Dashboard.js file loacted under web_app/src/pages.
Step 5 - Comment lines 71-79 and Uncomment line 70 & lines 81-85 and save.

#### For Yun WiFi Shield
Step 2 - Connect your Arduino UNO to your Yun WiFi Shield and hook it up to the infrared sensor.
Step 3 - Upload the motion_pir_for_wifi.s file to your Arduino UNO.

#### Run Web App
Step 1 - Download node.js -- https://nodejs.org/en/2. 
Step 2 - Open the terminal, navigate to the folder web_app through the terminal.
Step2.5 - If Node Modules aren't in folder then run the command "npm install".
Step 3 - Then run "npm start".
Step 4 - Go to http://localhost:3000/.

### About Me
My name is David, I am an aspiring Software Engineer/Developer currently studying Computer Science at the Australian National University.
My interests lie under: Ubiquitous Computing, Human Centric Computing, Virtual Reality & Web Technologies.
I am best contactable through my email: david.florescondezo@gmail.com
