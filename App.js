import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import F from './assets/F.jpg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagenPick from 'expo-image-picker';



export default class App extends Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
    this.state = {image:F};
  }
  
  
  openImagePickerAsync = async () => {
    let permissionResult = await ImagenPick.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagenPick.launchImageLibraryAsync();
    if(pickerResult.cancelled === true){
      return;
    }
    this.setState({ image:{uri:pickerResult.uri} });
  }
  

  render() {
    
    return (
      <View style={styles.container}>
        <Image source={this.state.image} style={styles.logo}/>
        <Text style={styles.welcome} >ffff</Text>
        <TouchableOpacity 
        onPress={this.openImagePickerAsync} 
        style={styles.fuckButton}>
          <Text style={styles.instructions}>
            Magic
          </Text>
        </TouchableOpacity>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize:30,
    textAlign: 'center',
    color: '#888',
    marginBottom: 5,
  },
  logo:{
    width: 305,
    height: 159,
    marginBottom: 10,
  },
  fuckButton:{
    backgroundColor:'blue',
    padding:20,
    borderRadius:6,
  }
});
