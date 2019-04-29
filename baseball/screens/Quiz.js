import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Image
} from "react-native";

export default class SettingsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      answer1: "",
      answer2: ""
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
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

        <Text style={styles.getStartedText}> Test Your Understanding! </Text>
        <Text style={styles.getStartedText}> ---------- </Text>
        <Text style={styles.lessonText}>
          When we use 'too' do we usually mean something positive or negative?
        </Text>
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Your Answer"
            onChangeText={answer1 => this.setState({ answer1 })}
          />
          <Text style={styles.lessonText}>
            "I had a great party and ___ many people came!" Which word would be
            better? too or very?{" "}
          </Text>
          <View style={{ padding: 10 }}>
            <TextInput
              style={{ height: 40 }}
              placeholder="Your answer"
              onChangeText={answer2 => this.setState({ answer2 })}
            />
          </View>
        </View>
        <Button
          onPress={() => this._checkAnswer()}
          title="Submit My Answers!"
        />
      </ScrollView>
    );
  }
  _checkAnswer() {
    let points = 0;
    let answer1 = this.state.answer1.toLowerCase();
    let answer2 = this.state.answer2.toLowerCase();
    if (answer2 === "very") {
      points++;
    }
    if (answer1 === "negative") {
      points++;
    }

    this.props.submit(points);
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
    flex: 1,
    flexDirection: "column",
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
    alignItems: "center",
    marginHorizontal: 50
  },
  lessonText: {
    color: "rgba(96,100,109, 1)",
    fontSize: 15,
    fontFamily: "monospace"
  }
});
