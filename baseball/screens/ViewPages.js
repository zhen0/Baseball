import React from "react";
import { View, StyleSheet, Text, ViewPagerAndroid } from "react-native";

class MyPager extends React.Component {
  render() {
    return (
      <ViewPagerAndroid style={styles.viewPager} initialPage={0}>
        <View key="1">
          <Text>First page</Text>
        </View>
        <View key="2">
          <Text>Second page</Text>
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
