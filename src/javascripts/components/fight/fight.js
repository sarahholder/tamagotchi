import utils from '../../helpers/utils';
import fightData from '../../helpers/data/fightData';
import './fight.scss';

const printFightQuad = () => {
  const strengthScore = fightData.getStrengthScore();
  let domString = '';
  domString += '<div class="container">';
  domString += '<h2>STRENGTH</h2>';
  domString += `<h3>Strength Score: ${strengthScore}</h3>`;
  domString += '<button id="run-away-btn" type="button">Run Away</button>';
  domString += '<button id="violence-btn" type="button">Attack!</button>';
  domString += '</div>';
  utils.printToDom('fight', domString);
};

const runAwayScore = () => {
  fightData.runAway();
  printFightQuad();
};

const violenceScore = () => {
  fightData.violence();
  printFightQuad();
};

export default { printFightQuad, runAwayScore, violenceScore };
