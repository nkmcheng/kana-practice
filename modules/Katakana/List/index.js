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

class KatakanaList extends React.Component {
  static navigationOptions = {
    title: "カタカナ"
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
                style={{ width: "100%", height: 220, resizeMode: "contain" }}
              />
              <Text style={styles.textImportant}>
                {item.kana} / {item.name}
              </Text>
            </View>
          )}
        />
      </ScrollView>
    );
  }
}
export default KatakanaList;

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
  { key: "a", name: "a", kana: "ア" },
  { key: "i", name: "i", kana: "イ" },
  { key: "u", name: "u", kana: "ウ" },
  { key: "e", name: "e", kana: "エ" },
  { key: "o", name: "o", kana: "オ" },
  { key: "ka", name: "ka", kana: "カ" },
  { key: "ki", name: "ki", kana: "キ" },
  { key: "ku", name: "ku", kana: "ク" },
  { key: "ke", name: "ke", kana: "ケ" },
  { key: "ko", name: "ko", kana: "コ" },
  { key: "ga", name: "ga", kana: "ガ" },
  { key: "gi", name: "gi", kana: "ギ" },
  { key: "gu", name: "gu", kana: "グ" },
  { key: "ge", name: "ge", kana: "ゲ" },
  { key: "go", name: "go", kana: "ゴ" },
  { key: "sa", name: "sa", kana: "サ" },
  { key: "shi", name: "shi", kana: "シ" },
  { key: "su", name: "su", kana: "ス" },
  { key: "se", name: "se", kana: "セ" },
  { key: "so", name: "so", kana: "ソ" },
  { key: "za", name: "za", kana: "ザ" },
  { key: "ji", name: "ji", kana: "ジ" },
  { key: "zu", name: "zu", kana: "ズ" },
  { key: "ze", name: "ze", kana: "ゼ" },
  { key: "zo", name: "zo", kana: "ゾ" },
  { key: "ta", name: "ta", kana: "タ" },
  { key: "chi", name: "chi", kana: "チ" },
  { key: "tsu", name: "tsu", kana: "ツ" },
  { key: "te", name: "te", kana: "テ" },
  { key: "to", name: "to", kana: "ト" },
  { key: "da", name: "da", kana: "ダ" },
  { key: "dji", name: "dji", kana: "ヂ" },
  { key: "dzu", name: "dzu", kana: "ヅ" },
  { key: "de", name: "de", kana: "デ" },
  { key: "do", name: "do", kana: "ド" },
  { key: "na", name: "na", kana: "ナ" },
  { key: "ni", name: "ni", kana: "ニ" },
  { key: "nu", name: "nu", kana: "ヌ" },
  { key: "ne", name: "ne", kana: "ネ" },
  { key: "no", name: "no", kana: "ノ" },
  { key: "ha", name: "ha", kana: "ハ" },
  { key: "hi", name: "hi", kana: "ヒ" },
  { key: "fu", name: "fu", kana: "フ" },
  { key: "he", name: "he", kana: "ヘ" },
  { key: "ho", name: "ho", kana: "ホ" },
  { key: "ba", name: "ba", kana: "バ" },
  { key: "bi", name: "bi", kana: "ビ" },
  { key: "bu", name: "bu", kana: "ブ" },
  { key: "be", name: "be", kana: "ベ" },
  { key: "bo", name: "bo", kana: "ボ" },
  { key: "pa", name: "pa", kana: "パ" },
  { key: "pi", name: "pi", kana: "ピ" },
  { key: "pu", name: "pu", kana: "プ" },
  { key: "pe", name: "pe", kana: "ペ" },
  { key: "po", name: "po", kana: "ポ" },
  { key: "ma", name: "ma", kana: "マ" },
  { key: "mi", name: "mi", kana: "ミ" },
  { key: "mu", name: "mu", kana: "ム" },
  { key: "me", name: "me", kana: "メ" },
  { key: "mo", name: "mo", kana: "モ" },
  { key: "ra", name: "ra", kana: "ラ" },
  { key: "ri", name: "ri", kana: "リ" },
  { key: "ru", name: "ru", kana: "ル" },
  { key: "re", name: "re", kana: "レ" },
  { key: "ro", name: "ro", kana: "ロ" },
  { key: "ya", name: "ya", kana: "ヤ" },
  { key: "yu", name: "yu", kana: "ユ" },
  { key: "yo", name: "yo", kana: "ヨ" },
  { key: "wa", name: "wa", kana: "ワ" },
  { key: "wo", name: "wo", kana: "ヲ" },
  { key: "n", name: "n", kana: "ン" }
];
