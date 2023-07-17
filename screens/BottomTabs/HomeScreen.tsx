import { Text, View, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/Index";
import { Feather, AntDesign, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { PodShows } from "../../components/Data";
import { Episodes } from "../../components/Data";

const {width, height} = Dimensions.get('window')
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>


export default function HomeScreen({navigation}: Props){

    return(
        <SafeAreaView style={styles.container}>
            {/* Headers */}
            <View style={styles.headerList}>
                <Text style={styles.header}>Good Morning</Text>
                <View style={styles.headerIcons}>
                    <TouchableOpacity style={styles.SingleIcon} onPress={() => navigation.navigate("WhatsNew")}>
                        <Feather name="bell" size={25} color={"white"}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.SingleIcon}>
                        <AntDesign name="clockcircleo" size={25} color={"white"}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.SingleIcon}>
                        <Feather name="settings" size={25} color={"white"}/>
                    </TouchableOpacity>
                </View>
            </View>
            {/* Music & Podcast */}

            <View style={styles.Pod}>
                <View style={styles.PodContainer}>
                    <Text style={styles.text}>Music</Text>
                </View>
                <View style={styles.PodContainer}>
                    <Text style={styles.text}>Podcasts & Shows</Text>
                </View>
            </View>

            <View style={styles.TopList}>
                {PodShows.map((text) => (
                        <View style={styles.TopMusic}>  
                            <Image source={text.image} style={styles.TopImage}/>
                            <Text style={styles.text1}>{text.name}</Text>
                        </View>
                ))}
            </View>

            {/* New Episodes */}
                <View style={styles.Episodes}>
                    <Text style={styles.header}>New Episodes</Text>

                    <View style={styles.column}>
                      {Episodes.map((text) => (
                        <View style={styles.TopMusic1}>  
                            <Image source={text.image} style={styles.TopImage1}/>
                                <View style={styles.column}>
                                    <Text style={styles.subHeader}>{text.Title}</Text>
                                    <Text style={styles.text2}>{text.subTitle}</Text>
                                    <View style={styles.iconsDateTime}>
                                        <AntDesign name="pluscircleo" color={"darkgrey"} size={24}/>
                                            <Text style={styles.text3}>{`${text.Date} . ${text.Time}`}.</Text>
                                        <AntDesign name="play" color={"white"} size={24}  style={{ marginLeft:  50}}/>
                                    </View>
                                </View>
                        </View>
                        ))}
                    </View>
                </View>

                {/* Play */}
                <View style={styles.Play}>
                    <View style={{ flexDirection: "row", marginLeft: 20, alignItems: "center"}}>
                    <Image source={require('my-app/assets/Drake1.png')} style={styles.PlayImage}/>
                    <View style={styles.column}>
                        <Text style={styles.subHeader}>Bad To Me</Text>
                        <Text style={styles.text2}>Wizkid</Text>
                    </View>
                    </View>
                    <MaterialIcons name="connected-tv" color={"white"}  size={24} style={{marginRight: 20}}/>
                    <FontAwesome5 name="play" color={"white"}  size={20} />
                </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    PlayImage:{
        width: 35, height: 35, borderRadius: 8
    },
    Play:{
        marginHorizontal: 20, paddingVertical: 10, top: "5%", flexDirection: "row", backgroundColor: "#9747FF", alignItems: "center", borderRadius: 8
    },
    Episodes:{
        marginTop: 30
    },
    column:{
        flexDirection: "column"
    },
    iconsDateTime: {
        flexDirection: "row", marginLeft: 20, alignItems: "center", marginTop: 5
    },
    TopList :{
        marginTop: 20, paddingHorizontal: 25, flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between",
    },
    TopImage:{
        width: 70, height: 70, borderBottomLeftRadius: 5, borderTopLeftRadius: 5
    },
    TopImage1:{
        width: 120, height: 120, borderRadius: 8
    },
    TopMusic: {
        flexDirection: "row", width: 170, alignItems: "center", backgroundColor: "#B3B3B333", borderRadius: 5, marginVertical: 5
    },
    TopMusic1: {
        flexDirection: "row", width: 350, borderRadius: 5, marginLeft: 25, marginVertical: 5, alignItems: "center"
    },
    container:  {
        padding: 20, flex: 1, backgroundColor: "#121212"
    },
    header: {
        fontSize: 27, marginLeft: 20, fontFamily: "Poppins", color: "white"
    },
    subHeader: {
        fontSize: 14, marginLeft: 20, fontFamily: "Poppins-Bold", color: "white", width: 200
    },
    text: {
        fontSize: 12, fontFamily: "Poppins", color: "white",
    },
    text1:{
        fontSize: 12, fontFamily: "Poppins", color: "white", marginLeft: 15, width: 65
    },
    text2:{
        fontSize: 12, fontFamily: "Poppins", color: "darkgrey", marginLeft: 20, width: 220
    },
    text3:{
        fontSize: 11, fontFamily: "Poppins", color: "darkgrey", marginLeft: 5,
    },
    PodContainer:{
        backgroundColor: "#B3B3B333", borderRadius: 15, borderColor: "red", paddingHorizontal: 20, paddingVertical: 10, marginHorizontal: 5
    },
    headerList: {
        flexDirection: "row", justifyContent: "space-between", alignItems: "center"
    },
    headerIcons: {
        flexDirection: "row", marginHorizontal: 10,
    },
    SingleIcon:{
        marginHorizontal: 10
    },
    Pod :{
        flexDirection: "row", marginTop: 20, marginLeft: 20
    }
})