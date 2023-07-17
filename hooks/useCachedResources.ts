import { useEffect, useState } from "react";
import * as Font from 'expo-font';

export default function useCachedResources(){
    const [isLoaded, SetisLoaded] = useState(false);

    useEffect(() =>
    {
        async function loadedResources(){
                try {
                   await Font.loadAsync({
                        "Poppins" : require('../assets/fonts/Poppins-Medium.ttf'),
                        "Poppins-Bold": require('../assets/fonts/Poppins-Bold.ttf'),
                        "Poppins-SemiBold": require('../assets/fonts/Poppins-SemiBold.ttf')
                    })
                } catch (e) {
                    console.warn(e)
                } finally{
                    SetisLoaded(true)
                } 
        }
        loadedResources()

    }, [])

    return isLoaded;

}