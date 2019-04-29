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

export default class P5A extends React.Component {
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
      <View>
        <Image
          source={{
            uri:
              "https://i.pinimg.com/474x/db/aa/aa/dbaaaa1f36d8f4d73b78d0f7783c4283--baseball-birthday-party-baseball-art.jpg"
          }}
          style={styles.welcomeImage}
        />
        <Image
          source={{
            uri: "https://media3.giphy.com/media/QRyFU7MkWAZ6o/giphy.gif"
          }}
          style={styles.photo}
        />

        <Text>Yes! They jump far and catch the ball!!!</Text>
        <Text style={styles.getStartedText}> ---------- </Text>
        <Text style={styles.lessonText}>Swipe to see what happens!</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  photo: {
    width: 450,
    height: 350
  },

  photosContainer: {
    paddingTop: 60,
    alignItems: "center"
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: "center",
    backgroundColor: "#4842f4"
  },
  buttonText: {
    padding: 20,
    color: "green"
  }
});
