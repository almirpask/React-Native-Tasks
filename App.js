import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.containerContent}>
          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>Estudando Ruby on Rails</Text>
            <Text style={styles.postDescription}> Lorem ipsum dolor sit amet</Text>
          </View>

          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>Estudando Elixir e Phoenix</Text>
            <Text style={styles.postDescription}> Lorem ipsum dolor sit amet</Text>
          </View>

          <View style={styles.postContainer}>
            <Text style={styles.postTitle}>Estudando Node e Adonis</Text>
            <Text style={styles.postDescription}> Lorem ipsum dolor sit amet</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  containerContent: {
    marginVertical: 50
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  postDescription: {
    
  },
  postContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 3
  }
});
