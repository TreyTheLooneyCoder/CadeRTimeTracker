// Current
let workCurrentTimes = document.getElementById('workCurrentTimes');
let playCurrentTimes = document.getElementById('playCurrentTimes');
let studykCurrentTimes = document.getElementById('studykCurrentTimes');
let exerciseCurrentTimes = document.getElementById('exerciseCurrentTimes');
let socialCurrentTimes = document.getElementById('socialCurrentTimes');
let selfCareCurrentTimes = document.getElementById('selfCareCurrentTimes');

// Previous
let workPreviousTimes = document.getElementById('workPreviousTimes');
let playPreviousTimes = document.getElementById('playPreviousTimes');
let studyPreviousTimes = document.getElementById('studyPreviousTimes');
let exercisePreviousTimes = document.getElementById('exercisePreviousTimes');
let socialPreviousTimes = document.getElementById('socialPreviousTimes');
let selfCarePreviousTimes = document.getElementById('selfCarePreviousTimes');

// Buttons
let dailyBtn = document.getElementById('dailyBtn');
let weeklyBtn = document.getElementById('weeklyBtn');
let monthlyBtn = document.getElementById('monthlyBtn');


async function GetHours() {
    const promise = await fetch("../data/data.json");
    const data = await promise.json();
    console.log(data);
    return data;
}

GetHours().then(data => {
    workCurrentTimes.innerText = `${data[0].timeframes.weekly.current}hrs`;
    workPreviousTimes.innerText = `Last Week  - ${data[0].timeframes.weekly.previous}hrs`;
    playCurrentTimes.innerText = `${data[1].timeframes.weekly.current}hrs`;
    playPreviousTimes.innerText = `Last Week - ${data[1].timeframes.weekly.previous}hrs`;
    studykCurrentTimes.innerText = `${data[2].timeframes.weekly.current}hrs`;
    studyPreviousTimes.innerText = `Last Week - ${data[2].timeframes.weekly.previous}`;
    exerciseCurrentTimes.innerText = `${data[3].timeframes.weekly.current}hrs`;
    exercisePreviousTimes.innerText = `Last Week - ${data[3].timeframes.weekly.previous}hrs`;
    socialCurrentTimes.innerText = `${data[4].timeframes.weekly.current}hrs`;
    socialPreviousTimes.innerText = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;
    selfCareCurrentTimes.innerText = `${data[5].timeframes.weekly.current}hrs`;
    selfCarePreviousTimes.innerText = `Last Week - ${data[5].timeframes.weekly.previous}hrs`;
})

dailyBtn.addEventListener("click", function(){

    GetHours().then(data => {
        workCurrentTimes.innerText = `${data[0].timeframes.daily.current}hrs`;
        workPreviousTimes.innerText = `Yesterday  - ${data[0].timeframes.daily.previous}hrs`;
        playCurrentTimes.innerText = `${data[1].timeframes.daily.current}hrs`;
        playPreviousTimes.innerText = `Yesterday - ${data[1].timeframes.daily.previous}hrs`;
        studykCurrentTimes.innerText = `${data[2].timeframes.daily.current}hrs`;
        studyPreviousTimes.innerText = `Yesterday - ${data[2].timeframes.daily.previous}`;
        exerciseCurrentTimes.innerText = `${data[3].timeframes.daily.current}hrs`;
        exercisePreviousTimes.innerText = `Yesterday - ${data[3].timeframes.daily.previous}hrs`;
        socialCurrentTimes.innerText = `${data[4].timeframes.daily.current}hrs`;
        socialPreviousTimes.innerText = `Yesterday - ${data[4].timeframes.daily.previous}hrs`;
        selfCareCurrentTimes.innerText = `${data[5].timeframes.daily.current}hrs`;
        selfCarePreviousTimes.innerText = `Yesterday - ${data[5].timeframes.daily.previous}hrs`;
    })
})

weeklyBtn.addEventListener("click", function(){

    GetHours().then(data => {
        workCurrentTimes.innerText = `${data[0].timeframes.weekly.current}hrs`;
        workPreviousTimes.innerText = `Last Week  - ${data[0].timeframes.weekly.previous}hrs`;
        playCurrentTimes.innerText = `${data[1].timeframes.weekly.current}hrs`;
        playPreviousTimes.innerText = `Last Week - ${data[1].timeframes.weekly.previous}hrs`;
        studykCurrentTimes.innerText = `${data[2].timeframes.weekly.current}hrs`;
        studyPreviousTimes.innerText = `Last Week - ${data[2].timeframes.weekly.previous}`;
        exerciseCurrentTimes.innerText = `${data[3].timeframes.weekly.current}hrs`;
        exercisePreviousTimes.innerText = `Last Week - ${data[3].timeframes.weekly.previous}hrs`;
        socialCurrentTimes.innerText = `${data[4].timeframes.weekly.current}hrs`;
        socialPreviousTimes.innerText = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;
        selfCareCurrentTimes.innerText = `${data[5].timeframes.weekly.current}hrs`;
        selfCarePreviousTimes.innerText = `Last Week - ${data[5].timeframes.weekly.previous}hrs`;
    })
})

monthlyBtn.addEventListener("click", function(){
    console.log('monthly pushed');

    GetHours().then(data => {
        workCurrentTimes.innerText = `${data[0].timeframes.monthly.current}hrs`;
        workPreviousTimes.innerText = `Last Month  - ${data[0].timeframes.monthly.previous}hrs`;
        playCurrentTimes.innerText = `${data[1].timeframes.monthly.current}hrs`;
        playPreviousTimes.innerText = `Last Month - ${data[1].timeframes.monthly.previous}hrs`;
        studykCurrentTimes.innerText = `${data[2].timeframes.monthly.current}hrs`;
        studyPreviousTimes.innerText = `Last Month - ${data[2].timeframes.monthly.previous}`;
        exerciseCurrentTimes.innerText = `${data[3].timeframes.monthly.current}hrs`;
        exercisePreviousTimes.innerText = `Last Month - ${data[3].timeframes.monthly.previous}hrs`;
        socialCurrentTimes.innerText = `${data[4].timeframes.monthly.current}hrs`;
        socialPreviousTimes.innerText = `Last Month - ${data[4].timeframes.monthly.previous}hrs`;
        selfCareCurrentTimes.innerText = `${data[5].timeframes.monthly.current}hrs`;
        selfCarePreviousTimes.innerText = `Last Month - ${data[5].timeframes.monthly.previous}hrs`;
    })
})