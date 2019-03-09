import React, {Component} from 'react';
import {ListView, Text, View} from 'react-native';
import Anime from './components/Anime';

export default class MyAnimeList extends Component {

  animes = [
    'Boruto',
    'Mob Pshyco 100',
    'Black Clover',
    'Shingekino Shouma'
  ]

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 != r2});
    this.state = {
      dataSource : ds.cloneWithRows(this.animes)
    }
  }
    render() {
      return (
        <View>
        <Text>With Data Source :</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Anime anime={rowData}/>}
        />
        <Text>With Map :</Text>
        {this.animes.map((anime, key) => <Text key={key}>{anime}</Text>)}
        </View>
      );
    }
  }
