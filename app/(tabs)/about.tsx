import { StyleSheet, Text, View } from "react-native";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292E",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#FFF",
  },
});
export default AboutScreen;
