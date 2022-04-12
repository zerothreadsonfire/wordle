import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
  },
  rightIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    height: 20,
    width: 20
  },
  logo: {
    fontSize: 28,
    letterSpacing: 0.01,
  }
})

export default headerStyles;