import { View, Text, Button } from "react-native-ui-lib";

import { GENDER } from "@/state/types";

type GenderQuestionProps = {
  gender?: GENDER;
  onPress: (gender: GENDER) => void;
};

const GenderQuestion = ({ gender, onPress }: GenderQuestionProps) => {
  return (
    <View centerH marginB-30>
      <View marginB-10 center>
        <Text text50BO>What is your gender?</Text>
      </View>

      <View row>
        <Button
          text60R
          white
          backgroundColor={gender === GENDER.MALE ? "red" : "pink"}
          label={GENDER.MALE}
          marginT-20
          marginR-10
          onPress={() => onPress(GENDER.MALE)}
        />
        <Button
          text60R
          white
          backgroundColor={gender === GENDER.FEMALE ? "red" : "pink"}
          label={GENDER.FEMALE}
          marginT-20
          marginR-10
          onPress={() => onPress(GENDER.FEMALE)}
        />
        <Button
          text60R
          white
          backgroundColor={gender === GENDER.OTHER ? "red" : "pink"}
          label={GENDER.OTHER}
          marginT-20
          onPress={() => onPress(GENDER.OTHER)}
        />
      </View>
    </View>
  );
};

export default GenderQuestion;
