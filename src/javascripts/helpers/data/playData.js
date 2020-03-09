let fun = 50;

const superFun = () => {
  if (fun <= 50) {
    fun += 50;
  } else {
    fun = 100;
  }
};

const slightlyFun = () => {
  if (fun <= 98) {
    fun += 2;
  } else {
    fun = 100;
  }
};

const getPlayScore = () => fun;

export default { getPlayScore, superFun, slightlyFun };
