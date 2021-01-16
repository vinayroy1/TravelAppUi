import React from "react";
import {
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

//All screens
import {DigitalTicketScreen,DetailsScreen,DestinationScreen} from "./screen";
import Home from "./navigation/tabNavigation";
// extra screens
//import Tabs from "./navigation/tabs";
import { icons, COLORS, SIZES } from './Constants';
const stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const App =()=>{
   return(
     <NavigationContainer theme={theme} >
     <stack.Navigator initialRouteName={"DigitalTickerScreen"}  >
     <stack.Screen name="DigitalTicketScreen" component={DigitalTicketScreen}
           options={{
             title: null,
             headerStyle: {
               backgroundColor: COLORS.white,
               elevation: 0
             },
             headerRight: () => (
               <TouchableOpacity
                 style={{ marginRight: SIZES.padding }}
                 onPress={() => console.log("Menu")}
               >
                 <Image
                   source={icons.barMenu}
                   resizeMode="contain"
                   style={{
                     width: 25,
                     height: 25,
                   }}
                 />
               </TouchableOpacity>
             )
             }}

      />
         <stack.Screen name="DestinationScreen" component={Home}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white,
              elevation:0
            },
           headerRight: () => (
             <TouchableOpacity
               style={{ marginRight: SIZES.padding }}
               onPress={() => console.log("Menu")}
             >
               <Image
                 source={icons.menu}
                 resizeMode="contain"
                 style={{
                   width: 25,
                   height: 25,
                 }}
               />
             </TouchableOpacity>
           ),}}/>
     <stack.Screen name="DetailsScreen" component={DetailsScreen}
     options={{headerShown:false}}
      />
     </stack.Navigator>

     </NavigationContainer>
   );

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    paddingLeft: 10
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  }
});