import React from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, View, Text, FlatList, TextInput, Button, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      data: [
        { key: '1', val: 'Hi! I am struggling right now, and it has been hard for me to reach out. I care about you and need your support at this time! Please call me!' },
        { key: '2', val: 'Hi! I need your support right now. Please contact me as soon as possible!' },
        { key: '3', val: 'I am in crisis. Contact me immediately!' },
        { key: '4', val: 'I am having really difficult thoughts and should not be alone right now. Call me ASAP!' },
        { key: '5', val: 'I am having suicidal thoughts, and I am afraid I will hurt myself. Contact me ASAP!' },
      ]
    };
  }

  static navigationOptions = {
    title: 'Profile'
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  };

  handleMessage = text => {
    this.setState({ message: text });
  };

  handlePrewrittenMessage = (item) => {
    this.setState({ message: item.val })
  }

  saveChosenMessage = async () => {
    const emergencyMessage = this.state.message;
    await AsyncStorage.setItem('chosenMessage', emergencyMessage)
      .then(() => {
        console.log('arrrrrghhhhhhhh', emergencyMessage);
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headingStyle}>Choose from the following or customize a message</Text>
        {/* <MapView style={{ flex: 1 }} region={{ latitude: 42.882004, longitude: 74.582748, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }} showsUserLocation={true} /> */}
        <TextInput style={styles.textInput}
          placeholder="Enter Your Text Message Here"
          onChangeText={this.handleMessage} />
        <FlatList
          data={this.state.data}
          keyExtractor={(item) => item.key}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => this.setState({ message: item.val })}>
              <Text style={styles.item}>{item.val}</Text>
            </TouchableOpacity>}
        />
        <View>
          <Button style={styles.button} title="Confirm Message Choice" onPress={this.saveChosenMessage} />
          <Text styles={styles.botton}>*Tip: you can use a codeword previously shared with loved ones to subtly identify a mental health crisis (texting them the term 'grapefruit', for instance, could trigger recognization in critical times.</Text>
        </View>
      </View>
    );
  }
}
export default Profile;

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 2000,
    flex: 1,
  },
  item: {
    width: '100%',
    aspectRatio: 4 / 1,
    fontSize: 18,
    paddingLeft: 25,
    paddingTop: 10,
    paddingRight: 25
  },
  textInput: {
    width: '100%',
    aspectRatio: 5 / 1,
    fontSize: 18,
    paddingLeft: 25,
  },
  headingStyle: {
    fontSize: 17,
    textAlign: 'center',
    textDecorationLine: "underline",
    paddingLeft: 25,

  },
  button: {
    justifyContent: 'center',
    width: 300,
    backgroundColor: "#307cae",
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    color: '#ffffff',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  }
});


