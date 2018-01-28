import React, { Component } from 'react';
import { View, Text, NetInfo} from 'react-native';
import axios from 'axios';
import {Body, Button, Header, Content, Icon, Input, Item, Left, Right, Title, Toast, Container} from 'native-base';
import Spinner from './Spinner';

class MainScreen extends Component {
  state = { text: '', intent: [], result: '', loading: false };


getit(){
  const { text, result, loading } = this.state;
  this.setState({  loading: true, intent:'' });
  const formData = new FormData();
  formData.append('comment', text);

  axios.post('https://app.assassinate72.hasura-app.io/wit', formData)
  .then(response =>
    this.setState({ intent: 'Intent is ' + response.data.intent[0].value.toUpperCase(), loading: false })
  )
  .catch(error =>
    this.setState({ intent: 'An error occurred while processing your request. ' + error.message, loading: false })
  );
}

renderButton() {
    if (this.state.loading) {
      return <Spinner size="large" />;
    }

    return (
    <Button iconLeft light
    style={styles.buttonStyle}
    onPress={this.getit.bind(this)}
    >

    <Text style={{ color: '#fff', fontSize:16 }}>Submit</Text>
    </Button>
  );
}

getResult(){
  if (this.state.intent.indexOf('undefined')>-1)
  return (<Text style={styles.error}>Please provide suitable input. We accept inputs of categories weather, time taken, distance and directions. </Text>);
  else return (< Text style={styles.resultStyle}>{this.state.intent} </Text>);
}

  render(){
    return (
      <View>
      <Item>
        <Input
          placeholder="Enter your query..."
          onChangeText={text => this.setState({ text })}
        />
      </Item>

      <View style={styles.containerStyle}>
        {this.renderButton()}

      </View>
      <View>
        {this.getResult()}
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
      backgroundColor: 'green',
      padding: 20,
      marginTop: 10
  },

  mainContainerStyle:{
    marginLeft:10,
    marginRight:10,
    marginBottom:5
  },

  resultStyle:{
    color: 'green',
    fontSize:16,
    marginTop:20
  },

  error:{
    color:'red',
    fontSize:16,
    marginTop:20
  }
}

export default MainScreen;
