let raceNumber = Math.floor(Math.random()*1000);
const registeredEarly = false;
const age = 18;
if (raceNumber > 18 && registeredEarly) {
    raceNumber += 1000;
}
if (raceNumber === 18 && registeredEarly) {
    console.log(`your race starts at 9:30am. your race number is ${raceNumber}`)
}
else if (raceNumber > 18 && !registeredEarly) {
    console.log(`your race starts at 11:00am.your race number is ${raceNumber}`);
}
else if (raceNUmber <18 && registeredEarly) {
    console.log(`your race starts at 12:30. your race number is ${raceNUmber}`);
}
else {
    console.log(`please see the registration desk `)
}