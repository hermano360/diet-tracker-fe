const generateTargetCalories = (
  weight: number,
  height: number,
  age: number,
  activityLevel: number
) => {
  const BMR = 66 + 6.23 * weight + 12.7 * height - 6.8 * age;

  return BMR * activityLevel;
};

const generateTargetMacronutrients = (calories: number) => {
  // calories for protein, carb, fat
  const split = [0.4, 0.4, 0.2];

  const proteinCalories = calories * split[0];
  const carbCalories = calories * split[1];
  const fatCalories = calories * split[2];

  const gramsProtein = proteinCalories / 4;
  const gramsCarbs = carbCalories / 4;
  const gramsFat = fatCalories / 9;

  return { protein: gramsProtein, fat: gramsFat, carbs: gramsCarbs };
};
