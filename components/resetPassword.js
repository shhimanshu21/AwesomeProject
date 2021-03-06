import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
} from 'react-native';

export default function Password() {
  return (
    <View style={styles.container}>
     
      <View style={styles.logo}>
        <Image
          style={{
            width: 20,
            height: 20,
            position: 'relative',
            top: 15,
            left: 25,
          }}
          resizeMode="contain"
          source={require('../assets/password.png')}
        />
        <TextInput style={styles.input} placeholder="Old Password" />
      </View>
      <View style={styles.logo}>
        <Image
          style={{
            width: 20,
            height: 20,
            position: 'relative',
            top: 15,
            left: 25,
          }}
          resizeMode="contain"
          source={require('../assets/password.png')}
        />
        <TextInput style={styles.input} placeholder="New Password" />
      </View>
      <View style={styles.logo}>
        <Image
          style={{
            width: 20,
            height: 20,
            position: 'relative',
            top: 15,
            left: 25,
          }}
          resizeMode="contain"
          source={require('../assets/password.png')}
        />
        <TextInput style={styles.input} placeholder="Conform Password" />
      </View>
      <View style={{ width: 250, position: 'relative', top: 40 }}>
        <TouchableHighlight
          style={{
            backgroundColor: '#87CEEB',
            alignItems: 'center',
            //padding: 4,
            borderRadius: 20,
            height: 40,
            width: 350,
            position:'relative',
            right:50,
            top:50
          }}>
          <Text style={{ fontWeight: 'bold',fontSize:20 }}>Submit</Text>
        </TouchableHighlight>
      </View>
      <View>
        <Image
          style={{ width: 400, height: 120, position: 'relative', top:180 }}
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
  logo: {
    flexDirection: 'row',
  },
  input: {
    width: 360,
    marginRight:30,
    height: 35,
    borderBottomColor: '#bec1c4',
    borderBottomWidth: 2,
   // padding: 10,
    margin: 10,
    paddingLeft: 40,
    paddingRight:30
   // marginBottom: 5,
  },
});