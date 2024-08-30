import React from "react";
import {Text,TextProps} from 'react-native';

const Customh1=(props)=>(
    <Text{...props} style={[props.style,{fontFamily:'Poppins-Medium',fontSize:18,textAlign:'center',marginBottom:30}]}/>
);
export default Customh1