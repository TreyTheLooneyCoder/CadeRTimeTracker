let workCurrentTimes = document.getElementById('workCurrentTimes');
let workPreviousTimes = document.getElementById('workPreviousTimes');
let playCurrentTimes = document.getElementById('playCurrentTimes');
let playPreviousTimes = document.getElementById('playPreviousTimes');
let studykCurrentTimes = document.getElementById('studykCurrentTimes');
let studyPreviousTimes = document.getElementById('studyPreviousTimes');
let exerciseCurrentTimes = document.getElementById('exerciseCurrentTimes');
let exercisePreviousTimes = document.getElementById('exercisePreviousTimes');
let socialCurrentTimes = document.getElementById('socialCurrentTimes');
let socialPreviousTimes = document.getElementById('socialPreviousTimes');
let selfCareCurrentTimes = document.getElementById('selfCareCurrentTimes');
let selfCarePreviousTimes = document.getElementById('selfCarePreviousTimes');


function GetHours(){
    fetch('../data/data.json').then(
        response => response.json()
    ).then(
        hours => hours
    )
}

GetHours()

