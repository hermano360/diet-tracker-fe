// step={5}
//         value={protein}
//         onValueChange={setProtein}
//         minValue={0}

import { Button, Text, View } from "react-native-ui-lib";

type StepperProps = {
  step?: number;
  value?: number;
  onValueChange?: (value: number) => void;
  minValue?: number;
};

type StepButtonProps = {
  type: "increment" | "decrement";
  onPress?: (value: number) => void;
};

const StepButton = ({ type, onPress }: StepButtonProps) => {
  return (
    <Button
      onPress={onPress}
      round
      padding-10
      marginH-20
      backgroundColor="#FF69B4"
      size={Button.sizes.large}
      outline
    >
      <Text text40R>{type === "increment" ? "+" : "-"}</Text>
    </Button>
  );
};

export const Stepper = ({
  step = 1,
  value = 0,
  onValueChange,
  minValue = 0,
}: StepperProps) => {
  const handleDecrementValue = () => {
    const newValue = value - step;
    if (newValue < minValue || !onValueChange) {
      return;
    }

    onValueChange(newValue);
  };

  const handleIncrementValue = () => {
    const newValue = value + step;

    if (!onValueChange) {
      return;
    }

    onValueChange(newValue);
  };

  return (
    <View row centerV>
      <StepButton type="decrement" onPress={handleDecrementValue} />
      <Text text40R>{value}</Text>
      <StepButton type="increment" onPress={handleIncrementValue} />
    </View>
  );
};
