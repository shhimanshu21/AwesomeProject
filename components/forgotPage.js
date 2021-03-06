import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
export default function Forgot() {
  return (
    <View style={styles.container}>
     
      <View>
        <Image
          style={{ width: 250, height: 250, position: 'relative', bottom: 40,}}
          resizeMode="contain"
          source={require('../assets/logo.png')}
        />
      </View>
      <View style={styles.logo}>
        <Image
          style={{
            width: 20,
            height: 20,
            position: 'relative',
            bottom: 10,
            left: 15,
          }}
          resizeMode="contain"
          source={require('../assets/mail.png')}
        />
        <View style={{ position: 'relative', bottom: 30,right:10 }}>
          <TextInput style={styles.input} placeholder="Enter Email Adress" />
        </View>
      </View>
      <View style={styles.button}>
        <Pressable
          style={{
            backgroundColor: '#87CEEB',
            alignItems: 'center',
            padding: 4,
            borderRadius: 20,
            height: 50,
            position:'relative',
            right:20
          }}>
          <Text style={{ fontWeight: 'bold',fontSize:20,position:'relative',top:8 }}>Send</Text>
        </Pressable>
      </View>
      <View>
        <Image
          style={{ width: 400, height: 120, position: 'relative', bottom: 5 }}
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
    flexDirection: "column",
    paddingTop:120
  },
  logo: {
    flexDirection: 'row',
  },

  input: {
    width: 350,
    height: 50,
    borderBottomColor: '#bec1c4',
    borderBottomWidth: 2,
    //padding:10,
    paddingLeft: 30,
    //marginBottom: 5,
    fontSize:15
  },
  button: {
    height: 150,
    width: 350,
    position:'relative',
    left:20
    //paddingBottom: 30,
  },
});