import React from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },
  hiraganaContainer: {
    flex: 1,
    backgroundColor: "powderblue",
    justifyContent: "center",
    alignItems: "center"
  },
  katakanaContainer: {
    flex: 1,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center"
  },
  vocabularyContainer: {
    flex: 1,
    backgroundColor: "steelblue",
    justifyContent: "center",
    alignItems: "center"
  },
  itemText: {
    fontWeight: "bold",
    fontSize: 40
  }
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome to Learning Kana"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.hiraganaContainer}
          onPress={() => navigate("HiraganaList")}
        >
          <Text style={styles.itemText}>Hiragana / ひらがな</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.katakanaContainer}
          onPress={() => navigate("KatakanaList")}
        >
          <Text style={styles.itemText}>Katakana / カタカナ</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.vocabularyContainer}
          onPress={() => navigate("KatakanaList")}
        >
          <Text style={styles.itemText}>Vocabulary</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
export default HomeScreen;
