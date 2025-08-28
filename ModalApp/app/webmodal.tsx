import { Pressable, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import Animated, { FadeIn, SlideInDown } from "react-native-reanimated";

const Modal = () => {
  return (
    <Animated.View
      entering={FadeIn}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link dismissTo href={"/"} asChild>
        <Pressable style={StyleSheet.absoluteFill} />
      </Link>
      <Animated.View
        entering={SlideInDown}
        style={{
          width: 300,
          height: 300,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
          Modal Screen
        </Text>
        <Link dismissTo href="/">
          <Text>🔙 Go Back</Text>
        </Link>
      </Animated.View>
    </Animated.View>
  );
};

export default Modal;
