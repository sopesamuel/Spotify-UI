import {Text, SafeAreaView, StyleSheet, View, TextInput, FlatList, Image, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/Index";
import { Feather, AntDesign, Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Notifications } from "../../components/Data";
import { follow } from "../../components/Data";
type Props = NativeStackScreenProps<RootStackParamList, 'WhatsNew'>;




export default function WhatsNew({navigation}: Props) {
    
    const firstObject = Notifications[0];

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity  style={styles.heading} onPress={() => navigation.navigate("Home")}>
                        <Ionicons name="chevron-back" color={"white"} size={26}/>
            </TouchableOpacity>
            <View style={styles.recentSearch}>
                <Text style={styles.recent}>What's New</Text>
                <Text style={styles.newRecent}>The latest releases from artists, podcasts, listeners, and shows you follow.</Text>
            </View>

            <View style={styles.Pod}>
                <View style={styles.PodContainer}>
                    <Text style={styles.text}>Music</Text>
                </View>
                <View style={styles.PodContainer}>
                    <Text style={styles.text}>Podcasts & Shows</Text>
                </View>
                <View style={styles.PodContainer}>
                    <Text style={styles.text}>Feed</Text>
                </View>
            </View>

            {/* Earlier Notifications */}
           <Text style={styles.recent}>Earlier</Text>
           <View style={styles.earlierAll}>
                <View style={styles.intro}>
                    <Image style={styles.TopImage} source={firstObject?.image}/>
                    <View style={styles.coln}>
                        <Text style={styles.newRecent}>{firstObject?.time} day ago</Text>
                        <Text style={styles.text1}>{firstObject?.title}</Text>
                        <Text style={styles.newRecent}>{firstObject?.name}</Text>
                    </View>
                </View>
                <Text style={styles.anotherRecent}>Album</Text>
                <View style={styles.earlierIcons}>
                    <TouchableOpacity style={{ flexDirection: "row"}}>
                        <AntDesign name="hearto" color={"white"}  size={22} />
                        <Entypo name="dots-three-horizontal" color={"white"}  size={22} style={{ marginLeft: 20}}/>
                    </TouchableOpacity>
                    <AntDesign name="play" color={"white"}  size={24} style={{ marginRight: 20}}/>
                </View>
            </View>
            <FlatList 
                data={follow}
                renderItem={({item}) => {
                return(
                    <View style={styles.follow}>
                        <Image style={styles.smallImage} source={item?.image}/>
                        <View style={styles.coln}>
                            <Text style={styles.nameFollow}>{item?.name} <Text style={styles.newRecent}>followed you</Text></Text>
                            <Text style={styles.nameTime}>{item?.time} hrs ago</Text>
                        </View>
                        <TouchableOpacity style={styles.followContainer}>
                            <Text style={styles.text}>Follow</Text>
                        </TouchableOpacity>
                    </View>
                )
            }}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    intro: {
        flexDirection: "row", alignItems: "center"
    },
    earlierAll:{
        flexDirection: "column", marginTop: 10, marginLeft: 25
    },
    coln:{
        flexDirection: "column"
    },
    follow:{
        flexDirection: "row", alignItems: "center", marginTop: 40, borderBottomWidth: 0.3, borderBottomColor: "lightgrey", paddingBottom: 30
    },
    earlierIcons:{
        flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginLeft: 8, alignItems: "center"
    },
    nameFollow:{
        fontSize: 12, fontFamily: "Poppins", color: "white",width: 220, marginLeft: 15, marginTop: 5
    },
    nameTime: {
        fontSize: 11, fontFamily: "Poppins", color: "darkgrey", marginLeft: 15, marginTop: 1
    },
    followContainer:{
        backgroundColor: "#121212", borderRadius: 30, borderColor: "white", paddingHorizontal: 20, paddingVertical: 10, marginHorizontal: 5, borderWidth: 1
    },
    newTime:{
        fontSize: 11, fontFamily: "Poppins", color: "darkgrey", marginLeft: 30, marginTop: 1
    },
    smallImage:{
        width: 40, height: 40, borderRadius: 25, marginLeft: 30
    },
    anotherRecent:{
        fontSize: 12, fontFamily: "Poppins-SemiBold", color: "darkgrey", marginLeft: 5, marginTop: 8
    },
    text1:{
        fontSize: 12, fontFamily: "Poppins", color: "white",width: 220, marginLeft: 30, marginTop: 5
     },
    TopImage: { width: 130, height: 130, borderRadius: 5 },
    newRecent:{
        fontSize: 11, fontFamily: "Poppins", color: "darkgrey", marginLeft: 30, marginTop: 10, width: 350
    },
    recent:{
        fontSize: 24, fontFamily: "Poppins-SemiBold", color: "white", marginLeft: 30, marginTop: 10
    },
    recentSearch:{
        borderTopWidth: 0.3, borderTopColor: "lightgrey", marginTop: 30
    },
    container:  {
        padding: 20, flex: 1, backgroundColor: "#121212"
    },
    heading:{
        flexDirection: 'row', alignItems: "center", marginLeft: 30,
    },
    Pod :{
        flexDirection: "row", marginTop: 20, marginLeft: 20
    },
    PodContainer:{
        backgroundColor: "#121212", borderRadius: 30, borderColor: "white", paddingHorizontal: 20, paddingVertical: 10, marginHorizontal: 5, borderWidth: 1
    },
    text: {
        fontSize: 12, fontFamily: "Poppins", color: "white",
    },
})