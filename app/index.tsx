import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: estilo.container.backgroundColor,
      }}
    >
      <Text style={estilo.container}>Olá Mundo!!</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
  },
  text: {
    color: "#FFFFFF",
  },
});
