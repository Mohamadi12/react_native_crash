import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const CatchAllProductDetails = () => {
  const { rest } = useLocalSearchParams<{ rest: string[] }>();

  return (
    <View style={styles.container}>
      <Text>Catch all product details</Text>
      <Text>Details about product at {rest.join("/")}</Text>
    </View>
  );
};

export default CatchAllProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
