import { View, Text, SectionsWheelPicker } from "react-native-ui-lib";
import { useMemo } from "react";

type AgeQuestionProps = {
  onChange: (age: number) => void;
};

const AgeQuestion = ({ onChange }: AgeQuestionProps) => {
  {
    /* TODO - Put this in a util to avoid clutter */
  }
  const ageOptions = useMemo(() => {
    return Array(100)
      .fill(null)
      .map((_, i) => {
        const value = i + 1;

        return { label: value.toString(), value };
      });
  }, []);

  return (
    <View centerH marginB-30>
      {/* TODO - Some way to standardize question label */}
      <View marginB-20 centerH>
        <Text text50BO>How old are you?</Text>
      </View>
      {/* TODO - Component for Slider */}
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
              onChange,
              initialValue: 18,
              items: ageOptions,
            },
          ]}
        />
      </View>
    </View>
  );
};

export default AgeQuestion;
