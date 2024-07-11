import {
  StyleSheet,
  Image,
  ImageSourcePropType,
  ImageRequireSource,
  ImageURISource,
  ImageStyle,
} from "react-native";

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

  return <Image source={imageSource} style={[styles.image, style]} />;
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "#979A9F",
  },
});
