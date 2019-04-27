import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class SettingsScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.getStartedText}> ---------- </Text>
          <Image
            source={{
              uri:
                "https://i.pinimg.com/474x/db/aa/aa/dbaaaa1f36d8f4d73b78d0f7783c4283--baseball-birthday-party-baseball-art.jpg"
            }}
            style={styles.welcomeImage}
          />
          <Text style={styles.getStartedText}> ---------- </Text>
        </View>
        <Text style={styles.getStartedText}>
          {" "}
          Go back and choose an answer before you swipe!{" "}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    justifyContent: "space-around"
  },
  welcomeImage: {
    width: 50,
    height: 50
  },
  getStartedContainer: {
    flex: 0.7
  },
  getStartedText: {
    fontSize: 20,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,

    fontFamily: "monospace"
  },

  lessonText: {
    color: "rgba(96,100,109, 1)",
    fontSize: 15,
    fontFamily: "monospace"
  }
});
