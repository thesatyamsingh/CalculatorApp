import { View, Text, Switch, TouchableOpacity, requireNativeComponent } from "react-native";
import React, { useState } from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState("Satyam");

  // To get Desired color
  const getColor = () => {
    return darkTheme ? colors.dark : colors.light;
  };

  const getRColor = () => {
    return darkTheme ? colors.light : colors.dark;
  };

  const layout = {
    container: {
      height: "100%",
      width: "100%",
      paddingVertical: 30,
      backgroundColor: getColor(),
      alignItems: "center",
    },
  };

  const Btn = ({title, type}) => (
    <TouchableOpacity
    onPress={() =>{}}
      style={{
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: getRColor(),
        height: 70,
        width: 70,
        margin: 13,
      }}
    >
      <Text
        style={{
          fontSize: 37,
          color: getColor(),
          textAlign: "center",
          textAlignVertical: "center",
          color: getBtnColor(type)
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  const getBtnColor = (type)=> {
    if(type == 'top') {
      return '#eb7100'
    } else if (type == 'right') {
      return '#eb7100'
    } else {
      return getColor(colors.dark,colors.light )
    }
  }

  return (
    <View style={layout.container}>
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={getRColor()}
        trackColor={{ true: colors.light2, false: colors.dark2 }}
      ></Switch>
      <Text
        style={{
          fontSize: 40,
          color: getRColor(),
          width: "100%",
          textAlign: "right",
          paddingRight: 20,
          marginTop: 160,
          paddingBottom: 20,
        }}
      >
        {result}
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: getColor(),
        }}
      >
        <Btn title="C" type="top" />
        <Btn title="DL" type="top" />
        <Btn title="%" type="top" />
        <Btn title="/" type="top" />
        <Btn title="7" type="number" />
        <Btn title="8" type="number"/>
        <Btn title="9"  type="number"/>
        <Btn title="*" type="right"/>
        <Btn title="4" type="number" />
        <Btn title="5"  type="number"/>
        <Btn title="6" type="number" />
        <Btn title="-" type="right"/>
        <Btn title="3" type="number" />
        <Btn title="2" type="number" />
        <Btn title="1"  type="number"/>
        <Btn title="+" type="right"/>
        <Btn title="00" type="number" />
        <Btn title="0" type="number" />
        <Btn title="." type="number"/>
        <Btn title="=" type="right"/>
      </View>
    </View>
  );
}

// OBJECT
const colors = {
  dark: "#22252D",
  dark1: "#292B36",
  dark2: "#272B33",
  light: "#FFF",
  light1: "#F1F1F1",
  light2: "#3F7F7F7",
};
