import utils from '../../helpers/utils';
import playData from '../../helpers/data/playData';
import './play.scss';

const printPlayQuad = () => {
  const playScore = playData.getPlayScore();
  let domString = '';
  domString += '<div class="container">';
  domString += '<h2>PLAY</h2>';
  domString += `<h3>Play Score: ${playScore}</h3>`;
  domString += '<button id="super-fun-btn" type="button">Super Fun Activity</button>';
  domString += '<button id="slightly-fun-btn" type="button">Slightly Fun Activity</button>';
  domString += '</div>';
  utils.printToDom('play', domString);
};

const playSuperFun = () => {
  playData.superFun();
  printPlayQuad();
};

const playSlightlyFun = () => {
  playData.slightlyFun();
  printPlayQuad();
};

export default { printPlayQuad, playSuperFun, playSlightlyFun };
