import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
} from 'react-native';

export default function Contact() {
  return (
    <View style={styles.container}>
     
      <View>
        <TextInput style={styles.input} placeholder="Enter Subject" />
      </View>
      <View>
        <TextInput
          style={styles.input1}
          placeholder="Enter Message"
          multiline={true}
        />
      </View>

      <View style={styles.button}>
        <TouchableHighlight
          style={{
            width: 355,
            backgroundColor: '#87CEEB',
            alignItems: 'center',
            padding: 4,
            borderRadius: 20,
            height: 40,
            position: 'relative',
            top: 80,
            right: 50,
            marginLeft:10,
          }}>
          <Text style={{ fontWeight: 'bold' ,fontSize:20}}>Submit</Text>
        </TouchableHighlight>
      </View>
      <View>
        <Image
          style={{ width: 400, height: 120, position: 'relative', top: 180 }}
          resizeMode="contain"
          source={require('../assets/footer-bg.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    //flexDirection: "column"
  },
  input: {
    width: 350,
    height: 35,
    borderBottomColor: '#bec1c4',
    borderBottomWidth: 2,
    padding: 10,
    //paddingLeft:20,
    //marginBottom:,
    //paddingRight:20,
    
  },
  input1: {
    width: 350,
    height: 120,
    borderBottomColor: '#bec1c4',
    borderBottomWidth: 2,
    padding: 10,
    marginLeft:20,
    //paddingBottom:60,
  },
  button: {
    height: 100,
    width: 300,
    padding: 20,
  },
});