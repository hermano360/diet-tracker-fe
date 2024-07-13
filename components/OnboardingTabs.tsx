import { View, Text, Pressable } from "react-native";
import { Link, usePathname } from "expo-router";

import { StepWrapper } from "@/components/StepWrapper";
import { PropsWithChildren } from "react";

interface OnboardingTabsProps extends PropsWithChildren {}

const ROUTES = [
  { label: "Step 1", route: "/goals" },
  { label: "Step 2", route: "/demographics" },
  { label: "Step 3", route: "/weight" },
];

const OnboardingTabs = ({ children }: OnboardingTabsProps) => {
  const pathname = usePathname();

  const routeIndex = ROUTES.findIndex((route) => route.route === pathname);
  const disabled = ROUTES.map((_, index) => index > routeIndex);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StepWrapper
        steps={[
          {
            label: ROUTES[0].label,
            route: ROUTES[0].route,
            active: false,
            disabled: disabled[0],
          },
          {
            label: ROUTES[1].label,
            route: ROUTES[1].route,
            active: true,
            disabled: disabled[1],
          },
          {
            label: ROUTES[2].label,
            route: ROUTES[2].route,
            active: false,
            disabled: disabled[2],
          },
        ]}
      >
        {children}
      </StepWrapper>
    </View>
  );
};

export default OnboardingTabs;
