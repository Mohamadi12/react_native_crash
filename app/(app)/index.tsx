import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 20 }}>
      <Text>Home Page</Text>
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/products">Products</Link>
      <Link href="/login">Login</Link>

      <Link href="/products/best-sellers/playstation" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Playstation</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0ea5e9",
    padding: 12,
    borderRadius: 6
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5
  }
});
