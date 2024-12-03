let workTimeCurrent = document.getElementById('workTimeCurrent');
let workTimePrevious = document.getElementById('workTimePrevious');

let playTimeCurrent = document.getElementById('playTimeCurrent');
let playTimePrevious = document.getElementById('playTimePrevious');

let studyTimeCurrent = document.getElementById('studyTimeCurrent');
let studyTimePrevious = document.getElementById('studyTimePrevious');

let ExerciseTimeCurrent = document.getElementById('ExerciseTimeCurrent');
let ExerciseTimePrevious = document.getElementById('ExerciseTimePrevious');

let socialTimeCurrent = document.getElementById('socialTimeCurrent');
let socialTimePrevious = document.getElementById('socialTimePrevious');

let selfCareTimeCurrent = document.getElementById('selfCareTimeCurrent');
let selfCareTimePrevious = document.getElementById('selfCareTimePrevious');

function GetHours(){
    fetch('../data/data.json').then(
        response => response.json()
    ).then(
        hours => hours
    )
}

GetHours()

function dailyTimes(){
    
}