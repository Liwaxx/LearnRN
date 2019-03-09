import React, {Component} from "react";
import {View, Text, StyleSheet} from "react-native";
import MyAnimeList from "./MyAnimeList";

export default class Index2 extends Component {

  render() {
    return (
      <View style={styles.container}>
      <MyAnimeList/>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
