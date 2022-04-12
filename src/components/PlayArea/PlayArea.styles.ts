import { StyleSheet } from "react-native";

const playAreaStyles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center"
  },
  singleRow: {
    flexDirection: "row",
  }, 
  cell: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "grey",
    width: 20,
    height: 20,
    margin: 2,
  }
});

export default playAreaStyles;