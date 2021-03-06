import React from 'react'; 
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function Sign({navigation}) {  

  const[name,setName]=useState()
  const[email,setEmail]=useState()
  const [pass,setPass]=useState()
  const [confirm,setConfirm]=useState()
 
  const help= async ()=>{
    if(name&&email&&pass&&confirm!=null){
  if(pass==confirm){
    
      var a = {name,email,pass,confirm}
      var data = JSON.stringify(a)
      AsyncStorage.setItem("User",data)
      navigation.navigate('login')
  }
  else{
    Alert.alert("please write correct password")
  }
  }
  else{
    Alert.alert('please fill required field')
  }
  }
  // const prevu= ()=>{
  //   help
  //   navigation.navigate('login')
  // }


  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            width: 20,
            height: 20,
            position: 'relative',
            top: 25,
            left: 10,
          }}
          resizeMode="contain"
          source={require('../assets/user-profile.png')}
        />
        <TextInput style={styles.input} placeholder="Enter Name" 
         value={name}
         onChangeText={value => setName(value)}
        
        />
        <KeyboardAvoidingView/>
      </View>
      <View>
        <Image
          style={{
            width: 20,
            height: 20,
            position: 'relative',
            top: 30,
            left: 10,
          }}
          resizeMode="contain"
          source={require('../assets/mail.png')}
        />
        <TextInput style={styles.input} placeholder="Enter Email Adress" 
        
        value={email}
         onChangeText={value => setEmail(value)}
        />
      </View>
      <View>
        <Image
          style={{
            width: 20,
            height: 20,
            position: 'relative',
            top: 30,
            left: 10,
          }}
          resizeMode="contain"
          source={require('../assets/password.png')}
        />
        <TextInput style={styles.input} placeholder="Enter Password" 
        secureTextEntry={true}
        value={pass}
        onChangeText={value => setPass(value)}
        />
      </View>
      <View>
        <Image
          style={{
            width: 20,
            height: 20,
            position: 'relative',
            top: 30,
            left: 10,
          }}
          resizeMode="contain"
          source={require('../assets/password.png')}
        />
        <TextInput style={styles.input} 
        secureTextEntry={true}
        placeholder="Enter Conform Password" 
         value={confirm}
         onChangeText={value =>setConfirm(value)}
        />
      </View>
      <View>
        <Pressable
          style={{
            backgroundColor: '#87CEEB',
            alignItems: 'center',
            borderRadius: 20,
            height: 50,
            width: 350,
            position: 'relative',
            top: 60,
            left:5

          }}
          onPress={help}
          >
          <Text style={{ fontWeight: 'bold', position: 'relative', top:10,fontSize:20 }}>
            Sign up
          </Text>
        </Pressable>
      </View>
      <Image
        style={{ width: 400, height: 120, position: 'relative', top: 170,left:8 }}
        resizeMode="contain"
        source={require('../assets/footer-bg.png')}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
     flex: 1,

     alignItems: 'center',
     justifyContent: 'center',
    position:'relative',
    bottom:25,
    marginRight:10
  },
  input: {
    width: 350,
    height: 35,
    borderBottomColor: '#bec1c4',
    borderBottomWidth: 2,
    paddingLeft: 30,
    marginLeft:10
  },
});