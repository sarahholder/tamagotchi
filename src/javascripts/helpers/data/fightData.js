let strength = 100;

const runAway = () => {
  if (strength <= 98) {
    strength += 2;
  } else {
    strength = 100;
  }
};

const violence = () => {
  if (strength >= 10) {
    strength -= 10;
  } else {
    strength = 0;
  }
};

const getStrengthScore = () => strength;

export default { getStrengthScore, runAway, violence };
