import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

import { StepWrapper } from "@/components/StepWrapper";

const RegisterPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StepWrapper
        steps={[
          {
            label: "Step 1",
            route: "/",
            active: false,
          },
          {
            label: "Step 2",
            route: "/denver",
            active: true,
          },
          {
            label: "Step 3",
            route: "/people",
            active: false,
          },
        ]}
      >
        <Link href="/" asChild>
          <Pressable>
            <Text>Create Account</Text>
          </Pressable>
        </Link>
        <Link href="/denver" asChild>
          <Pressable>
            <Text>Let's Go To Denver </Text>
          </Pressable>
        </Link>
      </StepWrapper>
    </View>
  );
};

export default RegisterPage;
