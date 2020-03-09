import utils from '../../helpers/utils';
import eatData from '../../helpers/data/eatData';
import './eat.scss';

const printEatQuad = () => {
  const fullnessScore = eatData.getFullnessScore();
  let domString = '';
  domString += '<h2>HUNGER</h2>';
  domString += `<h3>Fullness Score: ${fullnessScore}</h3>`;
  domString += '<button id="healthy-food-btn" type="button">Healthy Food</button>';
  domString += '<button id="unhealthy-food-btn" type="button">Unhealthy Food</button>';
  utils.printToDom('eat', domString);
};

const feedHealthy = () => {
  eatData.eatHealthy();
  printEatQuad();
};

const feedUnhealthy = () => {
  eatData.eatUnhealthy();
  printEatQuad();
};

export default { printEatQuad, feedHealthy, feedUnhealthy };
