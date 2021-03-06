import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default function Question() {
  const data = [
    {
      id: 1,
      text: 'ksagiaufgbASFISBAFfd:,g[pdf d[fkggd ffgpjdfg dfgdf odfbgpasdfhs08ghnsahg[psanv08shagvsnag0[h saohdglsa hsgr grrhg sadgsg ns g0sh gsahg sagrrg sghsad oossnhgsda ',
    },
    {
      id: 2,
      text: 'ksagiaufgbASFISBAFfd:,g[pdf d[fkggd ffgpjdfg dfgdf odfbgpasdfhs08ghnsahg[psanv08shagvsnag0[h saohdglsa hsgr grrhg sadgsg ns g0sh gsahg sagrrg sghsad oossnhgsda ',
    },
    {
      id: 3,
      text: 'ksagiaufgbASFISBAFfd:,g[pdf d[fkggd ffgpjdfg dfgdf odfbgpasdfhs08ghnsahg[psanv08shagvsnag0[h saohdglsa hsgr grrhg sadgsg ns g0sh gsahg sagrrg sghsad oossnhgsda ',
    },
    {
      id: 4,
      text: 'ksagiaufgbASFISBAFfd:,g[pdf d[fkggd ffgpjdfg dfgdf odfbgpasdfhs08ghnsahg[psanv08shagvsnag0[h saohdglsa hsgr grrhg sadgsg ns g0sh gsahg sagrrg sghsad oossnhgsda s',
    },
    {
      id: 5,
      text: 'ksagiaufgbASFISBAFfd:,g[pdf d[fkggd ffgpjdfg dfgdf odfbgpasdfhs08ghnsahg[psanv08shagvsnag0[h saohdglsa hsgr grrhg sadgsg ns g0sh gsahg sagrrg sghsad oossnhgsda ',
    },
    {
      id: 6,
      text: 'ksagiaufgbASFISBAFfd:,g[pdf d[fkggd ffgpjdfg dfgdf odfbgpasdfhs08ghnsahg[psanv08shagvsnag0[h saohdglsa hsgr grrhg sadgsg ns g0sh gsahg sagrrg sghsad oossnhgsda ',
    },
  ];

  const renderItem = ({ item }) => (
  
    <View
      style={{
        padding: 18,
        backgroundColor: '#87CEEB',
        height: 350,
        borderRadius: 30,
        alignSelf: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        position:'relative',
        top:200
      }}>
      <Text style={{ fontSize: 20, lineHeight: 30 }}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View
        style={{  alignItems: 'center', marginTop: 20 }}>
        <Carousel
          inactiveSlideOpacity={1}
          inactiveSlideScale={1}
          data={data}
          renderItem={renderItem}
          sliderWidth={400}
          itemWidth={350}
        />
      </View>

      <View>
        <TouchableHighlight  >
          <Image
            style={{
              width: 60,
              height: 60,
              position: 'relative',
            right:150,
              bottom:50,
            }}
            resizeMode="contain"
            source={require('../assets/left-arrow.png')}
          />
        </TouchableHighlight>
      </View>
      <View>
        <TouchableHighlight>
          <Image
            style={{
              width: 60,
              height: 60,
              position: 'relative',
              left:150,
              bottom: 110,
            }}
            resizeMode="contain"
            source={require('../assets/right-arrow.png')}
          />
        </TouchableHighlight>
      </View>
      <View>
        <ImageBackground
          style={{ width: 400, height: 120, position: 'relative', bottom:100 }}
          resizeMode="contain"
          source={require('../assets/footer-bg.png')}>
          <TouchableHighlight >
            <Image
              style={{
                width: '25%',
                height: "80%",
                position: 'relative',
                bottom: 75,
                left: 155,
              }}
              resizeMode="contain"
              source={require('../assets/heart.png')}
            />
          </TouchableHighlight>
        </ImageBackground>
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