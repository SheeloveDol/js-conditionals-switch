const getSleepHours = day => {
  switch(day){
    case 'monday':
      return 7;
      break;
    case 'tuesday':
      return 6;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday': 
      return 7;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 7;
      break;
    case 'sunday':
      return 6;
      break;
  }
}

// Getting total actual hours slept for the week
const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

// Getting total ideal hours for the week
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('You\'ve got the perfect amount of sleep! ' + (actualSleepHours - idealSleepHours) + ' hours needed');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You\'ve got more sleep than needed! ' +  (actuallSleepHours - idealSleepHours) + ' less hours.');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You should get some much needed rest.. ' + (idealSleepHours - actualSleepHours) + ' more hours..');
  }

}

calculateSleepDebt();