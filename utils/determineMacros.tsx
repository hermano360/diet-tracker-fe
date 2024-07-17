export const generateTargetCalories = (
  weight: number,
  height: number,
  age: number,
  activityLevel: number
) => {
  const BMR = (10 / 2.2) * weight + 6.25 * 2.54 * height - 5 * age + 5;

  return BMR * activityLevel;
};

export const generateTargetMacronutrients = (calories: number) => {
  // calories for protein, carb, fat
  const split = [0.4, 0.3, 0.3];

  const proteinCalories = calories * split[0];
  const carbCalories = calories * split[1];
  const fatCalories = calories * split[2];

  const gramsProtein = Math.floor((0.2 * proteinCalories) / 4) * 5;
  const gramsCarbs = Math.floor((0.2 * carbCalories) / 4) * 5;
  const gramsFat = Math.floor((0.2 * fatCalories) / 9) * 5;

  return { protein: gramsProtein, fat: gramsFat, carbs: gramsCarbs };
};
