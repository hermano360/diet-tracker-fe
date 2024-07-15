import { Slot } from "expo-router";
import { UserStateProvider } from "@/state/StateContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <UserStateProvider>
      <GestureHandlerRootView>
        <Slot />
      </GestureHandlerRootView>
    </UserStateProvider>
  );
}
