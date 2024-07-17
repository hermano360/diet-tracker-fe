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

const DemographicsPage = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState<number | undefined>();
  const [weight, setWeight] = useState<number | undefined>();
  const [inchesHeight, setInchesHeight] = useState<number>(0);
  const [feetHeight, setFeetHeight] = useState<number | undefined>();
  const [activityLevel, setActivityLevel] = useState<number | undefined>();
  const [moreInfo, setMoreInfo] = useState<string | undefined>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const isDisabled = !gender;

  const dispatch = useUserStateDispatch();

  const height =
    feetHeight === undefined
      ? undefined
      : (feetHeight || 0) * 12 + inchesHeight;

  const onSubmit = async () => {
    if (!dispatch) return;

    if (!weight || !height || !age || !activityLevel) {
      return;
    }
    setIsLoading(true);

    dispatch({ type: "gender", gender });
    dispatch({ type: "age", age });
    dispatch({ type: "weight", weight });
    dispatch({ type: "height", height });
    dispatch({ type: "activityLevel", activityLevel });
    dispatch({ type: "moreInfo", moreInfo });

    const targetCalories = generateTargetCalories(
      weight,
      height,
      age,
      activityLevel
    );

    const { fat, protein, carbs } =
      generateTargetMacronutrients(targetCalories);

    dispatch({
      type: "setMacros",
      calories: targetCalories,
      fat: Math.floor(fat),
      protein: Math.floor(protein),
      carbs: Math.floor(carbs),
    });

    setIsLoading(false);

    router.push("/macros");
  };

  const weightItems = useMemo(() => {
    return Array(201)
      .fill(null)
      .map((_, i) => {
        const value = 300 - i;

        return { label: value.toString(), value };
      });
  }, []);

  const ageItems = useMemo(() => {
    return Array(100)
      .fill(null)
      .map((_, i) => {
        const value = i + 1;

        return { label: value.toString(), value };
      });
  }, []);

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
              alignItems: "flex-start",
            }}
          >
            <Text text30BO>Tell us about yourself</Text>
          </View>
        }
        ListFooterComponent={
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
        }
      />
    </OnboardingTabs>
  );
};

export default DemographicsPage;
