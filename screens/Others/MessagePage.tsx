import {Text, SafeAreaView, StyleSheet, View, TextInput, FlatList, Image, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/Index";
import { FontAwesome5, Ionicons,AntDesign, Entypo,FontAwesome } from '@expo/vector-icons';
import { Notifications } from "../../components/Data";
import { MusicList } from "../../components/Data";


type Props = NativeStackScreenProps<RootStackParamList, 'Page'>;




export default function MessagePage({route, navigation}: any) {

    const { name, image } = route.params;
    const firstObject = Notifications[0];

    return(
        <SafeAreaView style={styles.container}>
            <View  style={styles.heading}>
                <View style={styles.header2}>
                <Ionicons name="chevron-back" color={"white"} size={26} onPress={() => navigation.goBack()}/>
                    <Image style={styles.smallImage} source={image}/>
                    <View style={{ flexDirection: "column"}}>
                        <Text style={styles.header}>{name}</Text>
                        <Text style={{ color: "lightgreen", fontSize:  11, marginLeft: 10, fontFamily: "Poppins", marginTop: 1}}>Online</Text>
                    </View>
                </View>
            </View>

            {/* HEADERS */}
            <View style={{ flexDirection: "column", alignItems: "center", marginTop: 50}}>
                <Image style={styles.BiggerImage} source={image}/>
                <Text style={styles.header}>{name}</Text>
                <View style={styles.PodContainer}>
                    <Text style={styles.text}>View Profile</Text>
                </View>
                    <Text style={styles.bio}>250k followers . 120 feed posts</Text>
                    <Text style={styles.bio}>You follow each other on Spotify</Text>
                    <Text style={styles.bio}>You both follow Nicki Minaj and 25 others</Text>
            </View>
            
            <View style={styles.search}>
                <View style={{ flexDirection: "row"}}>
                    <TextInput placeholder="Start typing...." placeholderTextColor="darkgrey" keyboardType="default" style={styles.textInput} /> 
                </View>
                <View style={{ flexDirection: "row", marginRight: 20}}>
                <FontAwesome5 name="microphone-alt" color={"white"}  size={18}/>
                <FontAwesome name="image"  color={"white"}  size={18} style={{ marginLeft: 15}}/>  
                </View>
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
    textInput : { paddingHorizontal: 20, fontSize: 11, color: "#000" ,fontFamily: "Poppins",
    },
    search : {
        top: 400,alignSelf: "center", flexDirection: "row",justifyContent: "space-between", backgroundColor: "#B3B3B333", marginTop: 20, width: 370,height: 37, borderRadius: 16, alignItems: "center"
    },
    bio:{
        fontSize: 11, fontFamily: "Poppins", color: "darkgrey", marginLeft: 15, marginTop: 1
    },
    text: {
        fontSize: 12, fontFamily: "Poppins", color: "green",
    },
    BiggerImage:{
        width: 100, height: 100, borderRadius: 50, marginLeft: 5
    },
    header2:{
        flexDirection: "row", alignItems: "center", marginLeft: 10
    },
    header: {
        fontSize: 17, fontFamily: "Poppins", color: "white", marginLeft: 10,
    },
    smallImage:{
        width: 40, height: 40, borderRadius: 25, marginLeft: 5
    },
    BigImage: {
        width: 400, height: 300, borderRadius: 20, alignSelf: "center", marginTop: 20
    },
    container:  {
        padding: 20, flex: 1, backgroundColor: "#121212"
    },
    heading:{
        flexDirection: 'row', alignItems: "center", justifyContent: "space-between"
    },
    PodContainer:{
        backgroundColor: "#121212", borderRadius: 10, borderColor: "green", paddingHorizontal: 20, paddingVertical: 10, marginHorizontal: 5, borderWidth: 1, marginTop: 10, marginBottom: 20
    },
})