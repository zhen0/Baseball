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
          <Text style={styles.getStartedText}>
            Welcome to Baseball Bandersnatch!
          </Text>
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Sign Up</Text>

          <View style={{ padding: 10 }}>
            <TextInput
              style={{ height: 40 }}
              placeholder="Name"
              onChangeText={name => this.setState({ name })}
            />
            <View>
              <TextInput
                style={{ height: 40 }}
                placeholder="ClassCode"
                onChangeText={address => this.setState({ address })}
              />
            </View>
          </View>
        </View>
        <Button
          style={styles.button}
          onPress={() => this.props.add(this.state)}
          title="Add Me"
        />
        <View>
          <Text style={styles.getStartedText}> ---------- </Text>
          <Text style={styles.getStartedText}>
            Your Name: {this.props.name}
          </Text>
          <Text style={styles.getStartedText}>
            Your ClassCode: {this.props.address}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  welcomeContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
    justifyContent: "space-around"
  },
  welcomeImage: {
    width: 50,
    height: 50
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
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
  homeScreenFilename: {
    marginVertical: 7
  },
  signUpText: {
    color: "blue",
    fontFamily: "monospace",
    fontSize: 15
  },
  signUpContainer: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 20,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
    fontFamily: "monospace"
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
