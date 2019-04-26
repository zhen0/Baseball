import React from "react";
import {
  Image,
  Button,
  ScrollView,
  View,
  Text,
  Camera,
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
  _handleButtonPress = () => {
    this._loadImageClick();
    CameraRoll.getPhotos({
      first: 20,
      assetType: "Photos"
    })
      .then(r => {
        this.setState({ photos: r.edges });
      })
      .catch(err => {
        console.log(err); //Error Loading Images
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Name: {this.props.name} </Text>
        <Button
          title="Load Images"
          onPress={this._handleButtonPress}
          style={styles.button}
        />
        <ScrollView>
          {this.state.photos.map((p, i) => {
            return (
              <Image
                key={i}
                style={styles.playerImage}
                source={{ uri: p.node.image.uri }}
              />
            );
          })}
        </ScrollView>
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
