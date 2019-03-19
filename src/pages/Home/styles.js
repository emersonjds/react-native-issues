import { StyleSheet } from "react-native";
import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lighter,
    flex: 1
  },
  empty: {
    color: colors.dark,
    marginTop: metrics.baseMargin * 2,
    textAlign: "center"
  },
  error: {
    color: colors.danger,
    fontSize: 12,
    fontWeight: "bold",
    marginTop: metrics.basePadding,
    textAlign: "center"
  },
  form: {
    color: colors.dark
  },
  formInput: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    color: colors.darker,
    flex: 1,
    fontSize: 14,
    marginRight: metrics.baseMargin,
    padding: metrics.basePadding / 2
  },
  inputContainer: {
    padding: metrics.basePadding
  },
  placeholderColor: {
    color: colors.regular
  }
});

export default styles;
