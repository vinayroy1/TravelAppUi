import React from "react";
import { View, Text,Button,TouchableOpacity,StyleSheet,Image } from "react-native";
import {images,icons,FONTS,SIZES, COLORS} from "../Constants"
import LinearGradient from 'react-native-linear-gradient';

const DigitalTicketScreen = ({ navigation }) => {
    return (
        <View style={Styles.containerStyle}>
             <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Image source={images.onboarding} style={{flex:1}} resizeMode="cover"/>
            </View>

            <View style={{ flex:0.5,alignItems:'center'}}>
                <View style={{width:'80%',alignItems:'center',height:'100%'}}>
                <Text style={{fontFamily:FONTS.body4.fontFamily,fontSize:FONTS.h2.fontSize,marginTop:SIZES.padding}}>Digital Ticket</Text>
                <Text style={{marginTop:SIZES.padding,
                    fontFamily:FONTS.body1.fontFamily,
                    textAlign:"center",
                    color:COLORS.gray,
                    fontSize:18,
                    lineHeight:25
                    }}
                    >
                Easy solution to buy ticket for your travel, business trip, transportation, lodging and culinary</Text>
                </View>
            </View>

            <View style={{ flex:0.5,justifyContent:'center',alignItems:'center' }}>
                <TouchableOpacity style={{ width: '70%', height: '30%' }}
                    onPress={() => { navigation.navigate('DestinationScreen')}}
                 >
                    <LinearGradient style={{ flex: 1, borderRadius: 15,alignItems:'center',justifyContent:'center'}}
                    colors={['#004d99', '#e6005c']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
                  
                    <Text style={{color:COLORS.white,fontFamily:FONTS.body4.fontFamily,fontSize:FONTS.h3.fontSize}}>Start!</Text>

                </LinearGradient>
                
                
                </TouchableOpacity>

            </View>

            
           
        </View>
    );
}

export default DigitalTicketScreen;

const Styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        backgroundColor:COLORS.white,
    }

})