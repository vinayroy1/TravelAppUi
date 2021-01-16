import React,{useState} from "react";
import { View, Text,Button,TouchableOpacity,Image, StyleSheet, ImageBackground,FlatList} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { images, icons, COLORS, FONTS, SIZES } from '../Constants/index';
import { sin } from "react-native-reanimated";


const Options= ({bgColor,title,icon,onPress})=>{
    return(
        <TouchableOpacity style={{flex:1,alignContent:"center",alignItems:'center',justifyContent:'center'}}>
            <View style={{height:60,width:60,}}>
                <LinearGradient 
                    style={{flex: 1, borderRadius: 15,alignItems:'center',justifyContent:'center'}}
                colors={bgColor}
                 start={{x:0,y:0}}
                 end={{x:0,y:1}}
                 >
                    <Image source={icon} style={{ width: 30, height: 30, tintColor: COLORS.white,}}/>
                
                </LinearGradient>
            </View>
            <Text style={{fontFamily:FONTS.body1.fontFamily,marginTop:10}}>{title}</Text>
        </TouchableOpacity>
    );
}

const DestinationScreen = ({navigation}) => {
    // Dummy Data
    const [destinations, setDestinations] = useState([
        {
            id:'123ndfjnj',
            name: "Ski Villa",
            img: images.skiVilla,
        },
        {
            id:'124jshgjgf',
            name: "Climbing Hills",
            img: images.climbing,
        },
        {
            id:'125fgdxhjn',
            name: "Frozen Hills",
            img: images.frozen,
        },
        {
            id:'126djfgjdfh',
            name: "Beach",
            img: images.beach,
        },
    ]);
     function flatListRender(item , index)
     {
         return(
             <TouchableOpacity style={{ justifyContent: 'center', marginHorizontal: SIZES.base, }}
                 onPress={() => { navigation.navigate("DetailsScreen") }}>
                
                 <Image source={item.img} resizeMode="cover"
                     style={{
                         width: SIZES.width * 0.28,
                         height: '82%',
                         borderRadius: 15
                     }}
                        
                     />

               
                <Text style={{fontFamily:FONTS.h2.fontFamily}}>{item.name}</Text>
             </TouchableOpacity>
         );
     }
    return (
        <View style={Styles.containerStyle}>

            <View style={{ flex: 1, marginTop: SIZES.base, paddingHorizontal: SIZES.padding}}>
                <ImageBackground
                    source={images.homeBanner}
                    resizeMode="cover"
                    style={{width:"100%",height:"100%",borderRadius:15}}
                    imageStyle={{ borderRadius:15}}
                    >
                <View style={{width:'70%',marginLeft:SIZES.padding,justifyContent:'center',height:'100%'}}>
                    <Text 
                    style={{
                        fontSize:FONTS.largeTitle.fontSize,
                        fontFamily:FONTS.largeTitle.fontFamily,
                        color:COLORS.white,
                        lineHeight:FONTS.largeTitle.lineHeight,
                        elevation:20
                    }}>
                    Are you ready
                    for Adventure
                    </Text>
                    </View>
                </ImageBackground>
             </View>
            
            <View style={{ flex: 1,marginTop:SIZES.padding, }}>
                    <View style={{flexDirection:"row",flex:1}}>
                    <Options bgColor={['#66ff99','#440066']} title='Flight' icon={icons.airplane}/>
                    <Options bgColor={['#0099e6','#e6005c']} title='Train' icon={icons.train}/>
                    <Options bgColor={['#476b6b', '#e6005c']} title='Bus' icon={icons.bus}/>
                    <Options bgColor={['#cccc00', '#440066']} title='Taxi' icon={icons.taxi}/>
                </View>
                <View style={{ flexDirection: "row", flex: 1 }}>
                    <Options bgColor={['#00394d', '#0099e6']} title='Hotel' icon={icons.bed} />
                    <Options bgColor={['#000d1a', '#66ff99']} title='Eats' icon={icons.eat}/>
                    <Options bgColor={['#004d99', '#e6005c']} title='Adventure'icon={icons.compass}/>
                    <Options bgColor={['#00004d', '#440066']} title='Event' icon={icons.event}/>
                </View>


            </View>
            <View style={{ flex: 1,paddingHorizontal:SIZES.padding,marginTop:SIZES.base }}>
                    <Text  style={{fontFamily:FONTS.h2.fontFamily,fontSize:FONTS.h2.fontSize}}>Destination</Text>
                    
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                         data={destinations}
                         keyExtractor={item => item.id}
                        renderItem={({ item, index }) =>  flatListRender(item, index)}
                    />
            </View>
              
        </View>
    );
}

export default DestinationScreen;

const Styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        backgroundColor:COLORS.white
      
    }
})
