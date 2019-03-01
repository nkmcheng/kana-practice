import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Images from "../images";

class KatakanaDetails extends React.Component {
  static navigationOptions = {
    title: "カタカナ"
  };
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam("name");
    const kana = navigation.getParam("kana");

    return (
      <View style={styles.container}>
        <Text style={styles.description}>Katakana</Text>
        <Text style={styles.textImportant}>
          {kana} / {name}
        </Text>
        <Image
          source={Images[name]}
          style={{ width: "100%", height: 220, resizeMode: "contain" }}
        />
      </View>
    );
  }
}
export default KatakanaDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -100,
    justifyContent: "center",
    alignItems: "center"
  },
  description: {
    fontSize: 14
  },
  textImportant: {
    fontSize: 30,
    fontWeight: "bold"
  }
});
