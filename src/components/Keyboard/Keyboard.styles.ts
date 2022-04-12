import { StyleSheet } from "react-native";

const keyboardStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
    flexWrap: "wrap",
  },
  key: {
    width: 40,
    height: 20,
    margin: 2,
  }
});

export default keyboardStyles;