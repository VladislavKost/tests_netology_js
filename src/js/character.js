export const characterState = ({ health }) => {
  if (health > 50) {
    return "healthy";
  } else if (health >= 15 && health <= 50) {
    return "wounded";
  } else if (health > 0 && health < 15) {
    return "critical";
  }
};

export const sortCharacterHealth = (characters) => {
  const sortedCharacters = [...characters].sort((a, b) => b.health - a.health);
  return sortedCharacters;
};
