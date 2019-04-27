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

export default class P3 extends React.Component {
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
            uri:
              "https://usatthebiglead.files.wordpress.com/2013/07/carlos-beltran-swings-at-bounce-1.gif?w=1000"
          }}
          style={styles.photo}
        />

        <Text>
          Oh no! They swing too fast and miss the ball. They score no points.
          They are not happy!
        </Text>
        <Text>
          Next it is their turn to field. The ball is flying through the sky.
          They jump to catch the ball.
        </Text>
        <Text>Do they jump very far? </Text>
        <View>
          <Button
            onPress={() => this.props.choice2("a")}
            title="They jump very far!"
          />
        </View>
        <Text>Or do they jump too far?</Text>
        <Button
          onPress={() => this.props.choice2("b")}
          title="They jump too far!"
        />
        <Text>Swipe to see what happens!</Text>
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
