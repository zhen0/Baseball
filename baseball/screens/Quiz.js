import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

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
      <View style={styles.container}>
        <Text style={styles.getStartedText}> Test Your Understanding! </Text>
        <Text>
          When we use 'too' do we usually mean something positive or negative?
        </Text>
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Your Answer"
            onChangeText={answer1 => this.setState({ answer1 })}
          />
          <Text>
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
      </View>
    );
  }
  _checkAnswer() {
    let points = 0
let answer1 = this.state.answer1.toLowerCase()
let answer2 = this.state.answer2.toLowerCase()
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
  }
});
