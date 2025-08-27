import { Slot } from "expo-router";
import { View, StyleSheet, Image } from "react-native";

const AuthLayout = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/expo_logo.png")}
        style={styles.logo}
      />
      <Slot />
    </View>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
