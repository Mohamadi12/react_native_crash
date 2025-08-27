import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

const CustomNotFound = () => {
  return (
    <View style={styles.container}>
      <Text>CustomNotFound</Text>
      <Link href="/">Go to Home</Link>
    </View>
  );
};

export default CustomNotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
