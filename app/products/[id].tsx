import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const ProductDetail = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>Details about product with id</Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
