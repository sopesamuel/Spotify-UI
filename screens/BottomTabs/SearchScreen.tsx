import {Text, SafeAreaView, StyleSheet, View, TextInput, FlatList, Image, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/Index";
import { Ionicons, Feather } from "@expo/vector-icons";
import { searchArtiste } from "../../components/Data";

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

export default function SearchScreen({navigation}: Props){

    return(
        <SafeAreaView style={styles.container}>

        {/* Header */}
            <TouchableOpacity  style={styles.heading} onPress={() => navigation.navigate("Home")}>
                <Ionicons name="chevron-back" color={"white"} size={26}/>
                <Text style={styles.header}>Search Spotify</Text>
            </TouchableOpacity>

        {/* Search bar */}
            <View style={styles.search}>
                <Ionicons color="darkgrey" size={20}  name="ios-search" style={styles.searchIcon}/>
                    <TextInput placeholder="Search Spotify" placeholderTextColor="darkgrey" keyboardType="default" style={styles.textInput} />     
            </View>
            <View style={styles.recentSearch}>
                <Text style={styles.recent}>Recent Searches</Text>
            </View>
            
        {/* Artist List */}
            <FlatList 
                data={searchArtiste}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity style={styles.singleSearch}>
                           <View style={styles.singleSearch1}>
                            <Image source={item.image} style={styles.TopImage}/>
                                <View style={styles.nameArtist}>
                                    <Text style={styles.text}>{item.name}</Text>
                                    <Text style={styles.text1}>{item.role}</Text>
                                </View>
                            </View>
                                <Feather name="x" color={"lightgrey"} size={25} style={{ marginRight: 20}}/>
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
    // justifyContent: "center",
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
    marginLeft: 70
},
recent:{
    fontSize: 17,
    fontFamily: "Poppins",
    color: "white",
    marginLeft: 30,
    marginTop: 10
}
})