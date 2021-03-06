import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
  Pressable,
} from 'react-native';

export default function Purchase() {
  return (
    <View style={styles.container}>

      <View style={{ paddingLeft:20,paddingRight:20}}>
        <Text style={{fontSize:17}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: '#0c345c',
            fontWeight: 'bold',
            fontSize: 25,
            position: 'relative',
            top: 20,
            left:10
          }}>
          Price: $50
        </Text>
      </View>
      <View>
        <Pressable
          onPress={() => alert('Pressed!')}
          style={{
            backgroundColor: '#87CEEB',
            alignItems: 'center',
            padding: 4,
            borderRadius: 20,
            height: 50,
            width: 350,
            position: 'relative',
            top: 90,
            
          }}>
          <Text style={{ fontWeight: 'bold', position: 'relative', top: 5 }}>
            Purchase
          </Text>
        </Pressable>
      </View>
      <View>
        <Image
          style={{ width: 400, height: 120,position:'relative',top:160 }}
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
   // padding: '10',
  },
});