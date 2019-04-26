import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  Button,
  TextInput,
  Alert,
  View
} from "react-native";

import axios from "axios";

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: ""
    };
  }
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          source={{
            uri:
              "https://i.pinimg.com/474x/db/aa/aa/dbaaaa1f36d8f4d73b78d0f7783c4283--baseball-birthday-party-baseball-art.jpg"
          }}
          style={styles.welcomeImage}
        />

        <Text style={styles.getStartedText}>
          Welcome to Baseball Bandersnatch!
        </Text>

        <Text>Sign Up</Text>

        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="name"
            onChangeText={name => this.setState({ name })}
          />
          <View style={{ padding: 10 }}>
            <TextInput
              style={{ height: 40 }}
              placeholder="ClassCode"
              onChangeText={address => this.setState({ address })}
            />
          </View>
        </View>

        <Button onPress={() => this._handleSubmit()} title="Add Me" />
        <View>
          <Text>Your Name: {this.state.name}</Text>
          <Text>Your ClassCode: {this.state.address}</Text>
        </View>
      </ScrollView>
    );
  }

  _handleSubmit = async () => {
    try {
      let { data } = await axios.post(
        "https://pramshare.herokuapp.com/api/users",
        this.state
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
  }
});
