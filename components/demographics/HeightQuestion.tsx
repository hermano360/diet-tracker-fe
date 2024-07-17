import OnboardingTabs from "@/components/OnboardingTabs";
import { Link, router } from "expo-router";
import {
  View,
  Text,
  Button,
  TextField,
  SectionsWheelPicker,
} from "react-native-ui-lib";
import { FlatList } from "react-native";
import { useMemo, useState } from "react";
import { useUserStateDispatch } from "@/state/StateContext";
import {
  generateTargetCalories,
  generateTargetMacronutrients,
} from "@/utils/determineMacros";

const ActivityLevelQuestion = () => {
  return (
    <View
      marginB-40
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
                  initialValue: 18,
                  items: ageItems,
                },
              ]}
            />
          </View>
        </>
      )}
      {age !== undefined && (
        <>
          <View marginB-10 centerH>
            <Text text50BO>How active are you?</Text>
          </View>
          <View marginB-30>
            <Button
              text60R
              white
              backgroundColor={activityLevel === 1.2 ? "red" : "pink"}
              marginT-20
              marginR-10
              onPress={() => setActivityLevel(1.2)}
            >
              <Text white text60R center>
                Little to no exercise
              </Text>
            </Button>
            <Button
              text60R
              white
              backgroundColor={activityLevel === 1.375 ? "red" : "pink"}
              marginT-20
              marginR-10
              onPress={() => setActivityLevel(1.375)}
            >
              <Text white text60R center>
                Light exercise a few times a week
              </Text>
            </Button>
            <Button
              text60R
              white
              backgroundColor={activityLevel === 1.55 ? "red" : "pink"}
              marginT-20
              marginR-10
              onPress={() => setActivityLevel(1.55)}
            >
              <Text white text60R center>
                Moderate exercise 3-5 times a week
              </Text>
            </Button>
            <Button
              text60R
              white
              backgroundColor={activityLevel === 1.725 ? "red" : "pink"}
              marginT-20
              marginR-10
              onPress={() => setActivityLevel(1.725)}
            >
              <Text white text60R center>
                Heavy exercise 6-7 times a week
              </Text>
            </Button>
          </View>
        </>
      )}
      {activityLevel !== undefined && (
        <>
          <View marginB-10 style={{ alignItems: "center" }}>
            <Text text50BO>How tall are you?</Text>
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
                  onChange: setFeetHeight,
                  initialValue: 5,
                  items: Array(6)
                    .fill(null)
                    .map((_, i) => {
                      const value = i + 1;

                      return { label: `${value}`, value };
                    }),
                  label: "ft",
                },
                {
                  onChange: setInchesHeight,
                  initialValue: 0,
                  items: Array(12)
                    .fill(null)
                    .map((_, i) => {
                      const value = i;

                      return { label: `${value}`, value };
                    }),
                  label: "in",
                },
              ]}
            />
          </View>
        </>
      )}

      {height !== undefined && (
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
                  onChange: setWeight,
                  initialValue: 150,
                  items: weightItems,
                  label: "lbs",
                },
              ]}
            />
          </View>
        </>
      )}

      {weight !== undefined && (
        <>
          <View marginB-10 centerH>
            <Text text50BO>Is there anything else you'd like to share?</Text>
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
              placeholder="Anything you'd like to share"
              enableErrors
              showCharCounter
              text60R
              value={moreInfo}
              onChangeText={setMoreInfo}
            />
          </View>
          <View marginB-80>
            <Button
              text50R
              white
              backgroundColor="red"
              disabledBackgroundColor="pink"
              label="Continue"
              marginT-20
              disabled={isDisabled}
              onPress={onSubmit}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default ActivityLevelQuestion;
