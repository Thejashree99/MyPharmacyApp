import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import { useEffect,useState } from "react";
import * as Font from 'expo-font';
import LoginForm from "./components/Pages/LoginForm";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPassword from "./components/Pages/ForgotPassword";



export default function App() {
  const[fonstLoaded,setFontsLoaded]=useState(false);
  const Stack = createStackNavigator();
  useEffect(()=>{
    async function loadFonts(){
      await Font.loadAsync({
        'Poppins-Regular':require('./assets/Fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('./assets/Fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('./assets/Fonts/Poppins-Medium.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  },[]);

  const handleLogin=(values)=>{
Alert.alert('login success')
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}  >
        <Stack.Screen name="Login">
          {props => <LoginForm {...props} onlogin={handleLogin} />}
        </Stack.Screen>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
   




    // <View style={styles.container}>
    //    <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen name="Login" component={LoginForm} />
    //     <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    //   <LoginForm onlogin={handleLogin}/>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
    paddingVertical:40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent:"flex-start",
  }
});
