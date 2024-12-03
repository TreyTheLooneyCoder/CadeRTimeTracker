// I need a variable to store previous and current times, as well as the sections themselves 
let currentTime;
let previousTimes;

let workHrs = document.getElementById('workHrs');
let playHrs = document.getElementById('playHrs');
let studyHrs = document.getElementById('studyHrs');
let exerciseHrs = document.getElementById('exerciseHrs');
let socialHrs = document.getElementById('socialHrs');
let selfCareHrs = document.getElementById('selfCareHrs');
// I need a varable and functions for storing the monthly, daily and weekly hours seperately
// I need a function to switch the times shown on the page 


function GetHours(){
    fetch('../data/data.json').then(
        response => response.json()
    ).then(
        hours => hours
    )
}

GetHours()

function dailyHours(){
    // currentTime = hours.
}