import { Slot, Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import NavBar from "./components/NavBar";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { Fragment } from "react";

const Layout = () => {
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#141414" }}>
        <View style={styles.appWrapper}>
          <NavBar />
          <Slot />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    backgroundColor: "rgb(20, 20, 20)",
    paddingHorizontal: 50,
  },
});

export default Layout;
