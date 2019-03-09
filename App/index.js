import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class Index extends Component {

  // state = {
  //   number: 0,
  //   text: ""
  // }

  // constructor(){
  //   super();
  //   this.state ={
  //     number: 0,
  //     text: ""
  //   }
  // }
  //
  // componentDidMount(){
  //   // setInterval(()=> {
  //   //   this.setState({
  //   //     number: this.state.number + 1
  //   //   });
  //   // }, 1000);
  // }

  // handleClick(myName){
  //   this.setState({
  //     number: this.state.number + 1,
  //     text: "Hello Anak Kampang"
  //   })
  // }

  render(){
    // const myName = 'sehat'
    return(
      <View style={styles.body}>
        <View style={styles.sidebar}>
          <Text style={styles.sidebarText}>Sidebar</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Header</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.bodyText}>Body</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Footer</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 5,
    flexDirection: "row"
  },
  container: {
    flex: 1,
  },
  sidebar: {
    backgroundColor: "red",
    flex: 0.1
  },
  header: {
    flex:0.2,
    backgroundColor: "green",
    justifyContent: "center"
  },
  footer: {
    flex: 0.2,
    backgroundColor: "blue",
    justifyContent: "center"
  },
  sidebarText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20
  },
  headerText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20
  },
  bodyText: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 20
  },
  footerText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20
  },
  body: {
    flex: 2,
    backgroundColor: "white",
    justifyContent: "center"
  }
});
