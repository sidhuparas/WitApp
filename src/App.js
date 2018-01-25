import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Body, Button, Header, Content, Icon, Input, Item, Left, Right, Root, Title, Container} from 'native-base';
import MainScreen from './components/MainScreen';

class App extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#007aff'}} androidStatusBarColor='#0288D1' >
          <Body>
          <Title> Wit App</Title>
          </Body>
        </Header>
        <Content showsVerticalScrollIndicator={false} style={styles.mainContainerStyle}>
          <Root>
          <View>
          <MainScreen />
          </View>
          </Root>
        </Content>
      </Container>

    );
  }
}

const styles={

  mainContainerStyle:{
    marginLeft:10,
    marginRight:10,
    marginBottom:5
  }
}
export default App;
