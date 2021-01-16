import React from "react"
import {View, Text, Button,Image} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DestinationScreen  from "../screen/DestinationScreen";
import {icons,images,COLORS} from "../Constants/index"
const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: 90,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 21,
    },
};

function Home() {
    return (
        <Tab.Navigator tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.primary : COLORS.gray;

                    switch (route.name) {
                        case "Home":
                            return (
                                <Image
                                    source={icons.home}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 30,
                                        height: 30
                                    }}
                                />
                            );
                        case "Search":
                            return (
                                <Image
                                    source={icons.search}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 30,
                                        height: 30
                                    }}
                                />
                            );
                        case "Details":
                            return (
                                <Image
                                    source={icons.bookMark}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 30,
                                        height: 30
                                    }}
                                />
                            );
                        case "Profile":
                            return (
                                <Image
                                    source={icons.user}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 30,
                                        height: 30
                                    }}
                                />
                            );
                    }
                }
            })}>
            <Tab.Screen name="Home" component={DestinationScreen} />
            <Tab.Screen name="Search" component={DestinationScreen} />
            <Tab.Screen name="Details" component={DestinationScreen} />
            <Tab.Screen name="Profile" component={DestinationScreen} />
        </Tab.Navigator>
    );
}

export default Home;