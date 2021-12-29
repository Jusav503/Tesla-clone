import React from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/images/logo.png")}/>
      <Image style={styles.menu} source={require("../../assets/images/menu.png")}/>
    </SafeAreaView>
  );
};

export default Header;
