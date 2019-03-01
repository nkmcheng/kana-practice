import React from "react";
import {
  ScrollView,
  FlatList,
  Text,
  StyleSheet,
  View,
  Image
} from "react-native";

import Images from "../images";

class VocabularyList extends React.Component {
  static navigationOptions = {
    title: "Vocabularies"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image
                source={Images[item.name]}
                style={{ width: "100%", height: 200, resizeMode: "cover" }}
              />
              <Text style={styles.textImportant}>{item.romanji}</Text>
            </View>
          )}
        />
      </ScrollView>
    );
  }
}
export default VocabularyList;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#314659",
    paddingBottom: 10,
    paddingTop: 10
  },
  item: {
    padding: 10,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#314659"
  },
  description: {
    fontSize: 14
  },
  textImportant: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

const data = [
  { key: "1", name: "1", romanji: "ohayou" },
  { key: "2", name: "2", romanji: "sumimasen" },
  { key: "3", name: "3", romanji: "hai" },
  { key: "4", name: "4", romanji: "iie" },
  { key: "5", name: "5", romanji: "eki ha doko desuka?" },
  { key: "6", name: "6", romanji: "yoroshiku onegaishimasu" },
  { key: "7", name: "7", romanji: "kore wa ikura desuka?" },
  { key: "8", name: "8", romanji: "oyasuminasai" },
  { key: "9", name: "9", romanji: "nansai desuka?" },
  { key: "10", name: "10", romanji: "douzo" },
  { key: "11", name: "11", romanji: "wakarimashita" },
  { key: "12", name: "12", romanji: "wakarimasen" },
  { key: "13", name: "13", romanji: "eigo ga hanasemasuka?" },
  { key: "14", name: "14", romanji: "jya, mata" },
  { key: "15", name: "15", romanji: "doumo" },
  { key: "16", name: "16", romanji: "ogenki desuka?" },
  { key: "17", name: "17", romanji: "gomennasai" },
  { key: "18", name: "18", romanji: "konbanwa" },
  { key: "19", name: "19", romanji: "konnichiwa" },
  { key: "20", name: "20", romanji: "hajimemashite" },
  { key: "21", name: "21", romanji: "onamaewa?" },
  { key: "22", name: "22", romanji: "mizu, onegaishimasu" },
  { key: "23", name: "23", romanji: "tasukete kudasai" },
  { key: "24", name: "24", romanji: "arigatou" },
  { key: "25", name: "25", romanji: "sayounara" }
];
