import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function Categories({navigation}) {

const any=[
{
  id:1,
  image:require('../assets/category.png'),
  name: 'Categories Name',
},
{
  id:2,
  image:require('../assets/category.png'),
  name: 'Categories Name',
},
{
  id:3,
  image:require('../assets/category.png'),
  name: 'Categories Name',
},
{
  id:4,
  image:require('../assets/category.png'),
  name: 'Categories Name',
},
{
  id:5,
  image:require('../assets/category.png'),
  name: 'Categories Name',
},
{
  id:6,
  image:require('../assets/category.png'),
  name: 'Categories Name',
},
];

const renderItem=({item})=>(
  <View style={{marginBottom:15}}>
    <Pressable
     onPress={() => navigation.navigate('question')}
    >
     <ImageBackground
    style={{width:380,height:70}}
    source={item.image}
    > 
    <View style={{flexDirection:'row'}}>
    <View>
      <Image
      style={{height:50,width:50,position:'relative',top:10,left:20}}
      source={require('../assets/image2.png')}
      />
    </View>
    <View>
      <Text style={{fontSize:20,position:'relative',left:40,top:20}}>{item.name}</Text>
      </View>
      </View>
      </ImageBackground>
      </Pressable>
  </View>
)

  return (
    <View style={styles.container}>
    <FlatList
    data={any}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    />
    <View>
      <ImageBackground 
      style={{width:400,height:120,position:'relative',bottom:10}}
      source={require('../assets/footer-bg.png')}
      />
    </View>
      </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    
    position:"relative",
    top:140,
   position:'relative',
   top:30,
    alignItems: 'center',
    justifyContent: 'center',
    },
  
});