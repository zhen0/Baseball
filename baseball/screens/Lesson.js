import React from "react";
import {
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  CameraRoll,
  View
} from "react-native";
import { WebBrowser } from "expo";
import { MonoText } from "../components/StyledText";
import { Permissions } from "expo";
import axios from "axios";

const ImageB = {
  uri:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQCeddahLSs57x2X_nfO4DrlBT8eGPV9iENxyKuGZSJkvj4-W"
};

// import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView style={StyleSheet.container}>
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
        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>Hello {this.props.name}!</Text>

          <Text style={styles.getStartedText}>
            What is the difference between “very” and “too”?
          </Text>

          <Text style={styles.lessonText}>
            Students often confuse these two adverbs. Both come before
            adjectives or adverbs. Both make those words stronger. However,
            “very” does not have a negative meaning, while “too” does.
          </Text>

          <Text style={styles.lessonText}>The test was “very” difficult.</Text>
          <Text style={styles.lessonText}>The test was “too” difficult.</Text>
          <Text style={styles.lessonText}>
            If you say a test was “very” difficult, it challenged you, but you
            could still do it. In contrast, if you say a test was “too”
            difficult, you’re worried that you failed.
          </Text>

          <Text style={styles.lessonText}>The bag was “very” expensive.</Text>
          <Text style={styles.lessonText}>The bag was “too” expensive.</Text>
          <Text style={styles.lessonText}>
            Something that is “very” expensive can still be bought if you save
            up for it. However, an item that is “too” expensive must be left in
            the store.
          </Text>

          <Text style={styles.lessonText}>
            I hope this explanation was “very” helpful and not “too” confusing!
          </Text>
          <View>
            <Text style={styles.getStartedText}> ---------- </Text>
            <Text style={styles.getStartedText}>
              Keep Swiping to work through the story. Then take the quiz to show
              your understanding.
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
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
