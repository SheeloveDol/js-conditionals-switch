let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistry = false;

let runnerAge = 18;

if (earlyRegistry && runnerAge > 18) {
  raceNumber += 1000;
}

if (earlyRegistry && runnerAge > 18) {
  console.log(`Your race starts at 9:30. Your race number is ${raceNumber}`);
} else if (runnerAge > 18) {
  console.log(`Your race starts at 11:00. Your race number is ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`Your race starts at 12:30. Your race number is ${raceNumber}`);
} else {
  console.log('Please see the registration desk.');
}