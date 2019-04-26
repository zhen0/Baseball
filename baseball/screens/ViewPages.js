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
  View,
  ViewPagerAndroid
} from "react-native";
import { WebBrowser } from "expo";
import { MonoText } from "../components/StyledText";
import { Permissions } from "expo";
import axios from "axios";

const ImageB = {
  uri:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHQCeddahLSs57x2X_nfO4DrlBT8eGPV9iENxyKuGZSJkvj4-W"
};

class MyPager extends React.Component {
  constructor() {
    super();
    this.state = { player: "" };
  }
  render() {
    return (
      <ViewPagerAndroid style={styles.viewPager} initialPage={0}>
        <View key="2">
          <Image
            source={{
              uri:
                "https://secure.i.telegraph.co.uk/multimedia/archive/02636/arod_2636286b.jpg"
            }}
            style={{ width: 400, height: 400 }}
          />
          <Text>This is a Yankees player. He is about to hit the ball.</Text>
        </View>
        <View key="3">
          <Image
            source={{
              uri:
                "https://hips.hearstapps.com/hbz.h-cdn.co/assets/cm/15/04/54bd3d512cfd2_-_hbz-mlb-david-wright-487011951.jpg?crop=1.0xw:1xh;center,top&resize=980:*"
            }}
            style={{ width: 400, height: 400 }}
          />
          <Text>This is a Mets Player.</Text>
        </View>
      </ViewPagerAndroid>
    );
  }
}

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  }
});

export default MyPager;
