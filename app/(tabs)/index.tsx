import ImageViewer from "@/components/ImageViewer";

import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={require("@/assets/images/background-image.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: { flex: 1 },
});
