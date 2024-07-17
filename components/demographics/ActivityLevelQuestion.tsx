import { View, Text, Button, ButtonSize } from "react-native-ui-lib";
import { ACTIVITY_LEVEL, ACTIVITY_LEVEL_SCORE } from "@/state/types";

type ActivityLevelQuestionProps = {
  activityLevel?: ACTIVITY_LEVEL_SCORE;
  onPress: (activityLevel: ACTIVITY_LEVEL_SCORE) => void;
};

const ActivityLevelQuestion = ({
  activityLevel,
  onPress,
}: ActivityLevelQuestionProps) => {
  return (
    <View centerH marginB-30>
      <View marginB-10 center>
        <Text text50BO>How active are you?</Text>
      </View>

      <View>
        <Button
          text60R
          white
          backgroundColor={
            activityLevel === ACTIVITY_LEVEL_SCORE.MINIMAL ? "red" : "pink"
          }
          marginT-20
          marginR-10
          onPress={() => onPress(ACTIVITY_LEVEL_SCORE.MINIMAL)}
        >
          <Text white text60R center>
            {ACTIVITY_LEVEL.MINIMAL}
          </Text>
        </Button>
        <Button
          text60R
          white
          backgroundColor={
            activityLevel === ACTIVITY_LEVEL_SCORE.LIGHT ? "red" : "pink"
          }
          marginT-20
          marginR-10
          onPress={() => onPress(ACTIVITY_LEVEL_SCORE.LIGHT)}
        >
          <Text white text60R center>
            {ACTIVITY_LEVEL.LIGHT}
          </Text>
        </Button>
        <Button
          text60R
          white
          backgroundColor={
            activityLevel === ACTIVITY_LEVEL_SCORE.MODERATE ? "red" : "pink"
          }
          marginT-20
          marginR-10
          onPress={() => onPress(ACTIVITY_LEVEL_SCORE.MODERATE)}
        >
          <Text white text60R center>
            {ACTIVITY_LEVEL.MODERATE}
          </Text>
        </Button>
        <Button
          text60R
          white
          backgroundColor={
            activityLevel === ACTIVITY_LEVEL_SCORE.HEAVY ? "red" : "pink"
          }
          marginT-20
          marginR-10
          onPress={() => onPress(ACTIVITY_LEVEL_SCORE.HEAVY)}
        >
          <Text white text60R center>
            {ACTIVITY_LEVEL.HEAVY}
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default ActivityLevelQuestion;
