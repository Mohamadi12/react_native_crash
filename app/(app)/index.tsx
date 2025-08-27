import { Link } from "expo-router";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View style={{ flex: 1,gap:20, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Page</Text>
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/products">Products</Link>
      <Link href="/missing-route">Missing Route</Link>
    </View>
  );
};

export default Home;
