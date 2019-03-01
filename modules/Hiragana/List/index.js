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

class HiraganaList extends React.Component {
  static navigationOptions = {
    title: "ひらがな"
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
export default HiraganaList;

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
  { key: "a", name: "a", kana: "あ" },
  { key: "i", name: "i", kana: "い" },
  { key: "u", name: "u", kana: "う" },
  { key: "e", name: "e", kana: "え" },
  { key: "o", name: "o", kana: "お" },
  { key: "ka", name: "ka", kana: "か" },
  { key: "ki", name: "ki", kana: "き" },
  { key: "ku", name: "ku", kana: "く" },
  { key: "ke", name: "ke", kana: "け" },
  { key: "ko", name: "ko", kana: "こ" },
  { key: "ga", name: "ga", kana: "が" },
  { key: "gi", name: "gi", kana: "ぎ" },
  { key: "gu", name: "gu", kana: "ぐ" },
  { key: "ge", name: "ge", kana: "げ" },
  { key: "go", name: "go", kana: "ご" },
  { key: "sa", name: "sa", kana: "さ" },
  { key: "shi", name: "shi", kana: "し" },
  { key: "su", name: "su", kana: "す" },
  { key: "se", name: "se", kana: "せ" },
  { key: "so", name: "so", kana: "そ" },
  { key: "za", name: "za", kana: "ざ" },
  { key: "ji", name: "ji", kana: "じ" },
  { key: "zu", name: "zu", kana: "ず" },
  { key: "ze", name: "ze", kana: "ぜ" },
  { key: "zo", name: "zo", kana: "ぞ" },
  { key: "ta", name: "ta", kana: "た" },
  { key: "chi", name: "chi", kana: "ち" },
  { key: "tsu", name: "tsu", kana: "つ" },
  { key: "te", name: "te", kana: "て" },
  { key: "to", name: "to", kana: "と" },
  { key: "da", name: "da", kana: "だ" },
  { key: "dji", name: "dji", kana: "ぢ" },
  { key: "dzu", name: "dzu", kana: "づ" },
  { key: "de", name: "de", kana: "で" },
  { key: "do", name: "do", kana: "ど" },
  { key: "na", name: "na", kana: "な" },
  { key: "ni", name: "ni", kana: "に" },
  { key: "nu", name: "nu", kana: "ぬ" },
  { key: "ne", name: "ne", kana: "ね" },
  { key: "no", name: "no", kana: "の" },
  { key: "ha", name: "ha", kana: "は" },
  { key: "hi", name: "hi", kana: "ひ" },
  { key: "fu", name: "fu", kana: "ふ" },
  { key: "he", name: "he", kana: "へ" },
  { key: "ho", name: "ho", kana: "ほ" },
  { key: "ba", name: "ba", kana: "ば" },
  { key: "bi", name: "bi", kana: "び" },
  { key: "bu", name: "bu", kana: "ぶ" },
  { key: "be", name: "be", kana: "べ" },
  { key: "bo", name: "bo", kana: "ぼ" },
  { key: "pa", name: "pa", kana: "ぱ" },
  { key: "pi", name: "pi", kana: "ぴ" },
  { key: "pu", name: "pu", kana: "ぷ" },
  { key: "pe", name: "pe", kana: "ぺ" },
  { key: "po", name: "po", kana: "ぽ" },
  { key: "ma", name: "ma", kana: "ま" },
  { key: "mi", name: "mi", kana: "み" },
  { key: "mu", name: "mu", kana: "む" },
  { key: "me", name: "me", kana: "め" },
  { key: "mo", name: "mo", kana: "も" },
  { key: "ra", name: "ra", kana: "ら" },
  { key: "ri", name: "ri", kana: "り" },
  { key: "ru", name: "ru", kana: "る" },
  { key: "re", name: "re", kana: "れ" },
  { key: "ro", name: "ro", kana: "ろ" },
  { key: "ya", name: "ya", kana: "や" },
  { key: "yu", name: "yu", kana: "ゆ" },
  { key: "yo", name: "yo", kana: "よ" },
  { key: "wa", name: "wa", kana: "わ" },
  { key: "wo", name: "wo", kana: "を" },
  { key: "n", name: "n", kana: "ん" }
];
