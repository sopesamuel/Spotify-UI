import {Text, SafeAreaView, StyleSheet, View, TextInput, FlatList, Image, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/Index";
import { Feather, EvilIcons,AntDesign, Entypo, } from '@expo/vector-icons';
import { Notifications } from "../../components/Data";
import { MusicList } from "../../components/Data";


type Props = NativeStackScreenProps<RootStackParamList, 'Feed'>;




export default function FeedScreen({navigation}: Props) {
    
    const firstObject = Notifications[0];

    return(
        <SafeAreaView style={styles.container}>
            <View  style={styles.heading}>
                <View style={styles.header2}>
                    <Image style={styles.smallImage} source={require('my-app/assets/SnoppDog.png')}/>
                    <Text style={styles.header}>Megan Ryan</Text>
                </View>
                <TouchableOpacity>
                    <AntDesign name="pluscircle" size={33} color={"lightgreen"} style={{ marginRight: 20}}/>
                </TouchableOpacity>
            </View>

            {/* Music List */}
                <FlatList 
                    data={MusicList}
                    renderItem={({item}) => {
                        return(
                            <View style={styles.musicList2}>
                                <View style={styles.follow}>
                                    <View style={styles.intro}>
                                        <Image style={styles.smallImage1} source={item.image}/>
                                        <View style={styles.coln}>
                                            <Text style={styles.nameFollow}>{item.name}</Text>
                                            <Text style={styles.nameTime}>{item.role}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity >
                                        <Entypo name="dots-three-horizontal" color={"white"}  size={22} style={{ marginRight: 20}}/>
                                    </TouchableOpacity>
                                </View>
                                <Image style={styles.BigImage} source={item.image}/>
                                <Text style={styles.nameFollow1}>{item.content}</Text>
                                <Text style={styles.nameTime}>3 hours ago</Text>

                                <View style={styles.iconBox}>
                                    <View style={styles.iconHub}>
                                        <AntDesign name="heart"  color={"green"}  size={22} />
                                        <Text style={styles.nameIcon}>12k</Text>
                                    </View>

                                    <View style={styles.iconHub1}>
                                        <EvilIcons name="comment"  color={"white"}  size={30} />
                                        <Text style={styles.nameIcon}>12k</Text>
                                    </View>

                                    <View style={styles.iconHub}>
                                        <Feather name="send"  color={"white"}  size={22} />
                                        <Text style={styles.nameIcon}>12k</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                />


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    intro:{
        flexDirection: "row", alignItems: "center"
    },
    iconBox: {
        flexDirection: "row", marginLeft: 13, marginTop: 15
    },
    iconHub: {
        flexDirection: "column", alignItems: "center"
    },
    iconHub1: {
        flexDirection: "column", marginHorizontal: 20, alignItems: "center"
        },
    musicList2: {
        flexDirection: "column" , borderBottomWidth: .25, borderBottomColor: "darkgrey", paddingBottom: 20, marginTop: 7
    },
    header2:{
        flexDirection: "row", alignItems: "center", marginLeft: 10
    },
header: {
    fontSize: 20, fontFamily: "Poppins", color: "white", marginLeft: 10,
},
    smallImage:{
        width: 40, height: 40, borderRadius: 25, marginLeft: 5
    },
    BigImage: {
        width: 400, height: 300, borderRadius: 20, alignSelf: "center", marginTop: 20
    },
    smallImage1:{
        width: 40, height: 40, borderRadius: 25, marginLeft: 20
    },
    container:  {
        padding: 20, flex: 1, backgroundColor: "#121212"
    },
    heading:{
        flexDirection: 'row', alignItems: "center", justifyContent: "space-between",  borderBottomWidth: .3, borderBottomColor: "lightgrey", paddingBottom: 15
    },
    nameFollow:{
        fontSize: 12, fontFamily: "Poppins", color: "white", marginLeft: 15, marginTop: 5, 
    },
    nameFollow1:{
        fontSize: 12, fontFamily: "Poppins", color: "white", marginTop: 5, width: 400, marginLeft: 10
    },
    nameTime: {
        fontSize: 11, fontFamily: "Poppins", color: "darkgrey", marginLeft: 13, marginTop: 1
    },
    nameIcon:{
        fontSize: 11, fontFamily: "Poppins", color: "darkgrey", marginTop: 1
    },
    coln:{
        flexDirection: "column", 
    },
    follow:{
        flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 10
    },
})