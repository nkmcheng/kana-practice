import React from "react";
import { ScrollView, FlatList, Text, StyleSheet } from "react-native";

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
            <Text
              style={styles.item}
              onPress={() =>
                navigate("KatakanaDetails", {
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
export default KatakanaList;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#314659"
  }
});

const data = [
  { key: "1", name: "a", kana: "ア" },
  { key: "2", name: "i", kana: "イ" },
  { key: "3", name: "u", kana: "ウ" },
  { key: "4", name: "e", kana: "エ" },
  { key: "5", name: "o", kana: "オ" },
  { key: "6", name: "ka", kana: "カ" },
  { key: "7", name: "ki", kana: "キ" },
  { key: "8", name: "ku", kana: "ク" },
  { key: "9", name: "ke", kana: "ケ" },
  { key: "10", name: "ko", kana: "コ" },
  { key: "11", name: "sa", kana: "サ" },
  { key: "12", name: "shi", kana: "シ" },
  { key: "13", name: "su", kana: "ス" },
  { key: "14", name: "se", kana: "セ" },
  { key: "15", name: "so", kana: "ソ" },
  { key: "16", name: "ta", kana: "タ" },
  { key: "17", name: "chi", kana: "チ" },
  { key: "18", name: "tsu", kana: "ツ" },
  { key: "19", name: "te", kana: "テ" },
  { key: "20", name: "to", kana: "ト" },
  { key: "21", name: "na", kana: "ナ" },
  { key: "22", name: "ni", kana: "ニ" },
  { key: "23", name: "nu", kana: "ヌ" },
  { key: "24", name: "ne", kana: "ネ" },
  { key: "25", name: "no", kana: "ノ" },
  { key: "26", name: "ha", kana: "ハ" },
  { key: "27", name: "hi", kana: "ヒ" },
  { key: "28", name: "fu", kana: "フ" },
  { key: "29", name: "he", kana: "ヘ" },
  { key: "30", name: "ho", kana: "ホ" }
];
