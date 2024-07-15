import { usePathname, Link } from "expo-router";
import { PropsWithChildren } from "react";
import { Button, View, Text } from "react-native-ui-lib";

type Step = {
  label: string;
  route: string;
  active?: boolean;
  disabled?: boolean;
};

interface StepWrapperProps extends PropsWithChildren {
  steps: Step[];
}

export const StepWrapper = ({ steps = [], children }: StepWrapperProps) => {
  const pathname = usePathname();

  return (
    <View
      paddingV-60
      flex
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
      }}
    >
      <View marginB-40 row>
        {steps.map((item, index) => {
          const borderStyle =
            index === 0
              ? { borderTopRightRadius: 0, borderBottomRightRadius: 0 }
              : index === steps.length - 1
              ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }
              : { borderRadius: 0 };

          const isActive = pathname === item.route;

          return (
            <Link
              href={item.route}
              asChild
              disabled={item.disabled}
              key={`${item.label}-${index}`}
            >
              <Button
                label={item.label}
                size={Button.sizes.medium}
                style={{
                  ...borderStyle,
                  backgroundColor: isActive ? "red" : "pink",
                }}
                key={`${item.label}-${index}`}
              />
            </Link>
          );
        })}
      </View>

      <View style={{ width: "100%" }}>{children}</View>
    </View>
  );
};
