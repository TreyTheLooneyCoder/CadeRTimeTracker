// I need a variable to store previous and current times 
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
