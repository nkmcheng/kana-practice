import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./modules/HomeScreen";
import ProfileScreen from "./modules/ProfileScreen";

import HiraganaList from "./modules/Hiragana/List";
import HiraganaDetails from "./modules/Hiragana/Details";
import KatakanaList from "./modules/Katakana/List";
import KatakanaDetails from "./modules/Katakana/Details";

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  HiraganaList: { screen: HiraganaList },
  HiraganaDetails: { screen: HiraganaDetails },
  KatakanaList: { screen: KatakanaList },
  KatakanaDetails: { screen: KatakanaDetails }
});

const App = createAppContainer(MainNavigator);

export default App;
