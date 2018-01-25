import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {Body, Button, Header, Content, Icon, Input, Item, Left, Right, Title, Toast, Container} from 'native-base';

class MainScreen extends Component {

onSubmit(){
  Toast.show({
    text: 'Wrong password!',
    position: 'bottom',
    buttonText: 'Okay'});
}

  render(){
    return (
      <View>
      <Item>
        <Input placeholder="Enter your query..." />
      </Item>

      <View style={styles.containerStyle}>
        <Button iconLeft light
        style={styles.buttonStyle}
        onPress={this.onSubmit.bind(this)}>
        <Text style={{color:'#fff'}}>Submit</Text>
        </Button>
      </View>
      </View>
    );
  }

}

const styles={
  containerStyle:{
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
  },

  buttonStyle:{
      backgroundColor: '#007aff',
      padding: 20,
      marginTop: 10
  },

  mainContainerStyle:{
    marginLeft:10,
    marginRight:10,
    marginBottom:5
  }
}

export default MainScreen;
