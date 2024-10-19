import { TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "react-native";
import React from "react";

type ButtonHelperTypes = {
  text: string;
  onPress: () => void;
};

export const ButtonHelper = ({ text, onPress }: ButtonHelperTypes) => {
  return (
    <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: "white",
    alignSelf: "flex-start",
    backgroundColor: "transparent",
  },
  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "900",
  },
});
