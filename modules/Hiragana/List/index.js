import React from "react";
import { ScrollView, FlatList, Text, StyleSheet } from "react-native";

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
            <Text
              style={styles.item}
              onPress={() =>
                navigate("HiraganaDetails", {
                  name: item.name,
                  kana: item.kana
                })
              }
            >
              {item.kana} / {item.name}
            </Text>
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
  item: {
    padding: 10,
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#314659"
  }
});

const data = [
  { key: "1", name: "a", kana: "あ" },
  { key: "2", name: "i", kana: "い" },
  { key: "3", name: "u", kana: "う" },
  { key: "4", name: "e", kana: "え" },
  { key: "5", name: "o", kana: "お" },
  { key: "6", name: "ka", kana: "か" },
  { key: "7", name: "ki", kana: "き" },
  { key: "8", name: "ku", kana: "く" },
  { key: "9", name: "ke", kana: "け" },
  { key: "10", name: "ko", kana: "こ" },
  { key: "11", name: "sa", kana: "さ" },
  { key: "12", name: "shi", kana: "し" },
  { key: "13", name: "su", kana: "す" },
  { key: "14", name: "se", kana: "せ" },
  { key: "15", name: "so", kana: "そ" },
  { key: "16", name: "ta", kana: "た" },
  { key: "17", name: "chi", kana: "ち" },
  { key: "18", name: "tsu", kana: "つ" },
  { key: "19", name: "te", kana: "て" },
  { key: "20", name: "to", kana: "と" },
  { key: "21", name: "na", kana: "な" },
  { key: "22", name: "ni", kana: "に" },
  { key: "23", name: "nu", kana: "ぬ" },
  { key: "24", name: "ne", kana: "ね" },
  { key: "25", name: "no", kana: "の" },
  { key: "26", name: "ha", kana: "は" },
  { key: "27", name: "hi", kana: "ひ" },
  { key: "28", name: "fu", kana: "ふ" },
  { key: "29", name: "he", kana: "へ" },
  { key: "30", name: "ho", kana: "ほ" }
];
