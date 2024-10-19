import { Text, View, Button } from "react-native";
import { TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NavBar = () => {
  return (
    <SafeAreaView>
      <View style={styles.navContainer}>
        <View style={styles.navWrapper}>
          <Text style={styles.titleDiscussr}>DISCUSSR 💬</Text>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  },
  navWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    width: "auto",
  },
  titleDiscussr: {
    fontSize: 20,
    fontWeight: "900",
    color: "white",
  },
  loginBtn: {
    backgroundColor: "transparent",
  },
  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "900",
  },
});

export default NavBar;
