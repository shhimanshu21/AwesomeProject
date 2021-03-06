import React from 'react';
import { useState } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  Modal
} from 'react-native';
export default function Dwrar({navigation}) {
  const[modalOpen,setModal]=useState(false);
  const onFace=()=>{
  setModal(false)
  navigation.navigate('favorites')
}

const onFace1=()=>{
  setModal(false)
  navigation.navigate('edit')
}

const onFace2=()=>{
  setModal(false)
  navigation.navigate('contact')
}

const onFace3=()=>{
  setModal(false)
  navigation.navigate('password')
}

const onFace4=()=>{
  setModal(false)
  navigation.navigate('about')
}

  return (
<View style={styles.container}>
    <Modal 
    animationType="fade"
    transparent={true}
    visible={modalOpen} 
    onRequestClose={() => {
      setModal(!modalOpen);
    }}
    >
    <Pressable 
  onPress={() => setModal(false)}
    style={styles.centeredView}>
          <View 
          style={styles.modalView}
          >
        <Pressable 
    
        onPress={onFace} 
        style={{flexDirection:'row',marginBottom:15,borderBottomColor: '#87CEEB',
        borderBottomWidth: 1,paddingBottom:5}}
        >
        <Image 
        style={{height:20,width:20}}
        source={require('../assets/favourite2.png')}
        />
        <Text style={{position:'relative',left:10,bottom:5,fontSize:18,fontWeight:'bold'}}>Favorites</Text>
        </Pressable>
      
        <Pressable 
        onPress={onFace1} 
        style={{flexDirection:'row',marginBottom:15,borderBottomColor: '#87CEEB',
        borderBottomWidth: 1,paddingBottom:5}}
        >
        <Image 
         style={{height:20,width:20}}
        source={require('../assets/user.png')}
        />
        <Text style={{position:'relative',left:10,bottom:5,fontSize:18,fontWeight:'bold'}}>Edit Profile</Text>
        </Pressable>
        
        <Pressable 
       onPress={onFace2}  
        style={{flexDirection:'row',marginBottom:15,borderBottomColor: '#87CEEB',
        borderBottomWidth: 1,paddingBottom:5}}
        >
        <Image 
         style={{height:20,width:20}}
        source={require('../assets/contact-us.png')}
        />
        <Text style={{position:'relative',left:10,bottom:5,fontSize:18,fontWeight:'bold'}}>Contact Us</Text>
        </Pressable>
        
        <Pressable 
        onPress={onFace3} 
        style={{flexDirection:'row',marginBottom:15,borderBottomColor: '#87CEEB',
        borderBottomWidth: 1,paddingBottom:5}}
        >
        <Image 
         style={{height:20,width:20}}
        source={require('../assets/change-password.png')}
        />
        <Text style={{position:'relative',left:10,bottom:5,fontSize:18,fontWeight:'bold'}}>Change Password</Text>
        </Pressable>
       
        <Pressable 
       onPress={onFace4} 
        style={{flexDirection:'row',marginBottom:15,borderBottomColor: '#87CEEB',
        borderBottomWidth: 1,paddingBottom:5}}
        >
          <Image 
           style={{height:20,width:20}}
        source={require('../assets/about-us.png')}/>
        <Text style={{position:'relative',left:10,bottom:5,fontSize:18,fontWeight:'bold'}}>About Us</Text>
        </Pressable>
       
        <Pressable 
        onPress={() => navigation.navigate('login')}
        style={{flexDirection:'row',marginBottom:15,}}
        >
        <Image 
         style={{height:20,width:20}}
        source={require('../assets/logout.png')}
        />
        <Text style={{position:'relative',left:10,bottom:5,fontSize:18,fontWeight:'bold'}}>Logout</Text>
        </Pressable>
        </View>
      </Pressable>
    </Modal>
    
        <ImageBackground
          style={{ width: "100%", height: 120,position:'relative', bottom:10}}
          resizeMode="contain"
          source={require('../assets/header-bg.png')}>
        
      
        <View>
        <Pressable
        style={{position:"relative",top:40,left:20}}
        onPress={() => setModal(true)}
        >
        <Image style={{width:30,height:30}} 
        resizeMode="contain"
         source={require("../assets/menu.png")}
         />
       </Pressable>
       </View>
       <View>
        <Text
          style={{
            fontWeight: 'bold',
            position: 'relative',
            top:10,
            left:135,
            fontSize:25
            
          }}>
          Categories
        </Text>
        </View>
        
        </ImageBackground>
        </View>
       
      
      );
}
const styles = StyleSheet.create({
  container: {
    
  },centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)',
    },
  modalView: {
    width:280,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 30,
    padding: 20,
    marginBottom:340,
    paddingBottom:15,
    marginRight:60,
    paddingLeft:20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    }
  }
  });