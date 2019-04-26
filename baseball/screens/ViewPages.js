import React from "react";
import {
  Image,
  Platform,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  CameraRoll,
  Alert,
  View,
  ViewPagerAndroid
} from "react-native";
import { WebBrowser } from "expo";

import axios from "axios";
import SetSceneQ1 from "./P2_SetSceneQ1";
import ChoosePlayer from "./P1_ChoosePlayer";
import P2 from "./P2";
import P3 from "./P3";
import SignUp from "./SignUp";
import Lesson from "./Lesson";

const ImageB = {
  uri:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQCeddahLSs57x2X_nfO4DrlBT8eGPV9iENxyKuGZSJkvj4-W"
};

class MyPager extends React.Component {
  constructor() {
    super();
    this.state = {
      player: ".......",
      chosenPhoto: ImageB,
      name: "",
      address: "",
      choice1: ""
    };
  }
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ViewPagerAndroid style={styles.viewPager} initialPage={0}>
        <View key="1" style={styles.container}>
          <SignUp
            name={this.state.name}
            submit={this._handleSubmit}
            address={this.state.address}
          />
        </View>
        <View key="2" style={styles.container}>
          <Lesson />
        </View>
        <View key="3">
          <ChoosePlayer
            player={this.state.player}
            chosenPhoto={this.state.chosenPhoto}
            choosePlayer1={this._handlePlayer1}
            choosePlayer2={this._handlePlayer2}
            choosePlayer3={this._handlePlayer3}
          />
        </View>
        <View key="4">
          <SetSceneQ1 choice1={this._choice1} />
        </View>
        <View key="5">{this.state.choice1 === "a" ? <P3 /> : <P2 />}</View>
      </ViewPagerAndroid>
    );
  }
  _handleSubmit = async info => {
    try {
      let { data } = await axios.post(
        "https://pramshare.herokuapp.com/api/users",
        info
      );

      this.setState({
        name: data.name,
        address: data.address
      });

      Alert.alert("You have been added!");
    } catch (error) {
      console.error(error);
    }
  };

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      "https://docs.expo.io/versions/latest/guides/development-mode"
    );
  };

  _handlePlayer1 = () => {
    this.setState({
      player: "Yankee",
      chosenPhoto: {
        uri:
          "https://secure.i.telegraph.co.uk/multimedia/archive/02636/arod_2636286b.jpg"
      }
    });
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
      player: this.state.name,
      chosenPhoto: { uri: photo }
    });
  };
  _choice1 = answer => {
    this.setState({
      choice1: answer
    });
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
  },
  viewPager: {
    flex: 1
  }
});

export default MyPager;
