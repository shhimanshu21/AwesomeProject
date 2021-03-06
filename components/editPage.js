import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
} from 'react-native';

export default function Edit() {
  return (
    <View style={styles.container}>
   
      <View>
        <TextInput style={styles.input} placeholder="Kiara Roy" />
        <View>
          <Image
            style={{ height: 20, width: 20, position: 'relative',left:15, bottom: 25 }}
            resizeMode="contain"
            source={require('../assets/user-profile.png')}
          />
        </View>
      </View>
      <View>
        <TextInput style={styles.input} placeholder="kiara24@gmail.com" />
        <View>
          <Image
            style={{ height: 20, width: 20, position: 'relative', left:15,bottom: 25 }}
            resizeMode="contain"
            source={require('../assets/mail.png')}
          />
        </View>
      </View>

      <View style={styles.button}>
        <TouchableHighlight
          style={{
            width: 350,
            backgroundColor: '#87CEEB',
            alignItems: 'center',
            padding: 4,
            borderRadius: 20,
            height: 40,
            position: 'relative',
            top: 130,
            right:30,
          }}>
          <Text style={{ fontWeight: 'bold', position: 'relative', top: 8 }}>
            Update
          </Text>
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
    
  },
  input: {
    width: 350,
    height: 35,
    borderBottomColor: '#bec1c4',
    borderBottomWidth: 2,
    padding: 10,
    paddingLeft: 45,
    fontSize:15,
    marginRight:10,
  },
  button: {
    height: 100,
    width: 300,
    padding: 20,
    marginRight:15,
  },
});