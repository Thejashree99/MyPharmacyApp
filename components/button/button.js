import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles=StyleSheet.create({
    button:{
        backgroundColor:"#7A86F7",
        width:'100%',
        padding:10,
        borderRadius:9,
        alignItems:'center',
    },
    text:{
      color:'#fff',
      fontSize:16,
    }
});

export default  CustomButton ;