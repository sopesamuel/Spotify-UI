import { SafeAreaView, StyleSheet,Text } from "react-native";


export default function LibraryScreen({route} : any){


    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Library Screen</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:  {
        padding: 20,
        flex: 1
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    }
})