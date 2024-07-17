import OnboardingTabs from "@/components/OnboardingTabs";
import { router } from "expo-router";
import { View, Text, Button, Card } from "react-native-ui-lib";
import { ScrollView } from "react-native";
import { useState } from "react";

import { useUserStateDispatch } from "@/state/StateContext";

const imageSource = require("../assets/images/plate-food.jpg");

const GoalPage = () => {
  const dispatch = useUserStateDispatch();

  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const onSubmit = () => {
    if (!selectedGoal || !dispatch) return;

    dispatch({ type: "goal", goal: selectedGoal });
    router.push("/demographics");
  };

  return (
    <OnboardingTabs>
      <View style={{ justifyContent: "flex-start", alignContent: "center" }}>
        <View marginB-40>
          <Text text30BO>What are your nutritional goals?</Text>
        </View>

        <ScrollView
          horizontal
          style={{ paddingTop: 10, maxHeight: 350, marginBottom: 20 }}
          showsHorizontalScrollIndicator={false}
        >
          <Card
            selected={selectedGoal === "WEIGHT_LOSS"}
            onPress={() => setSelectedGoal("WEIGHT_LOSS")}
            activeOpacity={1}
            style={{ height: 300, marginRight: 20 }}
          >
            <Card.Section
              imageSource={imageSource}
              imageStyle={{ height: 300, width: 250, borderRadius: 16 }}
            />
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                paddingHorizontal: 20,
                backgroundColor: `rgba(0,0,0,${
                  selectedGoal === "WEIGHT_LOSS" ? "0.4" : "0.6"
                })`,
                borderRadius: 16,
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Text text30BO white center>
                I want to focus on losing weight
              </Text>
            </View>
          </Card>
          <Card
            selected={selectedGoal === "MUSCLE_GAIN"}
            onPress={() => setSelectedGoal("MUSCLE_GAIN")}
            activeOpacity={1}
            style={{ height: 300, marginRight: 20, width: 250 }}
          >
            <Card.Section
              imageSource={imageSource}
              imageStyle={{ height: 300, width: 250, borderRadius: 16 }}
            />
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                paddingHorizontal: 20,
                backgroundColor: `rgba(0,0,0,${
                  selectedGoal === "MUSCLE_GAIN" ? "0.3" : "0.6"
                })`,
                borderRadius: 16,
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Text text30BO white center>
                I want to focus on gaining muscle
              </Text>
            </View>
          </Card>
          <Card
            selected={selectedGoal === "HYBRID"}
            onPress={() => setSelectedGoal("HYBRID")}
            activeOpacity={1}
            style={{ height: 300, marginRight: 20 }}
          >
            <Card.Section
              imageSource={imageSource}
              imageStyle={{ height: 300, width: 250, borderRadius: 16 }}
            />
            <View
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                paddingHorizontal: 20,
                backgroundColor: `rgba(0,0,0,${
                  selectedGoal === "HYBRID" ? "0.3" : "0.6"
                })`,
                borderRadius: 16,
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Text text30BO white center>
                I want to focus on a hybrid approach
              </Text>
            </View>
          </Card>
        </ScrollView>
        <View>
          <Button
            text50R
            white
            background-red20
            disabledBackgroundColor="pink"
            label="Continue"
            marginT-20
            disabled={!selectedGoal}
            onPress={onSubmit}
          />
        </View>
      </View>
    </OnboardingTabs>
  );
};

export default GoalPage;
