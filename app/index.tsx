import { Pressable, SafeAreaView } from "react-native";
import { Link, useRouter } from "expo-router";
import ImageViewer from "@/components/ImageViewer";
import { LinearGradient } from "expo-linear-gradient";

import { View, TextField, Text, Button } from "react-native-ui-lib";

const LoginPage = () => {
  const router = useRouter();
  const handleLogin = () => {
    // add login logic here
    router.replace("/home");
  };

  const imageSource = require("../assets/images/plate-food.jpg");

  return (
    <SafeAreaView style={{ flex: 1, height: "100%" }}>
      <ImageViewer
        placeholderImageSource={imageSource}
        selectedImage={imageSource.uri}
      />

      <View flex paddingT-120 paddingB-40>
        <View
          center
          paddingH-40
          flex
          style={{
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <View center>
            <Text white text10BO>
              Welcome
            </Text>
          </View>

          <View>
            <View center marginB-50>
              <Text white text30BO>
                Using AI to Power Your Nutritionist Needs
              </Text>
            </View>
            <View>
              <Link href="/goals" asChild>
                <Button text60R white background-red20 label="Start Tracking" />
              </Link>
              <Link href="/register" asChild>
                <Button
                  text60R
                  red20
                  backgroundColor="white"
                  label="Sign Up"
                  marginT-20
                />
              </Link>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
