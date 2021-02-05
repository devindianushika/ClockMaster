import React, { Component } from 'react';
import './clock.css';

export class clock extends Component {
    constructor(){
        var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImageJS = document.getElementById('lolcatImage');
  
  if (time === partytime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
    messageText = "Let's party!";
  }
  else if (time === wakeuptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Wake up!";
  }
  else if (time === lunchtime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (time === naptime)
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < noon)
  {
    image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
    messageText = "Good morning!";
  }
  else if (time >= evening)
  {
    image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  lolcatImageJS.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function()
{
    if (partytime < 0) 
    {
        partytime = new Date().getHours();
        partyButton.innerText = "Party Over!";
        partyButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        partytime = -1;
        partyButton.innerText = "Party Time!";
        partyButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);
    }
   
    render() {
        return (
            <div>
  <title>LOLCAT CLOCK</title>

  <link href="https://fonts.googleapis.com/css?family=Bungee|Bungee+Shade|Covered+By+Your+Grace" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:800" rel="stylesheet"/>
  <link rel="stylesheet" type="text/css" href="style.css"/>


  <div class="page">
    <header>
      <h1>LOLCAT CLOCK</h1>
    </header>
    <h4>
      I CAN HAZ TIME?? <br>
      <span id="clock">Clock goes here</span></br>
    </h4>

    <img id="lolcatImage" src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg" alt="lolcat"/>

    <blockquote id="timeEvent">This is where time events are reported</blockquote>


    set Wake Up Time
    <select id="wakeUpTimeSelector">
      <option value="1">1 AM - 2AM</option>
      <option value="2">2 AM - 3AM</option>
      <option value="3">3 AM - 4AM</option>
      <option value="4">4 AM - 5AM</option>
      <option value="5">5 AM - 6AM</option>
      <option value="6">6 AM - 7AM</option>
      <option value="7">7 AM - 8AM</option>
      <option value="8" selected>8 AM - 9AM</option>
      <option value="9">9 AM - 10AM</option>
      <option value="10">10 AM - 11AM</option>
      <option value="11">11 AM - 12PM</option>
      <option value="12">12 PM - 1PM</option>
      <option value="13">1 PM - 2PM</option>
      <option value="14">2 PM - 3PM</option>
      <option value="15">3 PM - 4PM</option>
      <option value="16">4 PM - 5PM</option>
      <option value="17">5 PM - 6PM</option>
      <option value="18">6 PM - 7PM</option>
      <option value="19">7 PM - 8PM</option>
      <option value="20">8 PM - 9PM</option>
      <option value="21">9 PM - 10PM</option>
      <option value="22">10 PM - 11PM</option>
      <option value="23">11 PM - 12AM</option>
      <option value="24">12 AM - 1AM</option>
    </select>
    <br>
    set Lunch Time</br>
      <select id="lunchTimeSelector">
        <option value="1">1 AM - 2AM</option>
        <option value="2">2 AM - 3AM</option>
        <option value="3">3 AM - 4AM</option>
        <option value="4">4 AM - 5AM</option>
        <option value="5">5 AM - 6AM</option>
        <option value="6">6 AM - 7AM</option>
        <option value="7">7 AM - 8AM</option>
        <option value="8">8 AM - 9AM</option>
        <option value="9">9 AM - 10AM</option>
        <option value="10">10 AM - 11AM</option>
        <option value="11">11 AM - 12PM</option>
        <option value="12" selected>12 PM - 1PM</option>
        <option value="13">1 PM - 2PM</option>
        <option value="14">2 PM - 3PM</option>
        <option value="15">3 PM - 4PM</option>
        <option value="16">4 PM - 5PM</option>
        <option value="17">5 PM - 6PM</option>
        <option value="18">6 PM - 7PM</option>
        <option value="19">7 PM - 8PM</option>
        <option value="20">8 PM - 9PM</option>
        <option value="21">9 PM - 10PM</option>
        <option value="22">10 PM - 11PM</option>
        <option value="23">11 PM - 12AM</option>
        <option value="24">12 AM - 1AM</option>
      </select>
    <br>
    set Nap Time</br>
    <select id="napTimeSelector">
      <option value="1">1 AM - 2AM</option>
      <option value="2">2 AM - 3AM</option>
      <option value="3">3 AM - 4AM</option>
      <option value="4">4 AM - 5AM</option>
      <option value="5">5 AM - 6AM</option>
      <option value="6">6 AM - 7AM</option>
      <option value="7">7 AM - 8AM</option>
      <option value="8">8 AM - 9AM</option>
      <option value="9">9 AM - 10AM</option>
      <option value="10">10 AM - 11AM</option>
      <option value="11">11 AM - 12PM</option>
      <option value="12">12 PM - 1PM</option>
      <option value="13">1 PM - 2PM</option>
      <option value="14">2 PM - 3PM</option>
      <option value="15" selected>3 PM - 4PM</option>
      <option value="16">4 PM - 5PM</option>
      <option value="17">5 PM - 6PM</option>
      <option value="18">6 PM - 7PM</option>
      <option value="19">7 PM - 8PM</option>
      <option value="20">8 PM - 9PM</option>
      <option value="21">9 PM - 10PM</option>
      <option value="22">10 PM - 11PM</option>
      <option value="23">11 PM - 12AM</option>
      <option value="24">12 AM - 1AM</option>
      </select>
    <br>
    <button id="partyTimeButton">Party!</button>

    <footer>
      <p>&copy; Skillcrush 2016</p>
    </footer>
    </br>
  </div>

  </div>

        )
    }
}

export default clock
