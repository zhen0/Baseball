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
    this.state = {
      player: ".......",
      photos: [],
      chosenPhoto: ImageB,
      address: "waiting"
    };
  }
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView styles={styles.container}>
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
        <Image
          source={{
            uri: "https://media.giphy.com/media/3ohhwAIFJtEnAIYaju/giphy.gif"
          }}
          style={styles.photo}
        />

        <Text style={styles.lessonText}>
          Yes! The bat swings very fast. The ball goes far and they score
          points. The team are very happy!!{" "}
        </Text>

        <Text style={styles.lessonText}>
          Next it is their turn to field. The ball is flying through the sky.
          They jump to catch the ball.
        </Text>
        <Text style={styles.lessonText}>Do they jump very far? </Text>
        <View>
          <Button
            onPress={() => this.props.choice2("a")}
            title="They jump very far!"
          />
        </View>
        <Text style={styles.lessonText}>Or do they jump too far?</Text>
        <Button
          onPress={() => this.props.choice2("b")}
          title="They jump too far!"
        />
        <Text style={styles.getStartedText}> ---------- </Text>
        <Text style={styles.lessonText}>Swipe to see what happens!</Text>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  photo: {
    width: 1,
    height: 0.5
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
  lessonText: {
    color: "rgba(96,100,109, 1)",
    fontSize: 15,
    fontFamily: "monospace"
  },
  getStartedText: {
    fontSize: 20,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,

    fontFamily: "monospace"
  }
});
