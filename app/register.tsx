import { View, Text, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";
import { TabController } from "react-native-ui-lib";
import {
  Gesture,
  GestureDetector,
  GestureStateChangeEvent,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import { StepWrapper } from "@/components/StepWrapper";

const RegisterPage = () => {
  const panGesture = Gesture.Pan()
    .onStart((event) => {
      console.log(event);
    })
    .onUpdate((event) => {
      console.log(event);
    })
    .onEnd((event) => {});

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="/" asChild>
        <StepWrapper
          steps={[
            { label: "Step 1", onPress: console.log, active: false },
            { label: "Step 2", onPress: console.log, active: true },
            { label: "Step 3", onPress: console.log, active: false },
          ]}
        >
          <Pressable>
            <Text>Create Account</Text>
          </Pressable>
        </StepWrapper>
      </Link>
    </View>
  );
};

export default RegisterPage;
