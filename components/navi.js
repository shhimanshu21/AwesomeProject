import * as React from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './login';
import Sign from './signPage';
import About from './about';
import Password from './resetPassword';
import Categories from './categoriesPage';
import Contact from './contactPage';
import Edit from './editPage';
import Forgot from './forgotPage';
import Purchase from './purchasePage';
import Favorites from './favoritesPage';
import Question from './questions';
import Dwrar from './drawerUi';


function LogoBack() {
  return (
    <Image
      style={{ width: 30, height: 30,position:'relative',marginTop:50}}
      source={require('../assets/back.png')}
    />
  );
}

 function LogoImage() {
   return(
    <ImageBackground
              style={{width: 400, height: 120, }}
              source={require('../assets/header-bg.png')}
              resizeMode='contain'

            />
            );
   }

 function LogoTitle() {
  return(
   <Text style={{fontWeight: 'bold',
   position: 'relative',
   left:60,
   top:30,
   fontSize:25}}>
     Sign Up
   </Text>
  );
  }
  function LogoTitle3() {
    return(
     <Text style={{fontWeight: 'bold',
     position: 'relative',
     left:60,
     top:30,
     fontSize:25}}>
       About
     </Text>
    );
    }
    function LogoTitle4() {
      return(
       <Text style={{fontWeight: 'bold',
       position: 'relative',
       left:30,
       top:30,
       fontSize:25}}>
         Change Password
       </Text>
      );
      }
  function LogoTitle1() {
    return(
     <Text style={{fontWeight: 'bold',
     position: 'relative',
     left:35,
     top:30,
     fontSize:25}}>
       Forgot Password
     </Text>
    );
    }
    function LogoTitle7() {
      return(
       <Text style={{fontWeight: 'bold',
       position: 'relative',
       left:35,
       top:30,
       fontSize:25}}>
         Purchase Categories
       </Text>
      );
      }

    function LogoTitle2() {
      return(
       <Text style={{fontWeight: 'bold',
       position: 'relative',
       left:65,
       top:30,
       fontSize:25}}>
         Question
       </Text>
      );
      }
      function LogoTitle8() {
        return(
         <Text style={{fontWeight: 'bold',
         position: 'relative',
         left:65,
         top:30,
         fontSize:25}}>
           Favorites
         </Text>
        );
        }
      function LogoTitle5() {
        return(
         <Text style={{fontWeight: 'bold',
         position: 'relative',
         left:65,
         top:30,
         fontSize:25}}>
           Contact Us
         </Text>
        );
        }
        function LogoTitle6() {
          return(
           <Text style={{fontWeight: 'bold',
           position: 'relative',
           left:65,
           top:30,
           fontSize:25}}>
             Edit Profile
           </Text>
          );
          }

const Stack = createStackNavigator();

export default function Navi() {
  return (
   
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown:false}} name="login" component={Login} />
        <Stack.Screen  options={{
          
          headerBackground: LogoImage,
          headerBackImage :LogoBack,
          headerTitle: LogoTitle,
           }}
           name='sign' component={Sign} />
        <Stack.Screen  
        options={{
          headerBackground: LogoImage,
          headerBackImage :LogoBack,
          headerTitle: LogoTitle3,
        }}
        
        name="about" component={About} />
        <Stack.Screen  
        options={{
          headerBackground: LogoImage,
          headerBackImage :LogoBack,
          headerTitle: LogoTitle4,
        }}
        name="password" component={Password} />
        <Stack.Screen 
        options={{
          header:props => <Dwrar{...props}/>
         }}
        name="categories" component={Categories} />
        <Stack.Screen  
        options={{
          headerBackground: LogoImage,
          headerBackImage :LogoBack,
          headerTitle: LogoTitle5,
        }}
        name="contact" component={Contact} />
        <Stack.Screen  
          options={{
            headerBackground: LogoImage,
            headerBackImage :LogoBack,
            headerTitle: LogoTitle6,
          }}
        name="edit" component={Edit} />
        <Stack.Screen options={{
          headerBackground: LogoImage,
          headerBackImage :LogoBack,
          headerTitle: LogoTitle1,
          }} 
          name="forgot" component={Forgot} />
        <Stack.Screen 
        options={{
          headerBackground: LogoImage,
          headerBackImage :LogoBack,
          headerTitle: LogoTitle7,
        }}
        name="purchase" component={Purchase} />
        <Stack.Screen  
        options={{
          headerBackground: LogoImage,
          headerBackImage :LogoBack,
          headerTitle: LogoTitle8,
        }}
        name="favorites" component={Favorites} />
        <Stack.Screen  
        options={{
          headerBackground: LogoImage,
          headerBackImage :LogoBack,
          headerTitle: LogoTitle2,
          }} 
        name="question" component={Question} />
      </Stack.Navigator>

  );
}