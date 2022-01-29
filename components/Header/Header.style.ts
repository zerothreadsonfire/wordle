import { StyleSheet } from "react-native";

const headerStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 50,
    justifyContent: "space-around",
  },
  logo: {
    height: 20,
    width: 20
  }
})

export default headerStyle;