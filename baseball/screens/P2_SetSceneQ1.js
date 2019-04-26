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
      <View style={styles.container}>
        <Image
          source={{
            uri:
              "https://i.pinimg.com/474x/db/aa/aa/dbaaaa1f36d8f4d73b78d0f7783c4283--baseball-birthday-party-baseball-art.jpg"
          }}
          style={styles.welcomeImage}
        />
        <Text>Hurray! It's Time to Play!</Text>
        <Image
          source={{
            uri:
              "https://media3.giphy.com/media/ZgUU46zeOERo4cYG8Q/giphy.gif?cid=790b76115cc35bb65a6c3478775792e4&rid=giphy.gif"
          }}
          style={styles.photo}
        />
        <View>
          <Button onPress={() => this.props.choice1("a")} title="Choose A" />
        </View>

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
  },
  photo: {
    width: 350,
    height: 350
  }
});
