import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import GameRow from "./GameRow";


const GameContainer = ({ game, ...otherProps }) => (
  <View>
    {
      game.map((row, index) => <GameRow 
        row={row} 
        key={index} 
        {...otherProps} 
      />) 
    }
  </View>
);

const styles = StyleSheet.create({});

export default GameContainer;