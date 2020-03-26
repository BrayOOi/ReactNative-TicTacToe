import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const GameUnit = ({ unit, setGameState, turnState, changePlayer }) => {
  const handlePress = () => {
    if (unit.display) {
      return;
    }

    setGameState(prevState => [
      ...prevState,
      [{ display: turnState, x: unit.x, y: unit.y }, ...prevState[unit.y]]
    ]);

    changePlayer();
  }
  
  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Text>
          { unit.display }
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default GameUnit;