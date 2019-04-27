import React from "react";
import { View, StyleSheet, WebView, Text } from "react-native";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Help"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>For extra help you can read more from 5 Minute English! </Text>
        <WebView
          source={{ uri: "http://www.5minuteenglish.com/apr28.htm" }}
          style={{ marginTop: 20 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
