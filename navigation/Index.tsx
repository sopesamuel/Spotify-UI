import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/BottomTabs/HomeScreen";
import SearchScreen from "../screens/BottomTabs/SearchScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons, Entypo } from '@expo/vector-icons';
import LibraryScreen from "../screens/BottomTabs/LibraryScreen";
import FeedScreen from "../screens/BottomTabs/FeedScreen";
import MessageScreen from "../screens/BottomTabs/MessageScreen";
import WhatsNew from "../screens/Others/WhatsNew";
import MessagePage from "../screens/Others/MessagePage";

export type RootStackParamList = {
    Root: undefined;
    Welcome: undefined;
    Home: undefined;
    WhatsNew: undefined;
    Library: undefined;
    Search: undefined;
    Feed:undefined;
    Message: undefined;
    Page: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation(){
    return(
    <NavigationContainer>
        <RootNavigator />
    </NavigationContainer>
    )
}

function RootNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Root"
            component={BottomTabNavigator}
            options={{ headerShown: false}}
            />

        <Stack.Screen 
            name="WhatsNew"
            component={WhatsNew}
            options={{
                headerShown: false,
                }}
            />
             <Stack.Screen 
            name="Page"
            component={MessagePage}
            options={{
                headerShown: false,
                }}
            />

      </Stack.Navigator>
    )
}

const BottomTab = createBottomTabNavigator<RootStackParamList>();

function BottomTabNavigator(){
    return(
        <BottomTab.Navigator 
            initialRouteName="Home" 
            screenOptions={{
                tabBarStyle: {
                backgroundColor: '#121212',
                borderTopColor: '#121212'
            }
         }}>

            <BottomTab.Screen
              name="Home"
              component={HomeScreen}
              
              options={{
                    tabBarIcon: ({focused, size}) => <Entypo name="home" size={size} color={focused ? "white" : "grey"}/>,
                    headerShown: false,
                    tabBarActiveTintColor: "white"                

                    }}
            />

             <BottomTab.Screen
               name="Search"
               component={SearchScreen}
               
               options={{
                tabBarIcon: ({color, focused}) => 
                    <FontAwesome name="search" size={20} color={focused ? "white" : "grey"} />,
                    headerShown: false,
                    tabBarActiveTintColor: "white"                
                    }}
                
              />

            {/* <BottomTab.Screen
               name="Library"
               component={LibraryScreen}
               options={{
                tabBarIcon: ({color, size}) => 
                    <Ionicons name="library" size={20} color={color} />,
                    headerShown: false                
                    }}
                    
            /> */}

             <BottomTab.Screen
               name="Feed"
               component={FeedScreen}
               options={{
                tabBarIcon: ({color, focused}) => 
                    <FontAwesome name="feed" size={20} color={focused ? "white" : "grey"} />,
                    headerShown: false ,
                    tabBarActiveTintColor: "white"                               
                    }}
            />

             <BottomTab.Screen
               name="Message"
               component={MessageScreen}
               options={{
                tabBarIcon: ({color, focused}) => 
                    <Entypo name="mail-with-circle" size={20} color={focused ? "white" : "grey"} />,
                    headerShown: false,
                    tabBarActiveTintColor: "white"                                
                    }}
            />
        </BottomTab.Navigator>
    )
}