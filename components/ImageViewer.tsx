import { StyleSheet, Image, ImageURISource, ImageStyle } from "react-native";
import { View } from "react-native-ui-lib";

interface ImageViewerProps {
  selectedImage: string;
  placeholderImageSource: ImageURISource;
  style?: ImageStyle;
}

export default function ImageViewer({
  placeholderImageSource,
  selectedImage,
  style,
}: ImageViewerProps) {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  return (
    <View
      style={{
        flex: 1,
        position: "absolute",
        top: -20,
        left: 0,
        width: "100%",
        height: "120%",
      }}
    >
      <Image source={imageSource} style={[styles.image]} />
      <View
        flex
        paddingT-120
        paddingB-40
        style={{
          backgroundColor: "rgba(50,50,50,0.6)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          minHeight: "100%",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "#979A9F",
    position: "absolute",
    bottom: 0,
  },
});
