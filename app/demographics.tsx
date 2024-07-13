import OnboardingTabs from "@/components/OnboardingTabs";
import { Link } from "expo-router";
import {
  View,
  Text,
  Button,
  Card,
  TextField,
  NumberInput,
  SectionsWheelPicker,
} from "react-native-ui-lib";
import { FlatList, ScrollView } from "react-native";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "@/state";

const imageSource = require("../assets/images/plate-food.jpg");

const DemographicsPage = () => {
  const { demographics = {}, setDemographics } = useContext(ThemeContext);

  const [selectedGender, setSelectedGender] = useState();

  useEffect(() => {
    setSelectedGender(undefined);
  }, []);

  useEffect(() => {
    setDemographics({ ...demographics, gender: selectedGender });
  }, [selectedGender]);

  const isDisabled = !selectedGender;

  return (
    <OnboardingTabs>
      <FlatList
        data={[]}
        style={{ width: "100%" }}
        renderItem={() => <></>}
        ListHeaderComponent={
          <View
            style={{
              alignContent: "center",
              width: "100%",
              flex: 1,
              justifyContent: "flex-start",
            }}
          >
            <View marginB-30>
              <Text text30BO>Tell us about yourself</Text>
            </View>
            <View marginB-10 center>
              <Text text50BO>What is your gender?</Text>
            </View>

            <View row marginB-30>
              <Button
                text50R
                white
                backgroundColor={selectedGender === "MALE" ? "red" : "pink"}
                label="Male"
                marginT-20
                marginR-10
                onPress={() => setSelectedGender("MALE")}
              />
              <Button
                text50R
                white
                backgroundColor={selectedGender === "FEMALE" ? "red" : "pink"}
                label="Female"
                marginT-20
                marginR-10
                onPress={() => setSelectedGender("FEMALE")}
              />
              <Button
                text50R
                white
                backgroundColor={selectedGender === "OTHER" ? "red" : "pink"}
                label="Other"
                marginT-20
                onPress={() => setSelectedGender("OTHER")}
              />
            </View>
            <View marginB-10 centerH>
              <Text text50BO>How old are you?</Text>
            </View>
            <SectionsWheelPicker
              sections={[
                {
                  initialValue: 20,
                  items: Array(100)
                    .fill(null)
                    .map((_, i) => {
                      const value = i + 14;

                      return { label: value.toString(), value };
                    }),
                },
              ]}
            />

            <View marginB-10 style={{ alignItems: "center" }}>
              <Text text50BO>How much do you currently weigh?</Text>
            </View>
            <SectionsWheelPicker
              sections={[
                {
                  initialValue: 150,
                  items: Array(201)
                    .fill(null)
                    .map((_, i) => {
                      const value = i + 100;

                      return { label: value.toString(), value };
                    }),
                },
              ]}
            />

            <View marginB-10 centerH>
              <Text text50BO>What is your goal weight?</Text>
            </View>
            <SectionsWheelPicker
              sections={[
                {
                  initialValue: 150,
                  items: Array(201)
                    .fill(null)
                    .map((_, i) => {
                      const value = i + 100;

                      return { label: value.toString(), value };
                    }),
                },
              ]}
            />

            <View marginB-10 centerH>
              <Text text50BO>Is there anything else you'd like to share?</Text>
            </View>
            <View
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
              <Link href={"/weight"} asChild>
                <Button
                  text50R
                  white
                  backgroundColor="red"
                  disabledBackgroundColor="pink"
                  label={"Continue"}
                  marginT-20
                  disabled={isDisabled}
                />
              </Link>
            </View>
          </View>
        }
      />
    </OnboardingTabs>
  );
};

export default DemographicsPage;
