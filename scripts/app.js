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
    playPreviousTimes = `Last Week - ${data[1].timeframes.weekly.previous}hrs`;
    studykCurrentTimes.innerText = `${data[2].timeframes.weekly.current}hrs`;
    studyPreviousTimes = `Last Week - ${data[2].timeframes.weekly.previous}`;
    exerciseCurrentTimes.innerText = `${data[3].timeframes.weekly.current}hrs`;
    exercisePreviousTimes = `Last Week - ${data[3].timeframes.weekly.previous}hrs`;
    socialCurrentTimes.innerText = `${data[4].timeframes.weekly.current}hrs`;
    socialPreviousTimes = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;
    selfCareCurrentTimes.innerText = `${data[5].timeframes.weekly.current}hrs`;
    selfCarePreviousTimes = `Last Week - ${data[5].timeframes.weekly.previous}hrs`;
})

dailyBtn.addEventListener("click", function(){
    GetHours().then(data => {
        workCurrentTimes.innerText = `${data[0].timeframes.daily.current}hrs`;
        workPreviousTimes.innerText = `Yesterday  - ${data[0].timeframes.daily.previous}hrs`;
        playCurrentTimes.innerText = `${data[1].timeframes.daily.current}hrs`;
        playPreviousTimes = `Yesterday - ${data[1].timeframes.daily.previous}hrs`;
        studykCurrentTimes.innerText = `${data[2].timeframes.daily.current}hrs`;
        studyPreviousTimes = `Yesterday - ${data[2].timeframes.daily.previous}`;
        exerciseCurrentTimes.innerText = `${data[3].timeframes.daily.current}hrs`;
        exercisePreviousTimes = `Yesterday - ${data[3].timeframes.daily.previous}hrs`;
        socialCurrentTimes.innerText = `${data[4].timeframes.daily.current}hrs`;
        socialPreviousTimes = `Yesterday - ${data[4].timeframes.daily.previous}hrs`;
        selfCareCurrentTimes.innerText = `${data[5].timeframes.daily.current}hrs`;
        selfCarePreviousTimes = `Yesterday - ${data[5].timeframes.daily.previous}hrs`;
    })
})

weeklyBtn.addEventListener("click", function(){
    GetHours().then(data => {
        workCurrentTimes.innerText = `${data[0].timeframes.weekly.current}hrs`;
        workPreviousTimes.innerText = `Last Week  - ${data[0].timeframes.weekly.previous}hrs`;
        playCurrentTimes.innerText = `${data[1].timeframes.weekly.current}hrs`;
        playPreviousTimes = `Last Week - ${data[1].timeframes.weekly.previous}hrs`;
        studykCurrentTimes.innerText = `${data[2].timeframes.weekly.current}hrs`;
        studyPreviousTimes = `Last Week - ${data[2].timeframes.weekly.previous}`;
        exerciseCurrentTimes.innerText = `${data[3].timeframes.weekly.current}hrs`;
        exercisePreviousTimes = `Last Week - ${data[3].timeframes.weekly.previous}hrs`;
        socialCurrentTimes.innerText = `${data[4].timeframes.weekly.current}hrs`;
        socialPreviousTimes = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;
        selfCareCurrentTimes.innerText = `${data[5].timeframes.weekly.current}hrs`;
        selfCarePreviousTimes = `Last Week - ${data[5].timeframes.weekly.previous}hrs`;
    })
})

monthlyBtn.addEventListener("click", function(){
    GetHours().then(data => {
        workCurrentTimes.innerText = `${data[0].timeframes.monthly.current}hrs`;
        workPreviousTimes.innerText = `Last Month  - ${data[0].timeframes.monthly.previous}hrs`;
        playCurrentTimes.innerText = `${data[1].timeframes.monthly.current}hrs`;
        playPreviousTimes = `Last Month - ${data[1].timeframes.monthly.previous}hrs`;
        studykCurrentTimes.innerText = `${data[2].timeframes.monthly.current}hrs`;
        studyPreviousTimes = `Last Month - ${data[2].timeframes.monthly.previous}`;
        exerciseCurrentTimes.innerText = `${data[3].timeframes.monthly.current}hrs`;
        exercisePreviousTimes = `Last Month - ${data[3].timeframes.monthly.previous}hrs`;
        socialCurrentTimes.innerText = `${data[4].timeframes.monthly.current}hrs`;
        socialPreviousTimes = `Last Month - ${data[4].timeframes.monthly.previous}hrs`;
        selfCareCurrentTimes.innerText = `${data[5].timeframes.monthly.current}hrs`;
        selfCarePreviousTimes = `Last Month - ${data[5].timeframes.monthly.previous}hrs`;
    })
})