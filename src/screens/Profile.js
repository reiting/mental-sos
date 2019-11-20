import React from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import { StyleSheet, View, Text, FlatList, TextInput, Button, ScrollView } from 'react-native';
import MapView from 'react-native-maps'

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
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
    console.log('kfjdkslajflsajf', item.key);
    this.setState({ message: item.key })
  }

  saveChosenMessage = async () => {
    const emergencyMessage = this.state.message;
    await AsyncStorage.setItem('chosenMessage', emergencyMessage)
      .then(() => {
        console.log('arrrrrghhhhhhhh', emergencyMessage);
      })
  }

//handling onPress action  
// getListViewItem = (item) => {
//   Communications.text(this.props.navigation.state.params.chosenNumber, item.key || this.state.message)
// };

render() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingStyle}>Choose from the following or customize a message</Text>
      <MapView style={{ flex: 1 }} region={{ latitude: 42.882004, longitude: 74.582748, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }} showsUserLocation={true} />
      <FlatList
        data={[
          { key: 'Hi! I am struggling right now, and it has been hard for me to reach out. I care about you and need your support at this time! Please call me!' },
          { key: 'Hi! I need your support right now. Please contact me as soon as possible!' },
          { key: 'I am in crisis. Contact me immediately!' },
          { key: 'I am having really difficult thoughts and should not be alone right now. Call me ASAP!' },
          { key: 'I am having suicidal thoughts, and I am afraid I will hurt myself. Contact me ASAP!' },
        ]}
        renderItem={({ item }) =>
          <Text style={styles.item}
            onPress={this.handlePrewrittenMessage}>{item.key}</Text>}
        ItemSeparatorComponent={this.renderSeparator}
      />
      <View>
        <TextInput style={styles.textInput}
          placeholder="Enter Your Text Message Here"
          onChangeText={this.handleMessage} />
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


