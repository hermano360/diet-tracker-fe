import { View, Pressable, Text, SafeAreaView } from "react-native";
import { Link, useRouter } from "expo-router";
import ImageViewer from "@/components/ImageViewer";
import { LinearGradient } from "expo-linear-gradient";
import Button from "@/components/Button";
import {
  View as RNView,
  TextField,
  Text as RNText,
  Button as RNButton,
} from "react-native-ui-lib";

const LoginPage = () => {
  const router = useRouter();
  const handleLogin = () => {
    // add login logic here
    router.replace("/home");
  };

  const imageSource = require("../assets/images/plate-food.jpg");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SafeAreaView>
        <ImageViewer
          placeholderImageSource={imageSource}
          selectedImage={imageSource.uri}
          style={{ position: "absolute" }}
        />
        <LinearGradient
          colors={["#A2A5B1", "transparent"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: 200,
          }}
        />
        <LinearGradient
          colors={["transparent", "#A2A5B1"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 200,
          }}
        />

        <RNView
          flex
          paddingT-120
          paddingB-40
          style={{
            backgroundColor: "rgba(50,50,50,0.4)",
          }}
        >
          <RNView
            center
            paddingH-40
            flex
            style={{
              justifyContent: "space-between",
            }}
          >
            <RNView center>
              <RNText white text10BO>
                Welcome
              </RNText>
            </RNView>

            <RNView>
              <RNView center marginB-30>
                <RNText white text30BO>
                  Using AI to Power Your Nutritionist Needs
                </RNText>
              </RNView>
              <RNView>
                <Link href="/goals" asChild>
                  <RNButton
                    text50R
                    white
                    background-orange30
                    label="Start Tracking"
                  />
                </Link>
                <Link href="/register" asChild>
                  <RNButton
                    text50R
                    orange30
                    background-white
                    label="Sign Up"
                    marginT-20
                  />
                </Link>
              </RNView>
            </RNView>
          </RNView>
        </RNView>
      </SafeAreaView>
    </View>
  );
};

export default LoginPage;
