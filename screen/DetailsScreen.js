import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import LinearGradient  from 'react-native-linear-gradient';
import  {COLORS,SIZES,FONTS,theme,images,icons} from '../Constants';

const CustomIcons =({icon, lable})=>{
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Image source={icon} style={{ width:40, height:40, tintColor:'#004d80'}} resizeMode='cover' />
        <Text style={{fontFamily:FONTS.body4.fontFamily,marginTop:SIZES.base}}>{lable}</Text>
        </View>
    );

}

const CustomRating =({userRating})=>{
  var StarRating =[];
  var fullStar = Math.floor(userRating);
  var halfStar = Math.ceil(5-userRating);
  var noStar = 5-fullStar-halfStar;

  for(var i=0;i<fullStar;i++)
  {
      StarRating.push(
          <Image
            key={`fullStar-${i}`}
              source={icons.starFull}
              resizeMode='cover'
              style={
                  {
                      width:21 ,
                      height:21
                  }
              }
          />
      )
  }
    for (var i = 0; i <halfStar; i++) {
        StarRating.push(
            <Image
                key={`halfStar-${i}`}
                source={icons.starHalf}
                resizeMode='cover'
                style={
                    {
                        width: 21,
                        height: 21
                    }
                }
            />
        )
    }
    for (var i = 0; i<noStar; i++) {
        StarRating.push(
            <Image
                key={`noStar-${i}`}
                source={icons.starEmpty}
                resizeMode='cover'
                style={
                    {
                        width: 21,
                        height: 21
                    }
                }
            />
        )
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {StarRating}
            <Text style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}>{userRating}</Text>
        </View>
    )
}

const DetailsScreen =({navigation})=>{
    return(
        <View style={Styles .containerStyle}>
            <View style={{flex:2,backgroundColor:COLORS.white}}>
                <Image
                    source={images.skiVillaBanner}
                    resizeMode='cover'
                    style={{width:'100%',height:'77%'}}
                />

                <View
                    style={
                       [{position:"absolute",
                        bottom:'3%',
                        left:'5%',
                        right:'5%',
                        height:'40%',
                        backgroundColor:COLORS.white,
                        borderRadius: 15,
                        padding: SIZES.padding,},
                        Styles.shadow]
                    }
                >
                    <View style={{flex:1.5,flexDirection:'row'}}>
                        <View style={{flex:0.4}}>
                            <Image source={images.skiVilla} style={{width:70,height:70,borderRadius:15}} resizeMode="cover"/>
                        </View>
                        <View style={{ flex:1}}>
                            <Text style={{fontFamily:FONTS.h3.fontFamily,fontSize:18}}>Ski villa</Text>
                            <Text style={{ fontFamily: FONTS.body4.fontFamily, fontSize:14,color:COLORS.gray }}>France</Text>
                            <CustomRating userRating={4.5}/>
                        </View>
                    </View>
                    <View style={{ flex: 1,marginTop:SIZES.padding }}>
                    <Text style={{lineHeight:20,fontFamily:FONTS.body4.fontFamily,color:COLORS.gray}}>Ski villa offers simple rooms with mountain view in front of the Ski lift to the Ski Resort</Text>

                    </View>
                </View>
                <View
                    style={{
                        position: 'absolute',
                        top:20,
                        left: 20,
                        right: 20,
                        //height: 50,
                        flexDirection: 'row',
                    }}
                >
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('DestinationScreen') }}
                        >
                            <Image
                                source={icons.back}
                                resizeMode="cover"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => { console.log("Menu on pressed") }}
                        >
                            <Image
                                source={icons.menu}
                                resizeMode="cover"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>



            <View style={{ flex: 1.5, }}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <CustomIcons lable="Villa" icon={icons.villa}/>
                        <CustomIcons lable="Parking" icon={icons.parking} />  
                    <CustomIcons lable={"4\xB0C"} icon={icons.wind} />
                    
                    </View> 
                    <View style={{flex:2,paddingHorizontal:SIZES.padding}}>
                        <Text style={{fontFamily:FONTS.h3.fontFamily,fontSize:20}}>About</Text>
                        <Text style={{ fontFamily: FONTS.body4.fontFamily, fontSize:16 ,lineHeight:25,color:COLORS.gray }}>
                            Located in the Alps with an altitude of 1,702
                            meters. This ski area is the largest ski area in the world
                            and is known as the best place to ski. Many other facilities, such as
                            a fitness center, sauna, steam room to star-rated restaurants.  
                        </Text>
                    </View>
            </View>
            <View style={{ flex:.5,alignItems:'center',justifyContent:'center' }}>
                    <View style={{
                            height:'75%',
                            width:'90%',
                            backgroundColor:COLORS.lightGray,
                            borderRadius:12,
                            flexDirection:'row',
                            justifyContent:'space-between',
                            alignItems:'center',
                            paddingHorizontal:7
                            
                            }}>
                            <Text style={{fontFamily:FONTS.h1.fontFamily,fontSize:FONTS.h1.fontSize}}>$150</Text>
                    <TouchableOpacity style={{ width: '50%', height: '80%' }}
                        
                    >
                        <LinearGradient style={{ flex: 1, borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}
                            colors={['#004d99', '#e6005c']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}>

                            <Text style={{ color: COLORS.white, fontFamily: FONTS.body4.fontFamily, fontSize: FONTS.h3.fontSize }}>Booking</Text>

                        </LinearGradient>
                        </TouchableOpacity>
                    </View>
            </View>

        </View>
    );
}


export default DetailsScreen;
const Styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: COLORS.white

    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})
