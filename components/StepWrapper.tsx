import { PropsWithChildren } from "react";
import { Button, View } from "react-native-ui-lib";

type Step = {
  label: string;
  onPress: () => void;
  active?: boolean;
};

interface StepWrapperProps extends PropsWithChildren {
  steps: Step[];
}

export const StepWrapper = ({ steps = [], children }: StepWrapperProps) => {
  return (
    <View
      padding-40
      flex
      style={{ justifyContent: "flex-start", alignItems: "center" }}
    >
      <View marginB-40 row>
        {steps.map((item, index) => {
          const borderStyle =
            index === 0
              ? { borderTopRightRadius: 0, borderBottomRightRadius: 0 }
              : index === steps.length - 1
              ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }
              : { borderRadius: 0 };

          return (
            <Button
              label={item.label}
              size={Button.sizes.medium}
              style={{
                ...borderStyle,
                backgroundColor: item.active ? "red" : "pink",
              }}
            />
          );
        })}
      </View>

      <View>{children}</View>
    </View>
  );
};
