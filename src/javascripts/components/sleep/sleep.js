import utils from '../../helpers/utils';
import sleepData from '../../helpers/data/sleepData';
import './sleep.scss';

const printSleepQuad = () => {
  const energyScore = sleepData.getEnergy();
  let domString = '';
  domString += '<div class="container">';
  domString += '<h2>SLEEP</h2>';
  domString += `<h3>Sleep Score: ${energyScore}</h3>`;
  domString += '<button id="nap-btn" type="button">Nap Time</button>';
  domString += '<button id="deep-slumber-btn" type="button">Deep Slumber</button>';
  domString += '</div>';
  utils.printToDom('sleep', domString);
};

const napScore = () => {
  sleepData.nap();
  printSleepQuad();
};

const deepSlumberScore = () => {
  sleepData.deepSlumber();
  printSleepQuad();
};

export default { printSleepQuad, napScore, deepSlumberScore };
