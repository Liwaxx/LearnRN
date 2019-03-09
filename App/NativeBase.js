import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text
} from 'native-base';

import Anime from './components/Anime';

export default class MyAnimeList extends Component {

  animes = ['Boruto', 'Mob Pshyco 100', 'Black Clover', 'Shingekino Shouma']

  // constructor() {
  //   super();
  //   const ds = new ListView.DataSource({
  //     rowHasChanged: (r1, r2) => r1 != r2
  //   });
  //   this.state = {
  //     dataSource: ds.cloneWithRows(this.animes)
  //   }
  // }

  render() {
    return (<Container>
      <Header/>
      <Content>
        <List>
          {this.animes.map((anime, index) => <ListItem key={index}><Text>{anime}</Text></ListItem>)}
        </List>
      </Content>
    </Container>);
  }
}
