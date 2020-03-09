import eat from './components/eat/eat';
import play from './components/play/play';
import '../styles/main.scss';

const events = () => {
  $('body').on('click', '#healthy-food-btn', eat.feedHealthy);
  $('body').on('click', '#unhealthy-food-btn', eat.feedUnhealthy);
  $('body').on('click', '#super-fun-btn', play.playSuperFun);
  $('body').on('click', '#slightly-fun-btn', play.playSlightlyFun);
};

const init = () => {
  eat.printEatQuad();
  play.printPlayQuad();
  events();
};

init();
