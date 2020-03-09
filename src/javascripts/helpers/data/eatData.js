let full = 50;

const eatHealthy = () => {
  if (full <= 90) {
    full += 10;
  } else {
    full = 100;
  }
};

const eatUnhealthy = () => {
  if (full >= 3) {
    full -= 3;
  } else {
    full = 0;
  }
};

const getFullnessScore = () => full;

export default { getFullnessScore, eatUnhealthy, eatHealthy };
