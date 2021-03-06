import eat from './components/eat/eat';
import play from './components/play/play';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';
import '../styles/main.scss';

const events = () => {
  $('body').on('click', '#healthy-food-btn', eat.feedHealthy);
  $('body').on('click', '#unhealthy-food-btn', eat.feedUnhealthy);
  $('body').on('click', '#super-fun-btn', play.playSuperFun);
  $('body').on('click', '#slightly-fun-btn', play.playSlightlyFun);
  $('body').on('click', '#run-away-btn', fight.runAwayScore);
  $('body').on('click', '#violence-btn', fight.violenceScore);
  $('body').on('click', '#nap-btn', sleep.napScore);
  $('body').on('click', '#deep-slumber-btn', sleep.deepSlumberScore);
};

const init = () => {
  eat.printEatQuad();
  play.printPlayQuad();
  fight.printFightQuad();
  sleep.printSleepQuad();
  events();
};

init();
