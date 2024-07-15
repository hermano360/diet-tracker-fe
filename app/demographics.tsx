import OnboardingTabs from "@/components/OnboardingTabs";
import { Link } from "expo-router";
import {
  View,
  Text,
  Button,
  TextField,
  SectionsWheelPicker,
} from "react-native-ui-lib";
import { FlatList } from "react-native";
import { useState } from "react";

const DemographicsPage = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState<number | undefined>();
  const [currentWeight, setCurrentWeight] = useState<number | undefined>();
  const [goalWeight, setGoalWeight] = useState<number | undefined>();

  const isDisabled = !gender;

  return (
    <OnboardingTabs>
      <FlatList
        data={[]}
        style={{ width: "100%" }}
        renderItem={() => <></>}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View
            marginB-30
            style={{
              alignItems: "center",
            }}
          >
            <Text text30BO>Tell us about yourself</Text>
          </View>
        }
        ListFooterComponent={
          <View
            style={{
              alignContent: "center",
              width: "100%",
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <View marginB-10 center>
              <Text text50BO>What is your gender?</Text>
            </View>

            <View row marginB-30>
              <Button
                text60R
                white
                backgroundColor={gender === "MALE" ? "red" : "pink"}
                label="Male"
                marginT-20
                marginR-10
                onPress={() => setGender("MALE")}
              />
              <Button
                text60R
                white
                backgroundColor={gender === "FEMALE" ? "red" : "pink"}
                label="Female"
                marginT-20
                marginR-10
                onPress={() => setGender("FEMALE")}
              />
              <Button
                text60R
                white
                backgroundColor={gender === "OTHER" ? "red" : "pink"}
                label="Other"
                marginT-20
                onPress={() => setGender("OTHER")}
              />
            </View>

            {gender && (
              <>
                <View marginB-20 centerH>
                  <Text text50BO>How old are you?</Text>
                </View>
                <View
                  marginB-20
                  padding-10
                  style={{
                    borderWidth: 1,
                    borderColor: "black",
                    borderRadius: 16,
                  }}
                >
                  <SectionsWheelPicker
                    numberOfVisibleRows={3}
                    sections={[
                      {
                        onChange: setAge,
                        initialValue: undefined,
                        items: Array(100)
                          .fill(null)
                          .map((_, i) => {
                            const value = i + 1;

                            return { label: value.toString(), value };
                          }),
                      },
                    ]}
                  />
                </View>
              </>
            )}

            {age !== undefined && (
              <>
                <View marginB-10 style={{ alignItems: "center" }}>
                  <Text text50BO>How much do you currently weigh?</Text>
                </View>
                <View
                  marginB-20
                  padding-10
                  style={{
                    borderWidth: 1,
                    borderColor: "black",
                    borderRadius: 16,
                  }}
                >
                  <SectionsWheelPicker
                    sections={[
                      {
                        onChange: setCurrentWeight,
                        initialValue: undefined,
                        items: Array(201)
                          .fill(null)
                          .map((_, i) => {
                            const value = i + 100;

                            return { label: value.toString(), value };
                          }),
                      },
                    ]}
                  />
                </View>
              </>
            )}

            {currentWeight !== undefined && (
              <>
                <View marginB-20 centerH>
                  <Text text50BO>What is your goal weight?</Text>
                </View>
                <View
                  marginB-20
                  padding-10
                  style={{
                    borderWidth: 1,
                    borderColor: "black",
                    borderRadius: 16,
                  }}
                >
                  <SectionsWheelPicker
                    sections={[
                      {
                        onChange: setGoalWeight,
                        initialValue: undefined,
                        items: Array(201)
                          .fill(null)
                          .map((_, i) => {
                            const value = i + 100;

                            return { label: value.toString(), value };
                          }),
                      },
                    ]}
                  />
                </View>
              </>
            )}
            {goalWeight !== undefined && (
              <>
                <View marginB-10 centerH>
                  <Text text50BO>
                    Is there anything else you'd like to share?
                  </Text>
                </View>
                <View
                  marginB-20
                  style={{
                    borderColor: "black",
                    borderRadius: 16,
                    borderWidth: 1,
                    padding: 10,
                  }}
                >
                  <TextField
                    placeholder={"Anything you'd like to share"}
                    enableErrors
                    showCharCounter
                    text60R
                  />
                </View>
                <View marginB-80>
                  <Link href={"/macros"} asChild>
                    <Button
                      text50R
                      white
                      backgroundColor="red"
                      disabledBackgroundColor="pink"
                      label="Continue"
                      marginT-20
                      disabled={isDisabled}
                    />
                  </Link>
                </View>
              </>
            )}
          </View>
        }
      />
    </OnboardingTabs>
  );
};

export default DemographicsPage;
