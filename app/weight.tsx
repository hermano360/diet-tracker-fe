import { View, Text, Pressable } from "react-native";
import OnboardingTabs from "@/components/OnboardingTabs";
import { Link } from "expo-router";

const WeightPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <OnboardingTabs>
        <Link href={"/goals"} asChild>
          <Pressable>
            <Text> Goals </Text>
          </Pressable>
        </Link>
      </OnboardingTabs>
    </View>
  );
};

export default WeightPage;
