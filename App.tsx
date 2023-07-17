import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation/Index';
import useCachedResource from './hooks/useCachedResources';

export default function App() {
  const fontsAvailable = useCachedResource();

  if(fontsAvailable){

  return (
    <>
     <Navigation />
      <StatusBar style="auto" />
    </>
  );
}else{
  return null
}

}

