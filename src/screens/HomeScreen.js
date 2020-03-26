import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import GameContainer from "../components/GameContainer";


const HomeScreen = () => {
  const [gameState, setGameState] = useState([
    [{ display: "", x: 0, y: 0 }, { display: "", x: 1, y: 0 }, { display: "", x: 2, y: 0 }],
    [{ display: "", x: 0, y: 1 }, { display: "", x: 1, y: 1 }, { display: "", x: 2, y: 1 }],
    [{ display: "", x: 0, y: 2 }, { display: "", x: 1, y: 2 }, { display: "", x: 2, y: 2 }]
  ]);

  const [turnState, setTurnState] = useState("O");
  const changePlayer = setTurnState(turnState => turnState === "O" ? "X" : "O");

  return (
    <View>
      <GameContainer 
        game={gameState}
        setGameState={setGameState}
        turnState={turnState}
        changePlayer={changePlayer}  />
      <Text>{turnState} now!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default HomeScreen;
