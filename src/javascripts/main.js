import eat from './components/eat/eat';

const events = () => {
  $('body').on('click', '#healthy-food-btn', eat.feedHealthy);
  $('body').on('click', '#unhealthy-food-btn', eat.feedUnhealthy);
};

const init = () => {
  eat.printEatQuad();
  events();
};

init();
