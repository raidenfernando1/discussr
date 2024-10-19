import { Text, View, TextInput, TouchableOpacity, Button } from "react-native";
import { StyleSheet } from "react-native";
import { ButtonHelper } from "./constants/buttons";
import { textSizes } from "./constants/fonts";
import { PopupProvider } from "./context/popupContext";
import { useDataContext } from "./context/popupContext";
import React, { Fragment, useState } from "react";

const LandingPageContainer = () => {
  return (
    <PopupProvider>
      <LandingPage />
    </PopupProvider>
  );
};

{
  /* Google Login integration is ready, place here or make a helper script to call for better readability */
}

const LandingPage = () => {
  const { isPopup, togglePopup } = useDataContext();

  return (
    <Fragment>
      <View style={styles.homeLayout}>
        <Text style={styles.mediumText}>
          Start your blog: Spill the Tea and Discover New Things! 👀
        </Text>
        <ButtonHelper text="Start now?" onPress={togglePopup} />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    gap: 10,
  },
  mediumText: {
    color: "white",
    fontSize: 30,
    textAlign: "left",
  },
});

export default LandingPageContainer;
