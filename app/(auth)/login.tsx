import { Link, router } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Link href="./register">Create account</Link>
      <Button title="Login" onPress={() => router.replace("/profile")} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
