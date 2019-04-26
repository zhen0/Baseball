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
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <Image
              source={{
                uri:
                  "https://i.pinimg.com/474x/db/aa/aa/dbaaaa1f36d8f4d73b78d0f7783c4283--baseball-birthday-party-baseball-art.jpg"
              }}
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              Welcome to Baseball Bandersnatch!
            </Text>

            <View
              style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
            >
              <Text style={styles.codeHighlightText}>
                Choose a Player to get started
              </Text>
            </View>
            <Text style={styles.getStartedText}>
              Your player is: {this.state.player}{" "}
            </Text>
            <Image source={this.state.chosenPhoto} style={styles.playerImage} />
            <Text>Their address is: {this.state.address} </Text>
            <Text style={styles.getStartedText}>
              You will be deciding how they play today!
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handlePlayer1}>
              <Image
                source={{
                  uri:
                    "https://secure.i.telegraph.co.uk/multimedia/archive/02636/arod_2636286b.jpg"
                }}
                style={styles.playerImage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this._handlePlayer2}>
              <Image
                source={{
                  uri:
                    "https://hips.hearstapps.com/hbz.h-cdn.co/assets/cm/15/04/54bd3d512cfd2_-_hbz-mlb-david-wright-487011951.jpg?crop=1.0xw:1xh;center,top&resize=980:*"
                }}
                style={styles.playerImage}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.photosContainer}>
            <Text> Or you can add a photo and choose your own player!</Text>
            <Button
              title="Load Images"
              onPress={this._handleButtonPress}
              style={styles.button}
            />
            <ScrollView>
              {this.state.photos.map((p, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() => this._handlePlayer3(p.node.image.uri)}
                  >
                    <Image
                      style={styles.playerImage}
                      source={{ uri: p.node.image.uri }}
                    />
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </ScrollView>
        <View />
      </View>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/development-mode"
    );
  };

  _handlePlayer1 = async () => {
    try {
      let { data } = await axios.post(
        "https://pramshare.herokuapp.com/api/users",
        { name: "Yankee", address: "NYC" }
      );

      this.setState({
        player: "Yankee",
        chosenPhoto: {
          uri:
            "https://secure.i.telegraph.co.uk/multimedia/archive/02636/arod_2636286b.jpg"
        },
        address: data.address
      });
    } catch (error) {
      console.error(error);
    }
  };

  _handlePlayer2 = () => {
    this.setState({
      player: "Mets Player",
      chosenPhoto: {
        uri:
          "https://hips.hearstapps.com/hbz.h-cdn.co/assets/cm/15/04/54bd3d512cfd2_-_hbz-mlb-david-wright-487011951.jpg?crop=1.0xw:1xh;center,top&resize=980:*"
      }
    });
  };
  _handlePlayer3 = photo => {
    this.setState({
      player: "You!",
      chosenPhoto: { uri: photo }
    });
  };

  _loadImageClick = async () => {
    try {
      // permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        throw new Error("Camera permission not granted");
      }
    } catch (err) {
      console.log("error in camera roll permissions", err);
    }
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
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
  playerImage: {
    width: 200,
    height: 160,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
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
