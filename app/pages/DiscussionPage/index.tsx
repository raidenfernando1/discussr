import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

const HomePage = () => {
  return (
    <View>
      <Text style={styles.textTest}>Blogpage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTest: {
    color: "red",
  },
});

export default HomePage;
