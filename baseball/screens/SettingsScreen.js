import React from "react";
import {
  Image,
  Button,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Permissions } from "expo";

export default class SettingsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: []
    };
  }

  render() {
    return (
      <View key="1" style={styles.container}>
        <Text>Lesson 1</Text>
        <Button onPress={() => this.props.choice1("a")} title="Choose A" />
        <Button onPress={() => this.props.choice1("b")} title="Choose B" />
      </View>
    );
  }

  _loadImageClick = async () => {
    try {
      // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status !== "granted") {
        throw new Error("Camera permission not granted");
      }
    } catch (err) {
      console.log("error in camera permissions", err);
    }
  };
}

const styles = StyleSheet.create({
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
  },
  playerImage: {
    width: 200,
    height: 160,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  }
});
