import React from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import MapView from 'react-native-maps'

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      //to get the value from the TextInput
      number: '',
      //to get the contact number
      fullContacts: [],
      chosenNumber: ''
    };
  }

  static navigationOptions = {
    title: 'Contacts'
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

  handleNumber = text => {
    this.setState({ number: text });
  };

  // saveContacts = async () => {
  //   const contactToBeSaved =
  //   {
  //     name: this.state.name,
  //     number: this.state.number,
  //   }
  //   const existingContacts = await AsyncStorage.getItem('contacts');
  //   let newContact = JSON.parse(existingContacts);
  //   if (!newContact) {
  //     newContact = []
  //   }
  //   newContact.push(contactToBeSaved)
  //   await AsyncStorage.setItem('contacts', JSON.stringify(newContact))
  //     .then(() => {
  //       console.log('It was saved successfully');
  //     })
  //     .catch(() => {
  //       console.log('There was an error saving the product');
  //     })
  // }

  saveChosenContact = async () => {
    const emergencyContact = this.state.number;
    await AsyncStorage.setItem('chosenNumber', emergencyContact)
        .then(() => {
          console.log('arrrrrghhhhhhhh', emergencyContact);
        })
  }

  // getListViewItem = (item) => {
  //   this.setState({ chosenNumber: item.number })
  // };

  nextPage = () =>{
    this.props.navigation.navigate('Profile', { chosenNumber: this.state.chosenNumber });

  }

  //   clearAllData() {
  //     AsyncStorage.getAllKeys()
  //         .then(keys => AsyncStorage.multiRemove(keys))
  //         .then(() => alert('success'));
  // }

  render() {
    console.log('blahhhhhhhhhhhhhh', this.state.chosenNumber);
    return (
      <View style={styles.MainContainer}>
        <TextInput
          placeholder="Enter number"
          value={this.state.number}
          onChangeText={this.handleNumber}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyle}
        />
        <TouchableOpacity
          onPress={this.saveChosenContact}
          style={styles.button}>
          <Text style={styles.buttonText}>SAVE</Text>
        </TouchableOpacity>
        {/* <FlatList
          data={this.state.fullContacts}
          renderItem={({ item }) => (
            <Text>
              <Text>{item.name}</Text>
              <Text onPress={this.getListViewItem.bind(this, item)}>{item.number}</Text>
            </Text>
          )}
          keyExtractor={item => item.number}
          ItemSeparatorComponent={this.renderSeparator}
        /> */}
        <TouchableOpacity
          onPress={this.nextPage}
          style={styles.button}>
          <Text style={styles.buttonText}>Go to Messages</Text>
        </TouchableOpacity>
        <Text style={styles.text}>  </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    flex: 1,
    margin: 10,
    marginTop: 60
  },
  TextInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#808000',
  },
  button: {
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: '#808000',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
