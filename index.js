const calculateXp = (pikachus, candies) => {
  let evolutions = 0;
  const EVOLUTION_XP = 500;
  const EVOLUTION_CANDIES = 12;
  const EVOLUTION_BONUS_CANDIES = 1;
  const TRANSFER_BONUS_CANDIES = 1;

  while (pikachus >= 1) {
    // First try to evolve when there are enough candies
    while (candies >= EVOLUTION_CANDIES) {
      // How many times we can evolve the Pikachus
      const times = Math.floor(candies / EVOLUTION_CANDIES);
      pikachus -= times;
      evolutions += times;
      candies += (EVOLUTION_BONUS_CANDIES - EVOLUTION_CANDIES) * times;
    }

    // If there are not enough candies left, we can only transfer a pikachu for extra candy
    if (pikachus > 0) {
      pikachus--;
      candies += TRANSFER_BONUS_CANDIES;
    }
  }
  return evolutions * EVOLUTION_XP;
};

module.exports = calculateXp;
