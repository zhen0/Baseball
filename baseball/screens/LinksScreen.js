import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';


export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Help',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        
           
        <Text>For extra help you can see the video here: </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
