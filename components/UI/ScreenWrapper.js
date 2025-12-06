import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";

export default function ScreenWrapper({ children }) {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.bg}
      imageStyle={styles.bgImage}
    >
      <View style={styles.content}>
        {children}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  bgImage: {
    resizeMode: "cover",
  },
  content: {
    flex: 1,
    width: "100%",
  },
});
