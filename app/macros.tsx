import { ScrollView } from "react-native";
import OnboardingTabs from "@/components/OnboardingTabs";
import { Link } from "expo-router";
import { View, Text, Button } from "react-native-ui-lib";
import { Stepper } from "../components/Stepper";
import { useState } from "react";

const WeightPage = () => {
  const [protein, setProtein] = useState(100);
  const [fat, setFat] = useState(100);
  const [carbs, setCarbs] = useState(100);

  const calories = protein * 4 + fat * 9 + carbs * 4;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <OnboardingTabs>
        <ScrollView
          style={{ marginBottom: 50 }}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Text text70 $textDefault marginB-20>
              Based on the information provided, we have generated the following
              macro plan. Feel free to adjust as necessary.
            </Text>
          </View>
          <View spread marginT-20 centerH style={{ width: "100%" }}>
            <Text text50R $textDefault marginB-20>
              Total Daily Calories
            </Text>
            <Text text50 $textDefault marginB-20>
              {calories}
            </Text>
          </View>
          <View spread marginT-20 centerH style={{ width: "100%" }}>
            <Text text50R $textDefault marginB-20>
              Protein (g)
            </Text>

            <Stepper
              step={5}
              value={protein}
              onValueChange={setProtein}
              minValue={0}
            />
          </View>
          <View spread marginT-20 centerH style={{ width: "100%" }}>
            <Text text50R $textDefault marginB-20>
              Fat (g)
            </Text>
            <Stepper step={5} value={fat} onValueChange={setFat} minValue={0} />
          </View>
          <View spread marginT-20 centerH style={{ width: "100%" }}>
            <Text text50R $textDefault marginB-20>
              Carbohydrates (g)
            </Text>
            <Stepper
              step={5}
              value={carbs}
              onValueChange={setCarbs}
              minValue={0}
            />
          </View>

          <View marginT-50>
            <Link href={"/goals"} asChild>
              <Button
                text50R
                white
                backgroundColor="red"
                disabledBackgroundColor="pink"
                label={"Finish"}
                marginT-20
              />
            </Link>
          </View>
        </ScrollView>
      </OnboardingTabs>
    </View>
  );
};

export default WeightPage;
