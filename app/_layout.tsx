import { Slot } from "expo-router";
import { Text } from "react-native";
import { useState } from "react";
import { ThemeContext } from "@/state";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  const [state, setState] = useState({ goal: "", demographics: {} });
  const setGoal = (goal: string) => {
    setState({ ...state, goal });
  };
  const setDemographics = (demographics = {}) => {
    setState({ ...state, demographics });
  };
  return (
    <ThemeContext.Provider value={{ ...state, setGoal, setDemographics }}>
      <GestureHandlerRootView>
        <Slot />
      </GestureHandlerRootView>
    </ThemeContext.Provider>
  );
}
