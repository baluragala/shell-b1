import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    flexDirection: "row",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "gray",
    marginBottom: 10,
    height: 200
  },
  thumbnail: { width: 100, height: 150, alignSelf: "center", flex: 3 },
  detail: { flex: 6, margin: 10 },
  title: { fontSize: 20, fontWeight: "bold", lineHeight: 25 },
  category: {
    lineHeight: 40,
    fontSize: 24,
    fontStyle: "italic",
    fontWeight: "800",
    fontFamily: "Roboto"
  }
});

export default styles;
