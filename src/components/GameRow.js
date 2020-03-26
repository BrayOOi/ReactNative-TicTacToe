import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import GameUnit from "./GameUnit";


const GameRow = ({ row, ...otherProps }) => (
  <View>
    {
      row.map((unit, index) => <GameUnit 
        unit={unit} 
        key={index}
        {...otherProps}
      />)
    }
  </View>
);

const styles = StyleSheet.create({});

export default GameRow;