import {Text, SafeAreaView, StyleSheet, View, TextInput, FlatList, Image, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/Index";
import { Ionicons, Feather } from "@expo/vector-icons";
import { searchArtiste } from "../../components/Data";

type Props = NativeStackScreenProps<RootStackParamList, 'Message'>;

export default function MessageScreen({navigation}: Props){

    return(
        <SafeAreaView style={styles.container}>

        {/* Header */}
            <TouchableOpacity  style={styles.heading} onPress={() => navigation.navigate("Home")}>
                <Ionicons name="chevron-back" color={"white"} size={26}/>
                <Text style={styles.header}>Message</Text>
            </TouchableOpacity>

        {/* Search bar */}
            <View style={styles.search}>
                <View style={{ flexDirection: "row"}}>
                    <Ionicons color="darkgrey" size={20}  name="ios-search" style={styles.searchIcon}/>
                    <TextInput placeholder="Search Spotify" placeholderTextColor="darkgrey" keyboardType="default" style={styles.textInput} /> 
                </View>
                <Ionicons name="people" color={"white"} style={{ marginRight: 20}} size={18}/>  
            </View>

        {/* Artist List */}
            <View style={styles.recentSearch}>
                <Text style={styles.recent}>Search Friends</Text>
            </View>
            
            <FlatList 
                data={searchArtiste}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity style={styles.singleSearch} onPress={() => navigation.navigate("Page", { name: item.name, image: item.image} as any)}>
                           <View style={styles.singleSearch1}>
                            <Image source={item.image} style={styles.TopImage}/>
                                <View style={styles.nameArtist}>
                                    <Text style={styles.text}>{item.name}</Text>
                                    <Text style={styles.text1}>{item.role}</Text>
                                    <Text style={styles.text2}>{item.activity}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }

                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    singleSearch:{
        alignItems: "center", flexDirection: "row", marginVertical: 8, marginLeft: 15, justifyContent:"space-between"
    },
    singleSearch1 :{
        flexDirection: "row"
    },
    nameArtist:{
        flexDirection: "column",
    },
    TopImage:{
        width: 60,
        height: 60,
        borderRadius: 50
    },
    text2: {
        fontSize: 9, fontFamily: "Poppins", color: "lightgreen", marginLeft: 30, marginTop: 3
    },
    text1:{
        fontSize: 9,
        fontFamily: "Poppins",
        color: "lightgrey",
        marginLeft: 30,
        marginTop: 3
    },
    text:{
        fontSize: 12,
    fontFamily: "Poppins",
    color: "white",
    marginLeft: 30,
    marginTop: 10
    },
    recentSearch:{
        borderTopWidth: 0.3, borderTopColor: "lightgrey", marginTop: 30
    },
    heading:{
        flexDirection: 'row',
        alignItems: "center",
        marginLeft: 30
    },
    textInput : {
        paddingHorizontal: 20,
        fontSize: 11, 
        color: "#000" ,
        fontFamily: "Poppins",
    },
    searchIcon:{
        marginLeft: 30
    },
search : {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#B3B3B333",
    marginTop: 20,
    width: 370,
    height: 37,
    borderRadius: 16,
    alignItems: "center"
},
container:  {
    padding: 20,
    flex: 1,
    backgroundColor: "#121212"
},
header: {
    fontSize: 20,
    fontFamily: "Poppins",
    color: "white",
    marginLeft: 100
},
recent:{
    fontSize: 17,
    fontFamily: "Poppins",
    color: "white",
    marginLeft: 30,
    marginTop: 10
}
})